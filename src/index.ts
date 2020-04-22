/**
 * Create a client
 * const cloudClient = require("cloudinary-client");
 * const CloudinaryClient = cloudClient.createClient({
 *  apiKey:API_KEY,
 *  apiSecret: API_SECRET,
 *  cloudName: CLOUD_NAME
 * })
 */
import sha1 from "sha1";

interface ParamsObject {
  apiKey: string;
  apiSecret: string;
  cloudName: string;
}
export const createClient = (params: ParamsObject) => {
  if (!params || !params.apiKey || !params.apiSecret || !params.cloudName) {
    throw new Error("Missing params required in createClient");
  }

  const uploadToCloudinary = (
    e: { target: { files: any } },
    format = "image",
    public_id = "new"
  ) => {
    const files = e.target.files;
    const API_KEY = params.apiKey;
    const API_SECRET = params.apiSecret;
    const CLOUD_NAME = params.cloudName;
    const PUBLIC_ID = public_id;
    const TIME = Date.now();
    const data = new FormData();
    const signature = sha1(
      `public_id=${PUBLIC_ID}&timestamp=${TIME}${API_SECRET}`
    );
    data.append("file", files[0]);
    data.append("timestamp", `${TIME}`);
    data.append("public_id", PUBLIC_ID);
    data.append("api_key", API_KEY);
    data.append("signature", signature);
    const theURL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${format}/upload`;
    return new Promise(function (resolve, reject) {
      fetch(theURL, {
        method: "POST",
        body: data,
      })
        .then((data) => data.json())
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  return uploadToCloudinary;
};
