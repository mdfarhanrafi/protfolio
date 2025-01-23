import { Schema, model } from "mongoose";

const ImageSchema = new Schema({
  url: { type: String, required: true },
  altText: { type: String },
});

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [{ type: String, required: true }],
  liveUrl: { type: String },
  githubUrl: { type: String },
  status: { type: String, enum: ["in-progress", "completed", "archived"], required: true },
  images: [ImageSchema],
});

export default model("Project", ProjectSchema);
