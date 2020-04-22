import sha1 from "sha1";
/**
 * Create a client
 * const cloudClient = require("cloudinary-client");
 * const CloudinaryClient = cloudClient.createClient({
 *  apiKey:API_KEY,
 *  apiSecret: API_SECRET,
 *  cloudName: CLOUD_NAME
 * })
 */

interface ParamsObject {
  apiKey: string;
  apiSecret: string;
  cloudName: string;
}
export const createClient = (params: ParamsObject) => {
  const uploadToCloudinary = (
    e: { target: { files: any } },
    public_id = "",
    format = "image",
    upload_preset = ""
  ) => {
    const files = e.target.files;

    const API_KEY = params.apiKey;
    const API_SECRET = params.apiSecret;
    const CLOUD_NAME = params.cloudName;
    const FORMAT = format;
    const PUBLIC_ID =
      public_id === "" ? files[0]["name"].replace(/\.[^/.]+$/, "") : public_id;
    const UPLOAD_PRESET = upload_preset;

    const time = Date.now();
    const data = new FormData();

    data.append("file", files[0]);
    data.append("timestamp", `${time}`);
    data.append("public_id", PUBLIC_ID);
    data.append("api_key", API_KEY);

    let signature = sha1(
      `public_id=${PUBLIC_ID}&timestamp=${time}${API_SECRET}`
    );

    if (UPLOAD_PRESET !== "") {
      signature = sha1(
        `public_id=${PUBLIC_ID}&timestamp=${time}&upload_preset=${UPLOAD_PRESET}${API_SECRET}`
      );
      data.append("upload_preset", UPLOAD_PRESET);
    }

    data.append("signature", signature);

    const uploadURL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${FORMAT}/upload`;

    return new Promise(function (resolve, reject) {
      fetch(uploadURL, {
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
