import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import RenderComment from '../Components/Comment';

const ViewBlog = () => {

    const [blog, SetBlog] = useState({ title: '', bloggerName: '', date: '', text: '' });
    const [disableButton, setDisableButton] = useState(true);
    const [comment, setComment] = useState({ commenterName: '', commentText: '' });
    const [commentList, setCommentList] = useState([]);
    const [forceReRender, setForceReRender] = useState(true);
    let { title, date, text, bloggerName } = blog;
    let { id } = useParams();
    useEffect(() => {

        const getBlog = async () => {
            const { data } = await axios.get(`/api/blog/getblogbyid?id=${id}`);
            SetBlog(data);
        }
        const getCommentsForBlog = async () => {
            const { data } = await axios.get(`/api/blog/getCommentsForBlog?id=${id}`);
            setCommentList(data);
        }
        getBlog();
        getCommentsForBlog();
        let forceReRenderCopy = forceReRender;
        forceReRenderCopy = false;
        setForceReRender(forceReRenderCopy);

    }, [forceReRender])
    const onUserNameChange = e => {

        let commentCopy = { ...comment };
        commentCopy[e.target.name] = e.target.value;
        setComment(commentCopy);
    }
    const onTextChange = e => {
        let disableButtonCopy = { ...disableButton };
        disableButtonCopy = false;
        setDisableButton(disableButtonCopy);
        let commentCopy = { ...comment };
        commentCopy.commentText = e.target.value;
        setComment(commentCopy);

    }
    const onSubmitCommentClick = async () => {
        let commentCopy = { ...comment };
        commentCopy.blogId = id;
        await axios.post('/api/blog/addcomment', commentCopy);
        setComment({ commenterName: commentCopy.commenterName, commentText: '' })
        let forceReRenderCopy = forceReRender;
        forceReRenderCopy = true;
        setForceReRender(forceReRenderCopy);
    }
    const renderCommentInput = () => {
        return (
            <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">

                    <div className="form-group">
                        <input type="text"
                            placeholder="Please enter your name"
                            className="form-control"
                            name="commenterName"
                            onChange={onUserNameChange}
                            value={comment.commenterName}
                        />
                    </div>

                    <div className="form-group">
                        <textarea placeholder="Type your comment here but remember to be be nice..."
                            name="commentText"
                            className="form-control"
                            rows="3"
                            onChange={onTextChange}
                            value={comment.commentText}

                        >

                        </textarea>
                    </div>
                    <button
                        disabled={disableButton}
                        className="btn btn-primary"
                        onClick={onSubmitCommentClick}
                    >Submit</button>
                </div>
            </div>)
    }


    return (
        <div>      <div className="col-lg-8">
            <h1 className="mt-4">{title}</h1>

            <p className="lead">by {bloggerName} </p>
            {date && <p>Posted on {format(new Date(date), 'cccc MMMM do, yyyy')}</p>}
            <p>{text}</p>


            {renderCommentInput()}


            <div className="col-lg-8">
                {commentList && commentList.map(c =>
                    <RenderComment comment ={c} key = {c.id} />)}

            </div>

        </div>

        </div>


    )

}
export default ViewBlog;