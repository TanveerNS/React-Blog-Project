import React, { Component } from 'react';
import axios from 'axios';
import FullPost from '../../components/FullPost/FullPost';
import PostItem from '../../components/Post/PostItem';
import './Post.css';

class Post extends Component{
    state = {
        posts: [],
        selectedPostId: null,
        error: null
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    async componentDidMount() {        
        let posts;
        try {
            posts = await axios.get('/posts');
            this.setState({ posts: posts.data });
        } catch(err) {
            this.setState({ error: err.message })
        }        
    }
    render () {
        let posts = <p style = {{ textAlign: 'center' }}>Oops, something went wrong! { this.state.error }</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                <PostItem
                key = { post.id }
                title = { post.title }
                author="Neo"
                body={post.body}
                clicked = { this.postSelectedHandler.bind(this, post.id) }
                />)).slice(0, 6);
        }

        return (
            
            <div>
                
                <section>
                    <FullPost id = { this.state.selectedPostId } />
                </section>
                <section className="Posts">
                    { posts }
                </section>
            </div>
        );
    }
};

export default Post;