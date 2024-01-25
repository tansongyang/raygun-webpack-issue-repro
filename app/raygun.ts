import * as Raygun from "raygun";

export const raygun = new Raygun.Client().init({
  batch: true,
  apiKey: "paste_your_api_key_here",
});
