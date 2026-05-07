interface PictureFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function PictureFrame({
  children,
  className = "",
}: PictureFrameProps) {
  return (
    <div className={`frame-outline ${className}`}>
      <div className="frame-inline">
        <div className="frame-block">
          <div className="frame-border">{children}</div>
        </div>
      </div>
    </div>
  );
}
