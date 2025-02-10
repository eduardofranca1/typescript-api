import { genSalt, hash } from "bcryptjs";

export const hashPassword = async (password: string) => {
  try {
    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    return hashPassword;
  } catch (error) {
    console.log("🚀 ~ hashPassword ~ error:", error);
  }
};
