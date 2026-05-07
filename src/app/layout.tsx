import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lusitana",
});

export const metadata: Metadata = {
  title: "ホットスナック美術館",
  description:
    "コンビニのホットスナックがじっくり選べないという問題を解決するアプリ。コンビニ3社のホットスナックを閲覧できます。",
  openGraph: {
    title: "ホットスナック美術館",
    description:
      "コンビニのホットスナックがじっくり選べないという問題を解決するアプリ",
    images: ["/img/ogp.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ホットスナック美術館",
    images: ["/img/ogp.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={lusitana.variable}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CQ61SHQ7LG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CQ61SHQ7LG');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f6f5ee]">
        <header className="bg-gray-100 shadow-sm">
          <div className="max-w-[375px] mx-auto px-4 py-3">
            <h1 className="font-[family-name:var(--font-lusitana)] text-lg font-bold tracking-wide">
              HOTSNACK GALLERY
            </h1>
          </div>
        </header>

        <main className="flex-1 max-w-[375px] w-full mx-auto">
          {children}
        </main>

        <BottomNavigation />
      </body>
    </html>
  );
}
