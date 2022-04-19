import classes from "./Profile.module.css"

function Profile() {
    return (
        <div className={classes.content}>
            <img src="https://s1.1zoom.me/big3/81/Russia_Mountains_Lake_469922.jpg"></img>

            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    New post
                </div>
                <div>
                    <div className={classes.item}>
                        Post 1
                    </div>
                    <div className={classes.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;