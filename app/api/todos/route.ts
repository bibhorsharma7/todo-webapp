import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // get all todos form database
  const todos = await prisma.task.findMany();
  return NextResponse.json({ status: 200, tasks: todos });
}

export async function POST(request: NextRequest) {
  // add new todo
  const body = await request.json();
  const data = {
    title: body.title,
    description: body.description,
  };

  await prisma.task.create({ data });

  return NextResponse.json({ status: 200, message: "Successful" });
}
