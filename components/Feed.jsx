'use client';   
import { useState } from "react";
import PromptCardList from "@components/PromptCardList";
import usePrompt from "@utils/usePrompt";
const Feed = () => {
    const [searchText, setSearchText] = useState("");
    const handelSearchChange = (e) => {
        setSearchText(e.target.value);
        // render feed cards also accordingly
    }
    const data = usePrompt();

    const handelTagClick = () => {
      
    }
  return (
    <section className="feed">
      <form className="w-full relative flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          required
          className="search_input peer"
          value={searchText}
          onChange={handelSearchChange}
        />
      </form>
      <PromptCardList data={data} handelTagClick = {handelTagClick()}/>
    </section>
  );
};

export default Feed;
