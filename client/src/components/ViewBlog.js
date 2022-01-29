import React, {useEffect, useState} from 'react';
import faker from 'faker';
import axios from 'axios';
import {useNavigate, Link, useParams} from 'react-router-dom';
import SocialBar from './SocialBar';
import CommentSection from './CommentSection';
import '../CSS/ViewBlog.css';


const ViewBlog = ({id})=>{

    const navigate = useNavigate();
    const blogID = useParams();
    const [blogInfo, setBlogInfo] = useState({
        author:{
            firstName: "",
            image: ""
        },
        comments: [],
        image: "",
        content: ""
    });
    const [comments, updateComments] = useState([]);


    const getPost = async ()=>{
        const response = await axios.get('http://localhost:3001/blogs/'+blogID.id);
        console.log(response);
        setBlogInfo(response.data);
        updateComments(response.data.comments);
    }


    useEffect(()=>{
        getPost();
    },[]);

    
    const postComment = async (comment)=>{
        let blogInfo_copy = {...blogInfo};
        blogInfo_copy.comments.push(comment);

        setBlogInfo(blogInfo_copy);
        const res = await axios.put('http://localhost:3001/updateBlog',blogInfo_copy);
        console.log(res);
    }

    const deleteComment = async (id) => {
        let blogInfo_copy = {...blogInfo};
        let comments = blogInfo_copy.comments;

        for(let i = 0; i<comments.length; i++)
            if(comments[i]._id === id)
                comments.splice(i,1);

        // console.log('deleted comment');
        const res = await axios.put('http://localhost:3001/updateBlog',blogInfo_copy);
        console.log('deleted comment');
        console.log(res);
        setBlogInfo(blogInfo_copy);
    }



    // Work on comment posting system
    return(
        <div className='viewBlog-wrapper'>
            <div className='viewBlog-container'>
                <div className ='viewBlog-body'>
                    <div className='viewBlog-title'>
                        <h1>{blogInfo.title}</h1>
                    </div>
                    <div className='viewBlog-author'>
                        <div className='profile-img-wrapper'>
                            <img src={blogInfo.author.image}/>
                        </div>
                        <p>By: {blogInfo.author.name}</p>
                    </div>
                    <div className='blog-icons'>
                        <Link to='/'><i className='fas fa-arrow-left'></i> previous</Link>
                        <SocialBar/>
                    </div>
                    <hr className='pageBreak'/>
                    <div className='blog-img-container'>
                       {blogInfo.image?<img src = {blogInfo.image} alt='No Image available'/>:""}
                    </div>
                    <div className='viewBlog-content'>
                        <p>{blogInfo.content}</p>
                    </div>
                </div>
            </div>
            <CommentSection deleteComment = {deleteComment} postComment = {postComment} comments = {comments}/>
        </div>
    );

}


export default ViewBlog;