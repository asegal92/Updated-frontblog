import {useMemo, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Button from '../components/_common/Button'
import Input from '../components/_common/Input'

const Form = (props) => {
  const navigate = useNavigate()
  const params = useParams()

  const currentPost = useMemo(() => {
    if (props.posts) {
      return props.posts.find(post => post.id === parseInt(params.id))
    } else {
      return {title: '', body: '', id: ''}
    }
  }, [params.id, props.posts])

  const [formData, setFormData] = useState(
    props.formType === 'new' ? {
      title: '',
      body: '',
    } : {
      title: currentPost.title,
      body: currentPost.body,
      id: parseInt(currentPost.id)
    }
  )

  const handleChange = (event) => {
    setFormData((prev) => (
      {
        ...prev, 
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    props.handleSubmit(formData, props.formType)
    navigate('/')
  }


  return (
    <form onSubmit={handleSubmission} className='flex flex-col gap-4 items-center'>
      <h3 className='text-3xl'>Title</h3>
      <Input
        type='text'
        onChange={handleChange}
        value={formData.title}
        name='title'
      />
      <h3 className='text-3xl '>Body</h3>
      <Input
        type='text'
        onChange={handleChange}
        value={formData.body}
        name='body'
      /> 
      <Button label={props.buttonLabel} type='submit'/> 
    </form>
  )
}

export default Form