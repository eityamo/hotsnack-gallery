"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [randomUuid, setRandomUuid] = useState("");
  const [disabledRandom, setDisabledRandom] = useState(false);

  const fetchRandomHotsnack = useCallback(async () => {
    try {
      const res = await fetch("/api/v1/random");
      if (!res.ok) return;
      const uuid: string = await res.json();

      if (pathname === `/hotsnack/${uuid}`) {
        // Retry if same as current
        const res2 = await fetch("/api/v1/random");
        if (res2.ok) {
          const uuid2: string = await res2.json();
          setRandomUuid(uuid2);
          return;
        }
      }
      setRandomUuid(uuid);
    } catch (error) {
      console.error(error);
    }
  }, [pathname]);

  useEffect(() => {
    fetchRandomHotsnack();
  }, [fetchRandomHotsnack]);

  const handleRandom = async () => {
    if (!randomUuid || disabledRandom) return;
    setDisabledRandom(true);
    router.push(`/hotsnack/${randomUuid}`);
    setTimeout(() => setDisabledRandom(false), 1000);
  };

  const handleShare = () => {
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
    const shareURL =
      "https://twitter.com/intent/tweet?text=" +
      "ユーザー参加型のバーチャル美術館" +
      "%0a" +
      "あなたの査定がホットスナックの印象を変える" +
      "%0a" +
      "%23ホットスナック美術館" +
      "%0a" +
      encodeURIComponent(siteUrl + "/");
    window.open(shareURL, "_blank");
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 gallery-bottom-nav">
      <div className="max-w-[375px] mx-auto flex justify-around items-center h-[70px]">
        <button
          onClick={() => router.push("/")}
          className="flex flex-col items-center gap-1 text-xs font-[family-name:var(--font-lusitana)] cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            />
          </svg>
          <span>Gallery</span>
        </button>

        <button
          onClick={handleRandom}
          disabled={disabledRandom}
          className="flex flex-col items-center gap-1 text-xs font-[family-name:var(--font-lusitana)] disabled:opacity-40 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>Random</span>
        </button>

        <button
          onClick={() => router.push("/categories")}
          className="flex flex-col items-center gap-1 text-xs font-[family-name:var(--font-lusitana)] cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span>Ranking</span>
        </button>

        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-1 text-xs font-[family-name:var(--font-lusitana)] cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>Share</span>
        </button>
      </div>
    </nav>
  );
}
