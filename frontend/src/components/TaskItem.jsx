import React from "react";
import { TI_CLASSES } from "../assets/dummy";

const API_BASE =
  "https://project-management-backend-1-qk79.onrender.com/api/tasks";

const TaskItem = ({
  task,
  onRefresh,
  onLogout,
  showCompleteCheckbox = true,
}) => {
  return (
    <>
      <div className={`${TI_CLASSES}`}>

      </div>
    </>
  );
};

export default TaskItem;
