import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { redirect } from "next/navigation";
import { getUser } from "@RSV/lib/auth/get-user";
import Providers from "@RSV/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinRIS | Dashboard",
  description: "Finance Resource Information System",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers user={user}>
          <div className="bg-gray-50 w-full h-full flex justify-center items-center">
            <div className="bg-linear-to-r from-green-50 from-10% via-lime-100 via-60% to-emerald-200/50 min-w-[450px] min-h-screen border-green-100 border shadow-xl rounded-xl py-4 px-4">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
