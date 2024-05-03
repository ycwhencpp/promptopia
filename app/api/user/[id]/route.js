const { connectToDb } = require("@utils/database");
import user from "@models/User";

export const GET = async (request, { params: { id } }) => {
  await connectToDb();
  try {
    const currentUser = await user.findById(id);
    if (!currentUser) {
      return new Response("User not found", { status: 404 });
    }
    return new Response(JSON.stringify(currentUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error while fetching User", { status: 500 });
  }
};
