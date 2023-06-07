import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// do this mongoose.model.Post || if we serverless architecture and to resolve OverwriteModelError: Cannot overwrite `Post` model once compiled.
// This error happened while generating the page. Any console logs will be displayed in the terminal window.

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
