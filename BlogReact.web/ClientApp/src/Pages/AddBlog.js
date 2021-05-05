import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddBlog = () => {

    const [blog, SetBlog] = useState({ title: '', bloggerName: 'Malky Seitler', text: '' });
    const history = useHistory();
    let { title, text } = blog;
    const onSubmitBlogClick = async () => {
        let blogCopy = { ...blog };
        await axios.post('/api/blog/addblog', blogCopy);
        history.push('/');
    }
    const onTextChange = e => {
        let blogCopy = { ...blog };
        blogCopy[e.target.name] = e.target.value;
        SetBlog(blogCopy);


    }
    return (
        <div className="container" >

            <div className="col-md-8 offset-md-2 card card-body bg-light">
                <h3>Add new post</h3>
                <input className="form-control" placeholder="Title" name="title" value={title} onChange={onTextChange} />
                <br />
                <textarea name="content" placeholder="What's on your mind?" className="form-control" rows="20" name='text' value={text} onChange={onTextChange}>
                </textarea>
                <br />
                <button onClick={onSubmitBlogClick} className="btn btn-success">Submit</button>
            </div>

        </div>

    )
}
export default AddBlog;