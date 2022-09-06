import type { NextApiRequest, NextApiResponse } from "next";
import {
  getComment,
  updateComment,
  deleteComment,
} from "../../../utils/server";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;

  try {
    switch (req.method) {
      case "GET":
        res.json(await getComment(id));
        break;
      case "PUT":
        res.json(await updateComment(id, req.body));
        break;
      case "DELETE":
        res.json(await deleteComment(id));
        break;
      default:
        res.status(400).send("No response for that method");
    }
  } catch (e) {
    res.status(400).json({ e });
    console.error(e);
  }
}
