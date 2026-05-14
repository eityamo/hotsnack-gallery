"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PictureFrame from "@/components/PictureFrame";
import Divider from "@/components/Divider";
import TermsModal from "@/components/TermsModal";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";

export default function TopPage() {
  const router = useRouter();
  const [stepCount, setStepCount] = useState(1);
  const [speechDisabled, setSpeechDisabled] = useState(false);
  const [modal, setModal] = useState<"terms" | "privacy" | null>(null);
  const [enterUuid, setEnterUuid] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/v1/random")
      .then((r) => (r.ok ? r.json() : null))
      .then((uuid: string | null) => setEnterUuid(uuid))
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
    <div className="pb-24 px-4">
      {/* Concept */}
      <div className="text-center my-4">
        <div className="flex items-center justify-center gap-1 pb-3">
          <span className="text-xs font-bold">🔖 ホットスナック美術館について</span>
          <button
            onClick={() => speakText(concept, 26000)}
            disabled={speechDisabled}
            className="p-1 disabled:opacity-50"
          >
            🔊
          </button>
        </div>
        <p className="text-xs font-bold leading-5 text-[#2c281e]">
          コンビニのホットスナック
          <br />
          じっくり選びたいけど選べない
          <br />
          そんな事態を解決するサービス
        </p>
      </div>

      <Divider />

      {/* Title Image */}
      <div className="mx-4 my-10 shadow-lg">
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

      <Divider />

      {/* CTA */}
      <div className="text-center my-4">
        <p className="text-xs font-bold mb-2">
          美術館に来館して
          <br />
          ＼展示作品を鑑賞しよう／
        </p>
        <button
          onClick={() => enterUuid && router.push(`/hotsnack/${enterUuid}`)}
          disabled={!enterUuid}
          className="bg-black text-white rounded-full px-6 py-3 text-sm font-bold inline-flex items-center gap-2 disabled:opacity-50"
        >
          🏛 美術館に入る
        </button>
        <p className="text-[0.55em] font-light mt-2 text-[#2c281e]">
          ※下の利用規約・プライバシーポリシーをご確認ください。
        </p>
      </div>

      <Divider />

      {/* Usage Steps */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-1 py-1">
          <span className="text-xs font-bold">
            🔖 ホットスナック美術館の使い方({stepCount}/3)
          </span>
        </div>
        <div className="pt-2 mb-4">
          <div className="h-[350px] flex items-center justify-center border border-transparent rounded">
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
            className="px-6 py-2 bg-white rounded-full shadow"
          >
            初めへ
          </button>
        ) : (
          <button
            onClick={() => setStepCount((c) => c + 1)}
            className="px-6 py-2 bg-white rounded-full shadow"
          >
            次へ
          </button>
        )}
      </div>

      <Divider />

      {/* Target Audience */}
      <div className="text-center my-4">
        <div className="flex items-center justify-center gap-1 pb-3">
          <span className="text-xs font-bold">
            🔖 ホットスナック美術館の来館対象者
          </span>
          <button
            onClick={() => speakText(target, 20000)}
            disabled={speechDisabled}
            className="p-1 disabled:opacity-50"
          >
            🔊
          </button>
        </div>
        <div className="border border-transparent rounded p-2">
          <p className="text-xs font-bold text-left pt-0">
            コンビニでホットスナックを選んでいる時に、、、
          </p>
          <p className="text-[0.7em] text-center py-2 text-[#2c281e]">
            店員の視線が気になる人。
            <br />
            他の客の邪魔になっていると感じる人。
          </p>
          <p className="text-xs font-bold text-left">
            ホットスナックを選ぼうとレジ横に向かったら、、、
          </p>
          <p className="text-[0.7em] text-center py-2 text-[#2c281e]">
            レジに向かったと間違われ、気まずい思いをした人。
          </p>
        </div>
      </div>

      <Divider />

      {/* Footer Links */}
      <div className="flex justify-center gap-2 py-4 text-xs">
        <button
          onClick={() => setModal("terms")}
          className="text-gray-600 hover:text-black"
        >
          利用規約
        </button>
        <button
          onClick={() => setModal("privacy")}
          className="text-gray-600 hover:text-black"
        >
          プライバシーポリシー
        </button>
        <a
          href="https://twitter.com/eityamo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
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
  );
}
