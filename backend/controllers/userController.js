import User from "../models/usermodel.js";
import validator from "validator" ;
import bcrypt from "bcrypt" ;
import jwt from 'jsonwebtoken' ;

const JWT_SECRET = process.env.JWT_SECRET ;
const TOKEN_EXPIRES = process.env.TOKEN_EXPIRES ;

const createToken = (userId) => jwt.sign({id:userId1} , JWT_SECRET , {expiresIn: TOKEN_EXPIRES}) ;

// REGISTER FUNCTION 
export async function registerUser (req , res) {
    const {name , email , password} = req.body ;

    if (!name || !email || !password) {
        return res.status(400).json({success: false , message: "All feilds are required"})
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({success: false , message: "Invalid email"})
    }
    if (password.length < 8) {
        return res.status(400).json({success: false , message: "Password must be atleast 8 characters"}) ;
    }

    try {
        if (await User.findOne({email})) {
            return res.status(409).json({success: false , message: "User already exist"}) ;
        }

        const hashed = await bcrypt.hash(password , 10) ;
        const user = await User.create({name , email , password: hashed}) ;
        const token = createToken(user._id) ;

        res.status(201).json({success: true , token , user: {id: user._id , name: user.name , email: user.email}})
    }
    catch (err) {
        console.log (err) ;
        res.status(500).json({success: false , message: "Server error"}) ;
    }
}

// LOGIN FUNCTION 
export async function  loginUser(req , res) {
    const {email , password} = req.body ;
    if (!email || !password) {
        return res.status(400).json({success: false , message: "Email and Password both required"}) ;
    }

    try {
        const user = User.findOne({email}) ;

        if (!user) {
            return res.status(401).json({success: false , message: "User not exist."}) ;
        }
        const match = await bcrypt.compare(password , user.password) ;

        if (!match) {
            return res.status(401).json({success: false , message: "Password do not match"}) ;
        }

        const token = createToken(user._id) ;
        return res.status(200).json({success: true , message: {id: user._id , name: user.name , email: user.email , token: token}})
    }
    catch(err) {
        console.log (err) ;
        return res.status(500).json({success: false , message: "Server error"}) ;
    }
}

// GET CURRENT USER 
export async function getCurrentUser(req , res) {
    try {
        const User = await User.findById(req.user.id).select("name email") ;
        if (!user) {
            return res.status(400).json({success: false , message: "User not found"}) ;
        }
        return res.status(200).json({success: true , message: user}) ;
    }
    catch (err) {
        console.log(err) ;
        return res.status(500).json({success: false , message: "Server Error"}) ;
    }
}


