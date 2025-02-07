import { genSalt, hashSync } from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  const hash = hashSync(password, salt);
  return hash;
};
