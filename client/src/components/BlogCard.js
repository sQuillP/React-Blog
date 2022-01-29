import React from 'react';
import faker from 'faker';
import {useNavigate,Link} from 'react-router-dom';

import '../CSS/BlogCard.css';

const BlogCard = ({data}) => {

    const navigate = useNavigate();
    console.log(data);
    const displayCardContent = ()=>{
        if(data.content.length < 50)
            return data.content;
        return <p>{data.content.substring(0,50) + '...' }<Link to ='#'>(Read more)</Link></p>;
    }
    return (
        <div className='card-container'>
            <div className='card-top'>
                <div className='profile-img-wrapper'>
                    <img src = {data.author.image}/>
                </div>
                <div className='profile-name-wrapper'>
                    <p>Created by: {data.author.name}</p>
                </div>
            </div>
            <div className='card-body'>
                <div className='card-title'>
                    <h2>{data.title}</h2>
                </div>
                <div className='card-desc'>
                    {displayCardContent()}
                </div>
                <div className='meta-wrapper'>
                    <div className='date-wrapper'>
                        <i className="far fa-calendar"></i>
                        <p>{faker.date.past(1).toDateString()}</p>
                    </div>
                    <button onClick={()=>navigate('/view/'+data._id)} className='checkout-btn'>Check it out <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;