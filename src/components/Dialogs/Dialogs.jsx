import React from 'react'
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
    return (
        <div className={classes.dialog}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    );
}

function MessageItem(props) {
    return (
        <div className={classes.message}>{props.text}</div>
    );
}

function Dialogs() {
    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <DialogItem name="Dmitriy" id="1" />
                    <DialogItem name="Valentin" id="2" />
                    <DialogItem name="Anton" id="3" />
                    <DialogItem name="Viktor" id="4" />
                    <DialogItem name="Andrey" id="5" />
                    <DialogItem name="German" id="6" />
                </div>
                <div className={classes.messages}>
                    <MessageItem text="hello" />
                    <MessageItem text="hi" />
                    <MessageItem text="privet" />
                    <MessageItem text="lol" />
                    <MessageItem text="aloha" />
                    <MessageItem text="yo" />
                </div>
            </div>
    );
}

export default Dialogs;