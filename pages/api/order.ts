import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log(JSON.stringify(req.body));

    const orderObj = await prisma.orders.create({
      data: {},
    });

    req.body.forEach(async (i: any) => {
      const item = await prisma.item.create({
        data: {
          name: i.name,
          quantity: i.quantity,
          orders: { connect: { id: orderObj.id } },
        },
      });
    });

    res.status(201).json({ message: "success" });
  }
}
