import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';
import {
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";


class Blog extends Component {
    
    render () {

        return (
            
            <BrowserRouter>
               <div className="cls">
                        <Link className="alink" to="/">
                            <img className="imgC" src="/images/home-icon.svg" />
                            <span> Blog </span> 
                        </Link>
                        <Link className="alink"  to="/add">
                            <img className="imgC" src="/images/watchlist-icon.svg" />
                            <span> Add Post </span>
                        </Link>
                        </div>  
                   

                <div className="content">
                    <Route exact path="/" component={Post}/>
                    <Route path="/add" component={NewPost}/>
                    
                </div>
                
            </BrowserRouter>
        );
    }
}

export default Blog;