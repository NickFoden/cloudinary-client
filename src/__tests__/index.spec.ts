import "isomorphic-fetch";
import * as PARAMS from "../../secrets";
import { createClient } from "../index";

test("forget to use function", () => {
  const CloudinaryClient = createClient({
    apiKey: PARAMS.API_KEY,
    apiSecret: PARAMS.API_SECRET,
    cloudName: PARAMS.CLOUD_NAME,
  });
  expect(CloudinaryClient).toThrowError();
});
