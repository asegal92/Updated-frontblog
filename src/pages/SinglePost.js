import {useMemo} from 'react'
import {Link, useParams} from "react-router-dom";
import Button from '../components/_common/Button';

const SinglePost = ({posts}) => {
    const params = useParams()
  
    const currentPost = useMemo(() => posts.find(post => post.id === parseInt(params.id)
    ), [params.id, posts])
    
    return( 
    <div className='border border-slate rounded-3xl bg-black text-2xl font-normal text-white'>
        <h1>{currentPost.title}</h1>
        <h2>{currentPost.body}</h2>
        <div className='flex gap-3 justify-center p-5 '>
          <Link to={`/edit/${params.id}`} >
            <Button label="Edit Post"/>
          </Link>
          <Link to={'/'}>
            <Button label="Go Back"/>
          </Link>
        </div>
    </div>
    )
}

export default SinglePost