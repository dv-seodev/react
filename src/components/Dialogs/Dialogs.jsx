import React from 'react'
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';

function Dialogs() {
    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <div className={classes.dialog + " " + classes.active}><NavLink to="/dialogs/1">Name 1</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/2">Name 2</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/3">Name 3</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/4">Name 4</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/5">Name 5</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/6">Name 6</NavLink></div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>hi</div>
                    <div className={classes.message}>lol</div>
                    <div className={classes.message}>yo</div>
                    <div className={classes.message}>bonjure</div>
                    <div className={classes.message}>hi</div>
                    <div className={classes.message}>privet</div>
                </div>
            </div>
    );
}

export default Dialogs;