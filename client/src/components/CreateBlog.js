import React,{useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import faker from 'faker';
import '../CSS/CreateBlog.css';


const CreateBlog = ()=>{


    const [blogTitle,updateBlogTitle] = useState("");
    const [blogAuthor,updateBlogAuthor] = useState("");
    const [blogImage,updateBlogImage] = useState("");
    const [blogContent,updateBlogContent] = useState("");


    const navigate = useNavigate();

   const handleFormSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/createblog',{
            title: blogTitle,
            author: {
                name: blogAuthor,
                image: faker.image.image(200,200,true)
            },
            image: !blogImage?faker.image.image(200,200,true):blogImage,
            content: blogContent
        })
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            alert("Unable to create blog, check console for errors.");
            console.log(err);
        });
        alert("Blog has been created")
        navigate('/');
    }


    return (
        <div className ='cb-container'>
            <div className='cb-wrapper'>
                <div className='cb-backLink'>
                    <Link to ='/'><i className="fas fa-angle-left"></i>Go Back</Link>
                </div>
                <div className='cb-title'>
                    <h1>Create A New Blog</h1>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className='cb-info'>
                        <div className='cb-field cb-title-wrapper'>
                            <label htmlFor='cb-title'>Title of blog post</label>
                            <input value ={blogTitle} onChange={(e)=>updateBlogTitle(e.target.value)} required id='cb-title' type='text' placeholder='Enter a title'/>
                        </div>
                        <div className='cb-field cb-author-wrapper'>
                            <label htmlFor='cb-author'>Author of blog post</label>
                            <input value ={blogAuthor} onChange = {(e)=>updateBlogAuthor(e.target.value)} required id ='cb-author' placeholder='Enter The Author'/>
                        </div>
                        <div className='cb-field cb-image-wrapper'>
                            <label htmlFor='cb-image'>Blog Image</label>
                            <input value ={blogImage} onChange ={(e)=>updateBlogImage(e.target.value)}type ='text' id ='cb-image' placeholder = 'Enter image URL here...'/>
                        </div>
                        <div className='cb-field cb-content-wrapper'>
                            <label htmlFor='cb-content'>Blog content goes here...</label>
                            <textarea value ={blogContent} onChange={(e)=>updateBlogContent(e.target.value)} required id='cb-textarea' placeholder ='Blog content...'/>
                        </div>
                        <div className='cb-field cb-btn-wrapper'>
                            <button>Create Blog</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default CreateBlog;