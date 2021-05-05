import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const ShowBlog = ({ blog }) => {
    const { title, date, text, comments, id } = blog;
    let shortText = text;
    if (text.length > 200) {
        shortText = text.substr(1, 200);
    }
    return (<div className="card mb-4">
        <div className="card-body">
            <h2 className="card-title">
                <Link to={`/ViewBlog/${id}`} className='nav-link text-light'>
                    <button className='page-link'>
                        {title}
                    </button>
                </Link>
            </h2><p className="card-text">{shortText}...</p>
            <div className="mb-3">
                <small>{comments !== null ? comments.length : 0} comment(s)</small>
            </div>
            <Link to={`/ViewBlog/${id}`} className='nav-link text-light'>
                <button className='btn btn-info'>Read More →</button>
            </Link>

        </div>
        <div className="card-footer text-muted">Posted on {format(new Date(date), 'cccc, MMMM Lo, yyyy')} </div>
    </div>)

}
export default ShowBlog;