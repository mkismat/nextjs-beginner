import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "@/data/comments";
interface commentsData {
  id: number;
  text: string;
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    let id = 1;
    let commentsData: commentsData[] = comments;
    if (comments.length) {
    //   console.log(commentsData.slice(-1).id);
      id = commentsData.length + 1;
      //    id = comments.slice(-1).id + 1
    }
    const comment = req.body.comment;
    const newComment = {
      id: Math.floor(Math.random() * (10000000 - 10000) + 10000),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
