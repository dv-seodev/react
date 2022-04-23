import React from 'react'
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


function Dialogs(props) {
let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
let messagesElements = props.state.messages.map(mes => <Message text={mes.text} />)
    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    { dialogsElements }
                </div>
                <div className={classes.messages}>
                     { messagesElements }
                </div>
            </div>
    );
}

export default Dialogs;