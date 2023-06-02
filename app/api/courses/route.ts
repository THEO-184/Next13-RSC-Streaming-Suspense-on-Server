import { NextRequest, NextResponse } from "next/server";
import courses from "./data.json";

export async function GET() {
	return NextResponse.json(courses);
}

export async function POST(request: NextRequest) {
	const { title, description, level, link } = await request.json();

	console.log({ title, description, level });

	return NextResponse.json({ message: "Course created" });
}
