import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        currentPost: null
    }

    async componentWillReceiveProps(nextProps) {
        if (this.props.id !== nextProps.id) {
            const post = await axios.get(`/posts/${nextProps.id}`);
            
            this.setState({ currentPost: post.data });
        }
    }

    deleteHandler = () => {
        if (this.props.id) {
            axios.delete(`/posts/${this.props.id}`)
            .then(console.log,
                 err => console.log(`Oops, something went wrong! ${err}`))
        }
    }

    render () {
        let post = null;
        if (!this.props.id) {
            post = <p style = {{ textAlign: 'center' }}>Please select a Post!</p>;
        } else if (!this.state.currentPost) {
            post = <p style = {{ textAlign: 'center' }}>Loading...</p>;
        } 
        else {
            post = (
                <div className="FullPost">
                    <h1>{ this.state.currentPost.title }</h1>
                    <p>{ this.state.currentPost.body }</p>
                    <div className="Edit">
                        <button
                         className="Delete"
                         onClick = { this.deleteHandler }>Delete</button>
                    </div>
                </div>    
            );          
        }

        return post;
    }
}

export default FullPost;