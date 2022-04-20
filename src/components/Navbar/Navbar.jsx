import classes from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div>
                <div className={`${classes.item} ${classes.active}`}><a href="/profile">Profile</a></div>
                <div className={classes.item}><a href="/dialogs">Dialogs</a></div>
                <div className={classes.item}><a>News</a></div>
                <div className={classes.item}><a>Music</a></div>
                <div className={classes.item}><a>Settings</a></div>
            </div>
        </nav>
    );
}

export default Navbar;