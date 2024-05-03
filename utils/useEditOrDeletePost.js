import { useRouter } from "next/router";
const useEditOrDeletePost = (userPosts, setUserPosts) => {
  const router = useRouter();
  const handelEdit = async (post) => {
    router.push(`/update-post/${post._id}`);
  };

  const handelDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        if (response.ok) {
          const filteredPosts = userPosts.filter((userPost) => userPost._id !== post._id);
          setUserPosts(filteredPosts);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return [handelEdit, handelDelete];
};

export default useEditOrDeletePost;
