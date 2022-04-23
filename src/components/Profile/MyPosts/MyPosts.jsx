import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts(props) {
    let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)

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