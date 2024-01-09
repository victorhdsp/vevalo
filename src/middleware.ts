import { NextResponse, NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  return NextResponse.next();
}