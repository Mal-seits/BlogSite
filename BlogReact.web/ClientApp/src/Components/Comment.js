import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const RenderComment = ({comment}) => {
    let {commenterName, commentText, commentDate} = comment;
return(
    <div className="media mb-4">
         <img
            className="d-flex mr-3 rounded-circle"
            src="http://placehold.it/50x50"
            alt="" />
        <div className="media-body" >
            <h5 className="mt-0">{commenterName}<small className="ml-1">{commentDate && format(new Date(commentDate), 'cccc MMMM do, yyyy')}</small></h5>
          {commentText}
        </div>
    </div>

)}
export default RenderComment;