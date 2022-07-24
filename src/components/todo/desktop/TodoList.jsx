import React from "react";
import completeDesk from "../../../assets/desktop/complete_desk.png";
import incompleteDesk from "../../../assets/desktop/incomplete_desk.png";
import trashcan from "../../../assets/delete.svg"
import moment from "moment";
import "moment/locale/es";
import deleteTodo from "../../../apis/deleteTodo";
import updateEstatusTodo from "../../../apis/patchEstatusTodo";
import 'animate.css';
const TodoList = ({ todo ,setChanges, token, loading}) => {
  const {userId} =todo
  moment.locale("es");
   const handleClickDelete = async () => {
    console.log(userId,token);
     if (todo.id && token) {
       const deleteRta = await deleteTodo(token, todo.id);
       console.log(deleteRta);
       setChanges(true);
     }
   };
   const handleUpdtateEstatus = async (data) => {
     const updateRta = await updateEstatusTodo(!data, token, todo.id);
     setChanges(true);
   };
  return (
    <div>
      {loading && ( <p>loadinggs</p> )}
        <div key={todo.id} className="tododesk  animate__animated animate__fadeInLeft">
          <div className="tododesk--checkbox">
            <img onClick={()=>{handleUpdtateEstatus(todo.estatus)}} src={todo.estatus ? completeDesk : incompleteDesk} alt="" />
          </div>
          <div className="tododesk__info">
            <p className='tododesk__info--name'>{todo.name}</p>
            <p>{moment(todo.createdAt).calendar()}</p>
          </div>
          <div className='tododesk--delete'>
            <img onClick={handleClickDelete} src={trashcan} alt="" />
          </div>
        </div>
    </div>
  );
};

export default TodoList;
