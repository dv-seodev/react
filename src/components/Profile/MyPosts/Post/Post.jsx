import React from 'react'
import classes from "./Post.module.css"

function Post(props) {
    return (
        <div className={classes.item}>
            <img src="https://img3.goodfon.ru/wallpaper/nbig/3/51/avatar-neytiri-zoe-saldana-6192.jpg" alt="post"></img>
            <span>{props.message}</span>
            <div><span>like</span></div> 
        </div>
    );
}

export default Post;