import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: {
    required: [true, "Title is Required"],
    type: String,
    length: [2, 100],
  },
  tag: {
    required: [true, "Tag is Required"],
    type: String,
  },
  user: {
    type: Schema.Types.objectId,
    ref: "User",
  },
});

const post = models.Post || model("Post", PostSchema);

export default post;
