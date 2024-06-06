"use strict";
import axios from "axios";

export const fetchUnsplashPhotos = async ({ query, page, per_page = 12 }) => {
  const accessKey = "xvkOVqjkSJdnFYZRov1MDkuO2wyvPttK6JvRmob_IJA";

  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page,
    },
    headers: {
      Authorization: `Client-ID ${accessKey}`,
      "Accept-Version": "v1",
    },
  });
  console.log("response :>> ", response);
  return response;
};
