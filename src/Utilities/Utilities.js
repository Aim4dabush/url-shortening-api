import axios from "axios";

export const shorten = async (url) => {
  const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
  return res.data;
};
