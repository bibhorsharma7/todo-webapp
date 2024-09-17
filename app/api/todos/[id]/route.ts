import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } },
) {
  // edit todo
  const { id } = context.params;
  const body = await request.json();

  const { title, description, completed } = body;

  try {
    await prisma.task.update({
      where: { id: id },
      data: {
        title: title,
        description: description,
        completed: completed,
      },
    });
    return NextResponse.json({ status: 200, message: "Successful" });
  } catch (e) {
    console.log("error:", e);
  }

  return NextResponse.json({ status: 400, message: "Something went wrong" });
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } },
) {
  // delete todo
  const { id } = context.params;
  await prisma.task.delete({
    where: { id: id },
  });

  return NextResponse.json({ status: 200, message: "Successful" });
}
