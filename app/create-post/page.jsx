"use client";
import { useState } from "react";
import PostForm from "@components/postForm";
import { useSession } from "next-auth/react";
import {useRouter } from "next/navigation";
const CreatePost = () => {
  const router = useRouter();
 const {data:session} = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [prompt, setPrompt] = useState({
    title: "",
    tag: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);


    try {
        const response = await fetch('api/prompt/new',{
            method:"POST",
            body:JSON.stringify({
                title:prompt.title,
                tag:prompt.tag,
                user:session?.user.id
            })
        });
        if (response.ok) {
            console.log("Post Created");
            router.push('/');
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <PostForm
      type={"Create"}
      handelSubmit={handelSubmit}
      prompt={prompt}
      setPrompt={setPrompt}
      submitting={submitting}
      setSubmitting={setSubmitting}
    />
  );
};
export default CreatePost;
