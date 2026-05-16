"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type Phase = "idle" | "opening";

export default function MuseumEntrance({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerOpen = useCallback(() => {
    if (phase === "opening") return;
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      sessionStorage.setItem("museum_entered", "1");
      setVisible(false);
      onComplete();
      return;
    }

    setPhase("opening");
    setTimeout(() => {
      sessionStorage.setItem("museum_entered", "1");
      setVisible(false);
      onComplete();
    }, 1050);
  }, [phase, onComplete]);

  useEffect(() => {
    if (!sessionStorage.getItem("museum_entered")) {
      setVisible(true);
      autoTimerRef.current = setTimeout(() => {
        setPhase("opening");
        setTimeout(() => {
          sessionStorage.setItem("museum_entered", "1");
          setVisible(false);
          onComplete();
        }, 1050);
      }, 2200);
    } else {
      onComplete();
    }
    return () => {
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };
  }, []); // onComplete は mount 時のみ実行、以降は autoTimerRef で管理

  if (!visible) return null;

  const isOpening = phase === "opening";

  return (
    <div
      className={`museum-entrance${isOpening ? " museum-entrance--opening" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="ホットスナック美術館 入口"
      onClick={triggerOpen}
    >
      {/* Warm glow that floods through as doors open */}
      <div className="museum-entrance__glow" />

      {/* Light seeping through the center crack */}
      <div className="museum-entrance__crack" />

      {/* Left corridor wall with mounted painting */}
      <div className="museum-entrance__wall museum-entrance__wall--left">
        <div className="museum-wall-art">
          <div className="museum-wall-art__spotlight" />
          <div className="museum-wall-art__frame">
            <div className="museum-wall-art__mat">
              <div className="museum-wall-art__canvas museum-wall-art__canvas--warm" />
            </div>
          </div>
          <div className="museum-wall-art__label">No.1</div>
        </div>
      </div>

      {/* Right corridor wall with mounted painting */}
      <div className="museum-entrance__wall museum-entrance__wall--right">
        <div className="museum-wall-art">
          <div className="museum-wall-art__spotlight" />
          <div className="museum-wall-art__frame">
            <div className="museum-wall-art__mat">
              <div className="museum-wall-art__canvas museum-wall-art__canvas--cool" />
            </div>
          </div>
          <div className="museum-wall-art__label">No.2</div>
        </div>
      </div>

      {/* Museum nameplate sign */}
      <div
        className="museum-entrance__sign"
        style={isOpening ? { opacity: 0, transition: "opacity 0.2s ease", pointerEvents: "none" } : {}}
      >
        <div className="museum-sign">
          <p className="museum-sign__main">ホットスナック</p>
          <p className="museum-sign__main museum-sign__main--lg">美術館</p>
          <div className="museum-sign__rule" />
          <p className="museum-sign__en">HOTSNACK GALLERY</p>
        </div>
      </div>

      {/* Left door */}
      <div className={`museum-door museum-door--left${isOpening ? " museum-door--open" : ""}`}>
        <div className="museum-door__frame">
          <div className="museum-door__panel museum-door__panel--top">
            <div className="museum-door__diamond" />
          </div>
          <div className="museum-door__panel museum-door__panel--bottom" />
        </div>
        <div className="museum-door__handle museum-door__handle--right" />
      </div>

      {/* Right door */}
      <div className={`museum-door museum-door--right${isOpening ? " museum-door--open" : ""}`}>
        <div className="museum-door__frame">
          <div className="museum-door__panel museum-door__panel--top">
            <div className="museum-door__diamond" />
          </div>
          <div className="museum-door__panel museum-door__panel--bottom" />
        </div>
        <div className="museum-door__handle museum-door__handle--left" />
      </div>

      {/* Timer progress bar + skip hint */}
      {!isOpening && (
        <>
          <div className="museum-entrance__timer" />
          <div className="museum-entrance__skip">タップでスキップ</div>
        </>
      )}
    </div>
  );
}
