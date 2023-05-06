import {Link, useNavigate} from 'react-router-dom'
import Button from './_common/Button'

const Post = ({post, deleteBlog}) => {
    const navigate = useNavigate()

    const handleDelete = (event) => {
        event.preventDefault()
        deleteBlog(post.id)
        navigate('/')
    }

    return( 
    <div className='text-center border border-slate my-3 mx-auto w-[89%] p-6 bg-black rounded-3xl '   >
        <Link to={`/post/${post.id}`}>
            <h1 className='text-4xl text-lime-500 font-bold' >{post.title}</h1>
        </Link>
        <h2 className='text-3xl font-normal text-white pb-4'>{post.body}</h2>
        <form onSubmit={handleDelete}>
            <Button type="submit" label="Delete" />
        </form>
    </div>
    )
}

export default Post


