import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config';

import './PostList.css';

function PostList() {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await axios.get(`${config.url}/api/posts`);
    setPosts(res.data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="post-list">
      {posts?.map(({ _id, name, image }) => (
        <div key={_id} className="post-card">
          <img src={image[0]?.url} alt="Post de Exemplo"/>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
