import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		desc: { type: String },
		img: { type: String },
		video: { type: String },
		year: { type: String },
	},
	{ timestamps: true }
);

export default mongoose.model("Movie", MovieSchema);
