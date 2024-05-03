"use client";
import UserProfile from "@components/UserProfile";
import { useSession } from "next-auth/react";
import useUserPost from "@utils/useUserPost";
import useEditOrDeletePost from "@utils/useEditOrDeletePost";

const MyProfile = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [userPosts, setUserPosts] = useUserPost(user?.id);

  const [handelEdit, handelDelete] = useEditOrDeletePost(userPosts, setUserPosts);
  return <UserProfile name = {user?.name} desc = "Welcome to your perosnalized profile page" userPosts={userPosts} handelEdit = {handelEdit} handelDelete = {handelDelete}/>;
};

export default MyProfile;
