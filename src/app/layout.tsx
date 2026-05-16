import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";
import GalleryRoomBg from "@/components/GalleryRoomBg";
import GalleryEntrance from "@/components/GalleryEntrance";

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
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <GalleryRoomBg />

        <header className="gallery-header">
          <div className="max-w-[375px] mx-auto px-4 py-3">
            <h1
              className="font-[family-name:var(--font-lusitana)] text-lg font-bold tracking-wide text-[#e8d5a0]"
              style={{ textShadow: "0 0 18px rgba(212,160,23,0.35)" }}
            >
              HOTSNACK GALLERY
            </h1>
          </div>
        </header>

        <main className="flex-1 max-w-[375px] w-full mx-auto">
          <GalleryEntrance />
          {children}
        </main>

        <BottomNavigation />
      </body>
    </html>
  );
}
