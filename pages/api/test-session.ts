import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthenticated user" });
  } else {
    res.status(200).json({ message: "Success", session });
  }
};
