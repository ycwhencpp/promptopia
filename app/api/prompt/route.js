import { connectToDb } from "@utils/database";
import post from "@models/Post";
export const GET = async () => {
  await connectToDb();
  try {
    const allPrompts = await post.find({});
    return new Response(JSON.stringify(allPrompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error while fetching prompts", { status: 500 });
  }
};
export const dynamic = "force-dynamic";
