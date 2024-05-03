"use client";
import { useState, useEffect, Suspense } from "react";
import PostForm from "@components/postForm";
import { useRouter} from "next/navigation";
import { useSession } from "next-auth/react";

const UpdatePost = ({params:{id}}) => {
  const {data:session} = useSession();
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    tag: "",
  });
  useEffect(() => {
    const FetchPost = async () => {
      const response = await fetch(`/api/prompt/${id}`, {
        method: "GET",
      });

      const data = await response.json();
      setPost(data);
    };
    id && FetchPost();
  }, [id]);

  const handelEditPostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/prompt/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: post.title,
          tag: post.tag,
          user: session?.user.id,
        }),
      });
      console.log(response);
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <PostForm type="Edit" prompt={post} setPrompt={setPost} handelSubmit={handelEditPostSubmit}/>;
};
export default UpdatePost;
