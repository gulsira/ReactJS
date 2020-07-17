import React from 'react';

import Card from './Card';

const PostsList = props => {
    if (props.items.length === 0) {
        return (
            <h2>No Post Found.</h2>
        );
    };

    return (
        <ul>
            {props.items.map(post => (
                <Card 
                    key={post.id} 
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                />
            ))}
        </ul>
    );
};

export default PostsList;