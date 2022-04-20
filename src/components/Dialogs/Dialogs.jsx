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

let dialogsData = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Valentin'},
    {id: 3, name: 'Anton'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'German'}
]

let messagesData = [
    {id: 1, text: 'hello'},
    {id: 2, text: 'hi'},
    {id: 3, text: 'privet'},
    {id: 4, text: 'lol'},
    {id: 5, text: 'aloha'},
    {id: 6, text: 'yo'}
]

function Dialogs() {
    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                </div>
                <div className={classes.messages}>
                    <MessageItem text={messagesData[0].text} />
                    <MessageItem text={messagesData[1].text} />
                </div>
            </div>
    );
}

export default Dialogs;