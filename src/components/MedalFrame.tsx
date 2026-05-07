interface MedalFrameProps {
  rank: number;
  children: React.ReactNode;
}

export default function MedalFrame({ rank, children }: MedalFrameProps) {
  const medalClass =
    rank === 0
      ? "medal-gold"
      : rank === 1
        ? "medal-silver"
        : rank === 2
          ? "medal-copper"
          : "";

  return (
    <div className={`medal-frame ${medalClass} text-center`}>
      {children}
    </div>
  );
}
