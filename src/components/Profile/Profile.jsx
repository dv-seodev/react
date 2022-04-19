import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css"

function Profile() {
    return (
        <div className={classes.content}>
            <img src="https://s1.1zoom.me/big3/81/Russia_Mountains_Lake_469922.jpg"></img>
            <div>
                ava + description
            </div>
        <MyPosts />
        </div>
    );
}

export default Profile;