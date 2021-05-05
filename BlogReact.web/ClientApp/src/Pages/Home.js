import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ShowBlog from '../Components/ShowBlog';
import { useParams } from 'react-router';


const Home = () => {
    let [blog, setBlog] = useState([]);
    const [highestPageNumber, setHighestPageNumber] = useState();
    let params = useParams();
    let { pageNumber } = params;

    useEffect(() => {
        const getBlogs = async () => {
            const { data } = await axios.get(`/api/blog/getallblogs?pageNumber=${pageNumber}`);
            setBlog(data);
        }
        const getHighestPageNumber = async () => {
            const { data } = await axios.get(`/api/blog/gethighestpagenumber`);
            setHighestPageNumber(data);
        }
        getBlogs();
        getHighestPageNumber();
    
    }, [pageNumber]);
    if (pageNumber === undefined) {
        pageNumber = 1;
    }
     pageNumber = parseInt(pageNumber);
    return (
   
        <div className='row mt-10'>
            <div className='col-md-12'>
                {blog.map(b => <ShowBlog blog={b} key={b.id}></ShowBlog>)}
            </div>
            <ul className="pagination justify-content-center mb-4">
                {pageNumber < highestPageNumber -1  &&  <li className="page-item">
                    <Link to={`/Page/${pageNumber + 1}`} className='nav-link text-light'>
                        <button className='page-link'>  ← Older</button>
                    </Link>
                </li>}
                {pageNumber > 1   &&  <li className="page-item">
                    <Link to={`/Page/${pageNumber - 1}`} className='nav-link text-light'>
                        <button className='page-link'> Newer → </button>
                    </Link>
                </li>}
            </ul>
        </div>

    )
}
export default Home;