"use client";

import { useState } from "react";
import type { Hotsnack } from "@/db/schema";
import PictureFrame from "./PictureFrame";
import AnimatedNumber from "./AnimatedNumber";
import Divider from "./Divider";

interface HotsnackDetailModalProps {
  isVisible: boolean;
  hotsnack: Hotsnack | null;
  onClose: () => void;
}

function getStoreYear(store: string): string {
  if (store === "セブン-イレブン") return "1974年 - 現在";
  if (store === "LAWSON") return "1975年 - 現在";
  if (store === "FamilyMart") return "1973年 - 現在";
  return "";
}

export default function HotsnackDetailModal({
  isVisible,
  hotsnack,
  onClose,
}: HotsnackDetailModalProps) {
  const [show, setShow] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [speechDisabled, setSpeechDisabled] = useState(false);

  // Sync counts when hotsnack changes
  const displayLike = hotsnack ? hotsnack.like_count + likeCount : 0;
  const displayDislike = hotsnack ? hotsnack.dislike_count + dislikeCount : 0;
  const evaluationAmount = hotsnack ? hotsnack.price * displayLike : 0;

  if (!isVisible || !hotsnack) return null;

  const addLike = async () => {
    const res = await fetch(`/api/v1/hotsnack/${hotsnack.item_uuid}/like`, {
      method: "PUT",
    });
    if (res.ok) {
      setLikeCount((c) => c + 1);
    }
  };

  const addDislike = async () => {
    const res = await fetch(`/api/v1/hotsnack/${hotsnack.item_uuid}/dislike`, {
      method: "PUT",
    });
    if (res.ok) {
      setDislikeCount((c) => c + 1);
    }
  };

  const speak = () => {
    setSpeechDisabled(true);
    const utterance = new SpeechSynthesisUtterance(hotsnack.description);
    speechSynthesis.speak(utterance);
    setTimeout(() => setSpeechDisabled(false), 3000);
  };

  const handleClose = () => {
    setLikeCount(0);
    setDislikeCount(0);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-[#f6f5ee] rounded-lg max-w-[375px] w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Evaluation & Like/Dislike */}
        <div className="grid grid-cols-3 gap-1 mt-4 mb-2 mx-12">
          <div className="col-span-1 text-center">
            <div className="text-base font-bold">評価額</div>
          </div>
          <div className="text-center">
            <button onClick={addLike} className="p-1">
              👍
            </button>
          </div>
          <div className="text-center">
            <button onClick={addDislike} className="p-1">
              👎
            </button>
          </div>
          <div className="col-span-1 text-center text-sm">
            <AnimatedNumber value={evaluationAmount} /> 円
          </div>
          <div className="text-center text-sm">{displayLike}</div>
          <div className="text-center text-sm">{displayDislike}</div>
        </div>

        <div className="mx-4">
          <Divider />
        </div>

        {/* Picture */}
        <div className="mx-10 my-8">
          <PictureFrame>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hotsnack.image}
              alt={hotsnack.name}
              className="w-full h-auto"
            />
          </PictureFrame>
        </div>

        {/* Name plate */}
        <div className="mx-16 my-4 shadow-lg">
          <div className="text-center text-xs font-bold pt-2 pb-0 whitespace-pre-line text-[#2c281e]">
            {hotsnack.name}
          </div>
          <div className="text-center text-[0.55em] font-light pt-1 pb-2 text-[#2c281e]">
            {hotsnack.price}円（税込）
          </div>
          <hr className="hr-plate" />
          <div className="text-center text-xs font-bold pt-2 pb-0 font-[family-name:var(--font-lusitana)] text-[#2c281e]">
            {hotsnack.store}
          </div>
          <div className="text-center text-[0.55em] font-light pt-1 pb-0 text-[#2c281e]">
            {getStoreYear(hotsnack.store)}
          </div>
          <div className="text-center text-[0.55em] font-light pt-0 pb-2 text-[#2c281e]">
            {hotsnack.genre} / {hotsnack.ingredient}
          </div>
        </div>

        {/* Description */}
        <div className="mx-8 mb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-sm">作品解説</span>
              <button
                onClick={speak}
                disabled={speechDisabled}
                className="p-1 disabled:opacity-50"
              >
                🔊
              </button>
            </div>
            <button onClick={() => setShow(!show)} className="p-1 text-lg">
              {show ? "▲" : "▼"}
            </button>
          </div>
          {show && (
            <div>
              <Divider />
              <p className="text-sm text-gray-700 py-2">
                {hotsnack.description}
              </p>
            </div>
          )}
        </div>

        <div className="text-center mb-4">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
