import React, {useEffect, useState} from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';
import faker from 'faker';
import {useNavigate} from 'react-router-dom';
import '../CSS/Home.css';



const Home = ()=>
{
    const navigate = useNavigate();
    const [posts,updatePosts] = useState([]);


    useEffect(()=>{
        async function getPosts(){
            const response = await axios.get('http://localhost:3001/blogs');
            updatePosts(response.data);
            console.log(response.data);
        }
        getPosts();
    },[]);

    
    const renderBlogCards = ()=>{
        return posts.map(x=>{
            return <BlogCard key = {x._id} data = {x}/>
        });
    }
    return (
        <div className='home-container'>
            <div className='hero-banner'>
                <div className='hero-entry'>
                    <h1>Blog App</h1>
                </div>
                <div className='hero-btn-wrapper'>
                    <button onClick={()=>navigate('/blogs/create')} className='create-btn'>Create New Blog</button>
                </div>
            </div>
            <div className ='home-blogs-intro'>
                <h1>See The Most Recent Blog Posts</h1>
            </div>
            <div className='grid-container'>
                {renderBlogCards()}
            </div>

        </div>
    )
}


export default Home;