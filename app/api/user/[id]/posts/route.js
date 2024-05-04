const { connectToDb } = require("@utils/database");
import post from "@models/Post";

export const GET = async (request, { params: { id } }) => {
  await connectToDb();
  try {
    const userPosts = await post.find({ user: id }).populate("user");
    return new Response(JSON.stringify(userPosts), { status: 200 });
  } catch (error) {
    return new Response("Error while fetching prompts", { status: 500 });
  }
};
