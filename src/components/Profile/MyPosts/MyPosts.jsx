import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts() {

    let postsData = [
        {id: 1, message: 'Hi, its my first post', likesCount: 12},
        {id: 2, message: 'second', likesCount: 1},
        {id: 3, message: 'third', likesCount: 9},
        {id: 4, message: '4', likesCount: 2},
        {id: 5, message: '5'},
        {id: 6, message: 'sixth'}
    ]

    let postsElements = postsData.map((post) => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div>
            my posts
            <br />
            <textarea></textarea>
            <button>add post</button>
            <div className={classes.messages}>
            {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;