import React from 'react'
import classes from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div>
                <div className={classes.item}><NavLink className={({ isActive }) => isActive ? classes.activeNew : undefined } to="/profile">Profile</NavLink></div>
                <div className={classes.item}><NavLink className={({ isActive }) => isActive ? classes.activeNew : undefined } to="/dialogs">Dialogs</NavLink></div>
                <div className={classes.item}><NavLink className={({ isActive }) => isActive ? classes.activeNew : undefined } to="/news">News</NavLink></div>
                <div className={classes.item}><NavLink className={({ isActive }) => isActive ? classes.activeNew : undefined } to="/music">Music</NavLink></div>
                <div className={classes.item}><NavLink className={({ isActive }) => isActive ? classes.activeNew : undefined } to="/settings">Settings</NavLink></div>
            </div>
        </nav>
    );
}

export default Navbar;