"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PictureFrame from "@/components/PictureFrame";
import Divider from "@/components/Divider";
import TermsModal from "@/components/TermsModal";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import MuseumEntrance from "@/components/MuseumEntrance";

export default function TopPage() {
  const router = useRouter();
  const [stepCount, setStepCount] = useState(1);
  const [speechDisabled, setSpeechDisabled] = useState(false);
  const [modal, setModal] = useState<"terms" | "privacy" | null>(null);
  const [enterUuid, setEnterUuid] = useState<string | null>(null);
  const [showEntrance, setShowEntrance] = useState(true);

  useEffect(() => {
    fetch("/api/v1/random")
      .then((r) => (r.ok ? r.json() : null))
      .then((uuid) => setEnterUuid(uuid as string | null))
      .catch(() => {});
  }, []);

  const concept =
    "あなたはコンビニエンスストアのホットスナックを買う時に、じっくり選んで注文をしてますか？コンビニ横では周りの人の目が気になって！なかなか選べたもんじゃありません！そんな繊細で優しいかたのために！ホットスナック美術館！は開館されました！美術品のように額縁に入ったホットスナックをじっくり鑑賞し！コンビニ横の息苦しさから解放されましょう！";

  const target =
    "ホットスナック美術館の対象者は、コンビニエンスストアでホットスナックを選んでいる時に、店員の視線が気になる人。ほかの客の邪魔になっていると感じる人。ホットスナックを選ぼうとレジ横に向かったら、レジに向かったと店員に間違われて気まずい思いをした経験がある人です。";

  const speakText = (text: string, timeout: number) => {
    setSpeechDisabled(true);
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    setTimeout(() => setSpeechDisabled(false), timeout);
  };

  return (
    <>
      {showEntrance && (
        <MuseumEntrance onComplete={() => setShowEntrance(false)} />
      )}
      <div className="gallery-page">

        {/* Concept */}
        <div className="gallery-panel text-center py-5 px-4">
          <div className="flex items-center justify-center gap-1 pb-3">
            <span className="text-xs font-bold">🔖 ホットスナック美術館について</span>
            <button
              onClick={() => speakText(concept, 26000)}
              disabled={speechDisabled}
              className="p-1 disabled:opacity-50 cursor-pointer"
            >
              🔊
            </button>
          </div>
          <p className="text-xs font-bold leading-5 text-[#c8a870]">
            コンビニのホットスナック
            <br />
            じっくり選びたいけど選べない
            <br />
            そんな事態を解決するサービス
          </p>
        </div>

        <div className="gallery-gap" />

        {/* Title Image */}
        <div className="gallery-panel py-8 px-8">
          <PictureFrame>
            <Image
              src="/img/TOP_TITLE.jpg"
              alt="ホットスナック美術館"
              width={300}
              height={200}
              className="w-full h-auto"
              priority
            />
          </PictureFrame>
        </div>

        <div className="gallery-gap" />

        {/* CTA */}
        <div className="gallery-panel text-center py-6 px-4">
          <p className="text-xs font-bold mb-4">
            美術館に来館して
            <br />
            ＼展示作品を鑑賞しよう／
          </p>
          <button
            onClick={() => enterUuid && router.push(`/hotsnack/${enterUuid}`)}
            disabled={!enterUuid}
            className="border border-[#d4a017] text-[#e8d5a0] rounded-full px-6 py-3 text-sm font-bold inline-flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            🏛 美術館に入る
          </button>
          <p className="text-[0.55em] font-light mt-3 text-[#a08060]">
            ※下の利用規約・プライバシーポリシーをご確認ください。
          </p>
        </div>

        <div className="gallery-gap" />

        {/* Usage Steps */}
        <div className="gallery-panel text-center py-4 px-4">
          <div className="flex items-center justify-center gap-1 py-1">
            <span className="text-xs font-bold">
              🔖 ホットスナック美術館の使い方({stepCount}/3)
            </span>
          </div>
          <div className="pt-2 mb-4">
            <div className="h-[350px] flex items-center justify-center">
              <Image
                src={`/img/rules/Rule_${stepCount}.png`}
                alt={`使い方 ステップ${stepCount}`}
                width={300}
                height={350}
                className="w-full h-auto max-h-[350px] object-contain"
              />
            </div>
          </div>
          {stepCount === 3 ? (
            <button
              onClick={() => setStepCount(1)}
              className="px-6 py-2 rounded-full border border-[rgba(212,160,23,0.4)] text-[#e8d5a0] cursor-pointer"
            >
              初めへ
            </button>
          ) : (
            <button
              onClick={() => setStepCount((c) => c + 1)}
              className="px-6 py-2 rounded-full border border-[rgba(212,160,23,0.4)] text-[#e8d5a0] cursor-pointer"
            >
              次へ
            </button>
          )}
        </div>

        <div className="gallery-gap" />

        {/* Target Audience */}
        <div className="gallery-panel text-center py-4 px-4">
          <div className="flex items-center justify-center gap-1 pb-3">
            <span className="text-xs font-bold">
              🔖 ホットスナック美術館の来館対象者
            </span>
            <button
              onClick={() => speakText(target, 20000)}
              disabled={speechDisabled}
              className="p-1 disabled:opacity-50 cursor-pointer"
            >
              🔊
            </button>
          </div>
          <p className="text-xs font-bold text-left">
            コンビニでホットスナックを選んでいる時に、、、
          </p>
          <p className="text-[0.7em] text-center py-2 text-[#c8a870]">
            店員の視線が気になる人。
            <br />
            他の客の邪魔になっていると感じる人。
          </p>
          <p className="text-xs font-bold text-left">
            ホットスナックを選ぼうとレジ横に向かったら、、、
          </p>
          <p className="text-[0.7em] text-center py-2 text-[#c8a870]">
            レジに向かったと間違われ、気まずい思いをした人。
          </p>
        </div>

        <div className="gallery-gap" />

        {/* Footer Links */}
        <div className="gallery-panel flex justify-center gap-4 py-4 text-xs">
          <button
            onClick={() => setModal("terms")}
            className="text-[#a08060] hover:text-[#ffce08] cursor-pointer"
          >
            利用規約
          </button>
          <button
            onClick={() => setModal("privacy")}
            className="text-[#a08060] hover:text-[#ffce08] cursor-pointer"
          >
            プライバシーポリシー
          </button>
          <a
            href="https://twitter.com/eityamo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a08060] hover:text-[#ffce08] cursor-pointer"
          >
            問い合わせ
          </a>
        </div>

        <TermsModal
          isVisible={modal === "terms"}
          onClose={() => setModal(null)}
        />
        <PrivacyPolicyModal
          isVisible={modal === "privacy"}
          onClose={() => setModal(null)}
        />
      </div>
    </>
  );
}
