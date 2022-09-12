import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const total = req.body
      .map((item: any) => item.quantity * item.price)
      .reduce(function (result: any, item: any) {
        return result + item;
      }, 0);

    const orderObj = await prisma.orders.create({
      data: {
        total: total,
      },
    });

    req.body.forEach(async (i: any) => {
      const item = await prisma.items.create({
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
