import React, { Component } from 'react';
import instance from '../../axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        description: '',
        author: 'Neo'
    }

    newPostHandler = () => {
        instance.post(`/posts`, {
            title: this.state.title,
            body: this.state.description,
            author: this.state.author
        }).then(console.log);
    }
    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <hr/>
                <label>Title</label>


                <input type="text"
                value={this.state.title}
                onChange={(event) => this.setState({title: event.target.value})} />

                <label>Description</label>
                <textarea
                rows="5"
                value={this.state.description}
                onChange={(event) => this.setState({description: event.target.value})} />

                <label>Author</label>
                <select
                value={this.state.author}
                onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Amir">Amir</option>
                    <option value="Neo">Neo</option>
                    <option value="Sam">Sam</option>
                </select>
                <br/>
                <button onClick = { this.newPostHandler }>Add Post</button>
            </div>
        );
    }
}

export default NewPost;