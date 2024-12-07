import mongoose, { Schema, Document, Model } from "mongoose";

export interface User extends Document {
  email: string;
  username: string;
}

const userSchema: Schema<User> = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
});

const UserModel: Model<User> =
  mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
