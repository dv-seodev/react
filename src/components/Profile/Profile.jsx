import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css"

function Profile(props) {
    return (
        <div>
            <img src="https://s1.1zoom.me/big3/81/Russia_Mountains_Lake_469922.jpg" alt="content"></img>
            <div className={classes.descriptionBlock}>ava + description</div>
            <MyPosts posts={props.state.posts} />
        </div>
    );
}

export default Profile;