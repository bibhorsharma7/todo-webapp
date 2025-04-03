import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET() {
  // Get the authenticated user's session
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  const userId = session.user.id;
  console.log("userId:", userId);

  // Get tasks related to the authenticated user
  const todos = await prisma.task.findMany({
    where: { userId: userId },
  });

  return NextResponse.json({ status: 200, tasks: todos });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Get the authenticated user's session
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  const userId = session.user.id;
  console.log("userId:", userId);

  const data = {
    title: body.title,
    description: body.description,
    userId: userId,
  };

  try {
    await prisma.task.create({ data });
    return NextResponse.json({
      status: 200,
      message: "Task created successfully",
    });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
