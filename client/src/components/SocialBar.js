import React from 'react';

import '../CSS/SocialBar.css';


const SocialBar = ({top,bottom,left,right})=>{

    const placement = {
        top: (top || 0) + 'px',
        left: (left || 0) + 'px',
        right: (right || 0) + 'px',
        bottom: (bottom || 0) + 'px',
    };


    return (
        <div style ={placement} className='socialBar-container'>
            <div className='facebook icon-wrapper'>
                <i className="fab fa-facebook"></i>
            </div>
            <div className='twitter icon-wrapper'>
                <i className="fab fa-twitter"></i>
            </div>
            <div className='instagram icon-wrapper'>
                <i className="fab fa-instagram"></i>
            </div>
            <div className='heart icon-wrapper'>
                <i className="fas fa-heart"></i>
            </div>
        </div>
    );
}


export default SocialBar;