import React, {useState} from 'react';
import faker from 'faker';


import '../CSS/Comment.css';

const Comment = ({id,image,author,comment, deleteComment})=>{

    const [commentStatus, updateCommentStatus] = useState(null);
    const [mouseEntered,updateMouseEnter] = useState(null);

    const likeStyle = {color: (commentStatus==='like'?'black':'')};
    const dislikeStyle = {color: (commentStatus==='dislike'?'black':'')};

    const handleCommentStatus = (status)=>{
        if(status == commentStatus)
            updateCommentStatus(null);
        else
            updateCommentStatus(status);
    }

    const handleDeleteComment = ()=>{
        deleteComment(id);
    }

    return (
        <div onMouseEnter={()=>updateMouseEnter(true)} onMouseLeave={()=>updateMouseEnter(false)} className='comment-body'>
            <div onClick = {handleDeleteComment} className='exit-btn-wrapper'>
                {mouseEntered?<i className="fas fa-times"></i>:null}
            </div>
            <div className='comment-profile'>
                <div className='profile-img-wrapper'>
                    <img src ={image}/>
                </div>
                </div>
                <div className='comment-content'>
                    <div className='comment-author'>
                        <p>{author}</p>
                    </div>
                    <div className='comment'>
                        <p>
                            {comment}
                        </p>
                    </div>
                    <div className='comment-remarks'>
                        <p><i style={likeStyle} onClick={()=>handleCommentStatus('like')} className="fas fa-thumbs-up"></i> like<span></span><i style={dislikeStyle} onClick={()=>handleCommentStatus('dislike')} className="fas fa-thumbs-down"></i> dislike</p>
                    </div>
                </div>
        </div>
    );
}


export default Comment;