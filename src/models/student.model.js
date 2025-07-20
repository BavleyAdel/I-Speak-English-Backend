import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      match: [/^\+?[0-9]{10,15}$/u, "Invalid phone number"],
    },
  },
  { timestamps: true, collection: "students" } // merge options into one object
);  
export default mongoose.model("Student", studentSchema);
