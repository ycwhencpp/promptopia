"use client";
import UserProfile from "@components/UserProfile";
import useUserPost from "@utils/useUserPost";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useEditOrDeletePost from "@utils/useEditOrDeletePost";

const Profile = ({ params: { id } }) => {
  const router = useRouter();

  const [userPosts, setUserPosts] = useUserPost(id);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(`/api/user/${id}`, {
        method: "GET",
      });
      if (response.status === 404) {
        router.push("/");
      } else if (router.status === 200) {
        const data = await response.json();
        setUser(data);
      }
    };
    id && getUserData();
  }, [router, id]);

  const [handelEdit, handelDelete] = useEditOrDeletePost(userPosts, setUserPosts);

  return (
    <UserProfile
      name={user?.username}
      desc={`Checkout ${user?.username} amazing prompts and ideas and enhance your imagination.`}
      userPosts={userPosts}
      handelEdit={handelEdit}
      handelDelete={handelDelete}
    />
  );
};

export default Profile;
