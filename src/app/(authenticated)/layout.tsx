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
            <div className="bg-linear-to-br from-green-50 from-10% via-lime-100 via-50% to-emerald-200/50 md:w-[450px] md:min-h-screen w-full h-screen md:border-green-100 md:border md:shadow-xl md:rounded-xl py-4 px-4">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
