import type { NextApiRequest, NextApiResponse } from "next";
import { getTweets, createTweet } from "../../../utils/tweetActions";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET":
        res.json(await getTweets());
        break;
      case "POST":
        res.json(await createTweet(req.body));
        break;
      default:
        res.status(400).send("No response for that method");
    }
  } catch (e) {
    res.status(400).json({ e });
    console.error(e);
  }
}
