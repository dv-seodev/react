import React from 'react'
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts(props) {
    let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div>
            my posts
            <br />
            <textarea ref={newPostElement}></textarea>
            <button onClick={ addPost }>add post</button>
            <div className={classes.messages}>
            {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;