import { useState } from "react";
const useSearchAndFilterPost = (allPosts, setFilteredPost) => {
  const [searchText, setSearchText] = useState("");

  const handelSearchChange = (searchTextValue) => {
    setSearchText(searchTextValue);
    setFilteredPost(updateFilteredPost(searchTextValue));
  };

  const updateFilteredPost = (searchTextValue) => {
    return allPosts.filter(
      (post) =>
        post.title.includes(searchTextValue) ||
        post.tag.includes(searchTextValue) ||
        post.user.username.includes(searchTextValue)
    );
  };

  const handelTagClick = (tag) => {
    setSearchText(tag);
    setFilteredPost(updateFilteredPost(tag));
  };

  return [searchText, handelSearchChange, handelTagClick];
};

export default useSearchAndFilterPost;
