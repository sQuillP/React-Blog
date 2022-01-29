import React from 'react';
import {Routes,Route} from 'react-router-dom';
import BlogCard from './BlogCard';
import Home from './Home';
import ViewBlog from './ViewBlog';
import CreateBlog from './CreateBlog';


/*
 * https://reactrouter.com/docs/en/v6/api#routes-and-route
 */

const App = () => {
    return (
        <Routes>
            <Route exact path='/' element ={<Home/>}/>
            <Route exact path='/view/:id' element ={<ViewBlog/>}/>
            <Route exact path ='/blogs/create' element ={<CreateBlog/>}/>
        </Routes>
    );
}


export default App;
