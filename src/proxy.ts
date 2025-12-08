import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname.startsWith("/login");

  if (request.nextUrl.pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("rsv_session")?.value;
  if (!cookie && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};
