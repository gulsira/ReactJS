import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostsList from '../../shared/components/PostsList';
import * as actions from '../../store/actions';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    
    useEffect(() => {
        const fetchData = async () =>{
            await dispatch(actions.fetchPosts())
        }
        fetchData();
    }, [dispatch]);

    return(
        <div>
            <PostsList 
                items={posts.posts} 
            />
        </div>


    );
};

export default Posts;