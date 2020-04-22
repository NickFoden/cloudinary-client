import { createClient } from "../index";

test("forget to pass api key", () => {
  expect(createClient).toThrowError();
});
