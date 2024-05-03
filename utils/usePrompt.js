import { useState, useEffect } from "react";
const usePrompt = () => {
  const [allPrompts, setAllPrompts] = useState([]);
  useEffect(() => {
    const fetchAllPrompts = async () => {
      const response = await fetch("api/prompt");
      const data = await response.json();
      setAllPrompts(data);
    };
    fetchAllPrompts();
  }, []);

  return allPrompts;
};

export default usePrompt;
