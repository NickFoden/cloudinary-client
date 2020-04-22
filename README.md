# cloudinary-client

(Signed uploading of images to cloudinary API.) 

Upload an image to cloudinary. You will need your:

```javascript
  apiKey
  apiSecret
  cloudName
  ```
  
  # Get Started
  
```javascript
  npm i cloudinary-client
  
  ```
  
```javascript  

 // Create a client
"../myfiles/api/cloudinary.js";

  import { createClient } from "cloudinary-client";
  
  export const CloudinaryClient = createClient({
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      cloudName: CLOUD_NAME
  })

 ```
 
 
 ```javascript  
 
 // Use the client 
 import { CloudinaryClient } from "../myfiles/api/cloudinary.js";
  
  // pass in up to 4 parameters
  
   CloudinaryClient(e, public_id, format, upload_preset).then(result => handleYourResult(result)).catch(err => handleYourError(err))
   
  // e, public_id, format, upload_preset,
  // e - the event is required
  // public_id (string) - defaults to the filename and strips the extension - "sample.jpg" becomes "sample"
  // format (string) - defaults to "image" for image uploading
  // upload_preset (string) - defaults to ""

```
  ## Examples
  
```javascript  
  // Use the client to upload an image to the root folder with current file name
  
  const handleUpload = (e) => {
     CloudinaryClient(e).then(result => console.dir(result)).catch(err => console.dir(err))
  }
  
  <input type="file" onChange={handleUpload} />
  
  
  
  // Use the client to upload an image to the root folder and set the saved file name to be "new name"
  
  const handleUpload = (e) => {
     CloudinaryClient(e, "new name").then(result => console.dir(result)).catch(err => console.dir(err))
  }
  
   <input type="file" onChange={handleUpload} />
  



  // Use the client to upload an image to a sub folder "Users" and set the saved file name of file to be "Alex"
  
  const handleUpload = (e) => {
     CloudinaryClient(e, "Users/Alex").then(result => console.dir(result)).catch(err => console.dir(err))
  }
  
   <input type="file" onChange={handleUpload} />
  

  
  
  // Use the client with all 4 params
    const handleUpload = (e) => {
     CloudinaryClient(e, "Users/Alex", "video", "custom_preset").then(result => console.dir(result)).catch(err => console.dir(err))
  }
  
  <input type="file" onChange={handleUpload} />

```
# About

Setting up an image upload the other day and reading docs etc took longer than expected so once I had this going wanted to package and share, there are more features to be added, will add as I encounter and you can request in the issues and I can try to take a crack at them as time allows.

PR's WELCOME
