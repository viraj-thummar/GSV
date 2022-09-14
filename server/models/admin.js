import mongoose from "mongoose";

// Define collection and schema for Items

const adminSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    name: String,
  },
  { collection: "AdminLogin" }
);

const AdminModel = mongoose.model("admin", adminSchema);
export default AdminModel;
