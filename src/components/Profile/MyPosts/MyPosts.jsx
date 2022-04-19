import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts() {
    return (
            <div>
                my posts
                <br/>
                <textarea></textarea>
                <button>
                    add post
                </button>
                    <Post message="Hi, its my first post" />
                    <Post message="yo, its my second"/>
                    <Post message="third"/>
                    <Post />
                    <Post />
                    <Post />
            </div>
    );
}

export default MyPosts;