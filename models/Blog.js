// models/Blog.js
import {Schema, model, models} from "mongoose";

const BlogSchema = new Schema(
  {
    title: String,
    slug: {type: String, required: true, unique: true},
    images: [{type: String}],
    description: String,
    blogcategory: String,
    tags: [{type: String}],
    status: {type: String, default: "draft"},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
  },
  {timestamps: true}
);

export default models?.Blog || model("Blog", BlogSchema);
