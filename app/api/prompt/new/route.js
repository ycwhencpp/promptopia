import { connectToDb } from "@utils/database";
import post from "@models/Post";

export const POST = async (req) => {
  const { title, tag, user } = await req.json();
  try {
    await connectToDb();
    const newPost = await new post({
      tag: tag,
      title: title,
      user: user,
    });

    await newPost.save();

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Error while creating post ", { status: 500 });
  }
};
