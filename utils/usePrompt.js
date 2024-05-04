import { useState, useEffect } from "react";
const usePrompt = () => {
  const [allPrompts, setAllPrompts] = useState([]);
  const [filteredPost, setFilteredPost] = useState(allPrompts);
  useEffect(() => {
    const fetchAllPrompts = async () => {
      const response = await fetch("api/prompt");
      const data = await response.json();
      setAllPrompts(data);
      setFilteredPost(data);
    };
    fetchAllPrompts();
  }, []);

  return [allPrompts, filteredPost, setFilteredPost];
};

export default usePrompt;
