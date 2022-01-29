import React, {useState} from 'react';
import Comment from './Comment';
import '../CSS/CommentSection.css';
import faker from 'faker';


const CommentSection = ({postComment, deleteComment, comments})=>{


    const [comment,updateComment] = useState('');

    
    const image = "https://cdn.imgbin.com/3/1/5/imgbin-user-profile-2018-in-sight-user-conference-expo-business-default-business-nZ00AXX3zFkvQRP1rQnYz8wPp.jpg";

    const handleCommentSubmit = ()=>{
        if(!comment) return;
        postComment({
            author:{
                name: faker.name.firstName() + " " + faker.name.lastName(),
                image: faker.image.image(200,200,true)
            },
            comment: comment
        });
        updateComment('');
    }


    const renderComments = ()=>{
        return comments.map((x,i)=>{
            return <Comment id ={x._id} deleteComment = {deleteComment} key = {i} author ={x.author.name} image = {x.author.image} comment = {x.comment} />
        });
    }

    return (
        <div className='commentSection-wrapper'>
            <div className='comments-header'>
                <h1>Comments</h1>
                <hr/>
            </div>
            <div className='comments-container'>
                <div className='comment-body'>
                    <div className='comment-profile'>
                        <div className='profile-img-wrapper'>
                            <img src ={image}/>
                        </div>
                    </div>
                    <div className='comment-content'>
                        <div className='blurb-wrapper'>
                            <p>Leave a comment...</p>
                        </div>
                        <textarea value ={comment} onChange={(e)=>updateComment(e.target.value)} placeholder='Post your comment here' />
                        <button onClick = {handleCommentSubmit} className='comment-btn'>Post</button>
                    </div>
                </div>
                {renderComments()}
            </div>
        </div>
    );
}

export default CommentSection;