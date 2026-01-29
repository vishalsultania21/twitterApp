import Tweet from "..schema/tweet.js";

export const createTweet = async ({ body }) => {
  try {
    const tweet = await Tweet.create({ body });
    return tweet;
  } catch (err) {
    throw err;
  }
};

export const getTweet = async ({ body }) => {
  try {
    const tweet = await Tweet.create({ body });
    return tweet;
  } catch (err) {
    throw err;
  }
};
