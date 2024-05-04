'use client';   
import { useState } from "react";
import PromptCardList from "@components/PromptCardList";
import usePrompt from "@utils/usePrompt";
import useSearchAndFilterPost from "@utils/useSearchAndFilterPost";
const Feed = () => {
    const [data, filteredPost, setFilteredPost] = usePrompt();

    const [searchText, handelSearchChange, handelTagClick] = useSearchAndFilterPost(data, setFilteredPost);
  return (
    <section className="feed">
      <form className="w-full relative flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          required
          className="search_input peer"
          value={searchText}
          onChange={(e) => {handelSearchChange(e.target.value)}}
        />
      </form>
      <PromptCardList data={filteredPost} handelTagClick = {handelTagClick}/>
    </section>
  );
};

export default Feed;
