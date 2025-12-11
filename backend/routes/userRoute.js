import express from 'express' ;
import { getCurrentUser, loginUser, registerUser, updatePassword, updateProfile } from '../controllers/userController.js';

const userRouter = express.Router() ;

//PUBLIC LINKS
userRouter.post('/register' , registerUser) ;
userRouter.post('/login' , loginUser) ;

// PRIVATE LINKS protect auth
userRouter.get('/me' , getCurrentUser) ;
userRouter.put('/profile' , updateProfile) ;
userRouter.put('/password' , updatePassword) ;
