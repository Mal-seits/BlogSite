import axios from 'axios';
import React, { useEffect } from 'react';
import {  useHistory } from 'react-router-dom';

const MostRecent = () => {
    let id = 0;

    const history = useHistory();
    useEffect(() => {
        const redirect = async () => {
            const { data } = await axios.get('/api/blog/getmostrecentblogid');
            id = data;
            history.push(`/ViewBlog/${id}`);
        }
        redirect();
    }, [])
    return (
        <>
        </>
    )

}
export default MostRecent;