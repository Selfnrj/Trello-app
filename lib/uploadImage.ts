import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return null;

  const fileUploaded = await storage.createFile(
    "64998095121d122d1045",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
