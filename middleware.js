import { NextResponse } from "next/server";

const CANONICAL = "www.perlanegra.store";

export function middleware(request) {
  const host = request.headers.get("host") || "";
  if (host && !host.includes(CANONICAL) && !host.includes("localhost")) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL;
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
