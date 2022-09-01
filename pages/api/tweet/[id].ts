import type { NextApiRequest, NextApiResponse } from "next";
import {
  getTweet,
  updateTweet,
  deleteTweetAndRelatedComments,
} from "../../../utils/tweetActions";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  
  try {
    switch (req.method) {
      case "GET":
        res.json(await getTweet(id));
        break;
      case "PUT":
        res.json(await updateTweet(id, req.body));
        break;
      case "DELETE":
        res.json(await deleteTweetAndRelatedComments(id));
        break;
      default:
        res.status(400).send("No response for that method");
    }
  } catch (e) {
    res.status(400).json({ e });
    console.error(e);
  }
}
