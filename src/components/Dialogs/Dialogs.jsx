import React from 'react'
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

let dialogsData = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Valentin'},
    {id: 3, name: 'Anton'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'German'}
]

let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)

let messagesData = [
    {id: 1, text: 'hello'},
    {id: 2, text: 'hi'},
    {id: 3, text: 'privet'},
    {id: 4, text: 'lol'},
    {id: 5, text: 'aloha'},
    {id: 6, text: 'yo'}
]

let messagesElements = messagesData.map(mes => <Message text={mes.text} />)

function Dialogs() {
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