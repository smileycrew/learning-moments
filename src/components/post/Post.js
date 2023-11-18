import "./Post.css"

export const Post = ({ filteredPosts }) => {
    return (
        <div className="posts-container">
            <div className="post-container">{filteredPosts.map((post) => {
                return (
                    <div key={post.id}
                        className="post">
                        <div className="topic">{post.topic.name}</div>
                        <div className="title">{post.title}</div>
                        <div className="like">{post.likes.length} likes</div>
                    </div>
                )
            })}</div>
        </div>

    )
}