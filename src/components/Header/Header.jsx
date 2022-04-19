import classes from "./Header.module.css"

function Header() {
    return (
        <header className={classes.header}>
            <img src="https://assets.coingecko.com/coins/images/119/large/Syscoin.png" alt="logo"></img>
        </header>
    );
}

export default Header;