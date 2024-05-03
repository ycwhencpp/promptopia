import { connectToDb } from "@utils/database";
import post from "@models/Post";

export const GET = async (request, { params: { id } }) => {
  await connectToDb();
  try {
    const currentPost = await post.findById(id);
    if (!currentPost) {
      return new Response("Post not found", { status: 404 });
    }
    return new Response(JSON.stringify(currentPost), { status: 200 });
  } catch (error) {
    return new Response("Error while updating post", { status: 500 });
  }
};

export const PATCH = async (request, { params: { id } }) => {
  await connectToDb();
  const { title, tag } = await request.json();
  try {
    const currentPost = await post.findById(id);
    if (!currentPost) {
      return new Response("Post not found", { status: 404 });
    }
    currentPost.title = title;
    currentPost.tag = tag;
    await currentPost.save();
    return new Response(JSON.stringify(currentPost), { status: 200 });
  } catch (error) {
    return new Response("Error while updating post", { status: 500 });
  }
};

export const DELETE = async ({ params: { id } }) => {
  await connectToDb();
  try {
    const currentPost = post.findById(id);
    if (!currentPost) {
      return new Response("Post not found", { status: 404 });
    }
    await currentPost.delete();
    return new Response("Post deleted", { status: 200 });
  } catch (error) {
    return new Response("Error while deleting post", { status: 500 });
  }
};
