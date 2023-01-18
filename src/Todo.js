import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modelOpen, setModelOpen] = useState(false);

    const deleteHandler = () => (setModelOpen(true))
    const closeModalHandler = () => (setModelOpen(false))
    return <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>
                Delete
            </button>
        </div>
        {modelOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modelOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>

}

export default Todo;