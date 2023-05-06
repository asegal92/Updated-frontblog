import Post from "../components/Post"
import {Link} from 'react-router-dom'
import Button from "../components/_common/Button"

const AllPosts = (props) =>  (
    <>
    <Link to='/new'>
        <Button label="Add New Blog Post"/>
    </Link>
    {props.posts.map(
     (post) => <Post post={post} key={post.id} deleteBlog={props.deleteBlog} />
    )}
    </>
)

export default AllPosts