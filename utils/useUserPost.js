import { useState, useEffect } from "react";

const useUserPost = (id) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const FetchUserPosts = async ({}) => {
      const response = await fetch(`/api/user/${id}/posts/`);
      const data = await response.json();
      setPosts(data);
    };
    if (id) FetchUserPosts();
  }, []);

  return [posts, setPosts];
};

export default useUserPost;
