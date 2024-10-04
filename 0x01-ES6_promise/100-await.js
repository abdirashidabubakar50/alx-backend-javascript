import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  try {
    // Call both async functions in parallel using Promise.all
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    // Return the result in the specified format
    return {
      photo,
      user,
    };
  } catch (error) {
    // If any function fails, return the fallback empty object
    return {
      photo: null,
      user: null,
    };
  }
}
