import React from 'react';

import './Post.css';

const postItem = (props) => (
    <article className="Post" onClick = { props.clicked }>
        <h1 className = "Title">{ props.title }</h1>
        <div className="Info">
            <div className="description">{ props.body }</div>
        </div>
    </article>
);

export default postItem;