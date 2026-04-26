import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: String,
    company: String,
    salary: Number,
    skills: [String]
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
