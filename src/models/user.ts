import { Schema, model } from "mongoose";
import moment from "moment";
import { genSalt, hashSync } from "bcryptjs";
import { UserSchema } from "../types";

const userSchema = new Schema<UserSchema>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await genSalt(10);
  const hash = hashSync(user.password, salt);

  user.password = hash;

  user.createdAt = moment().format("YYYY-MM-DDTHH:mm:ss");

  next();
});

userSchema.pre("updateOne", async function (next) {
  let user: any = this;

  if (user._update.password) {
    const salt = await genSalt(10);

    const hash = hashSync(user._update.password, salt);

    user._update.password = hash;
  }

  user._update.updatedAt = moment().format("YYYY-MM-DDTHH:mm:ss");

  next();
});

const User = model("users", userSchema);

export default User;
