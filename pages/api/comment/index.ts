import type { NextApiRequest, NextApiResponse } from "next";
import {
  getComments,
  createComment,
  getCommentsForTweet,
} from "../../../utils/commentActions";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { tweetId } = req.query;

  try {
    switch (req.method) {
      case "GET":
        if (req.query.tweetId) {
          res.json(await getCommentsForTweet(tweetId));
        } else {
          res.json(await getComments());
        }
        break;
      case "POST":
        res.json(await createComment(req.body));
        break;
      default:
        res.status(400).send("No response for that method");
    }
  } catch (e) {
    res.status(400).json({ e });
    console.error(e);
  }
}
