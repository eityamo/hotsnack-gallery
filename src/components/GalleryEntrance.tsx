function LeaningPainting({
  canvasClass,
  rotate,
  width = 48,
  height = 62,
  zOffset = 0,
}: {
  canvasClass: string;
  rotate: number;
  width?: number;
  height?: number;
  zOffset?: number;
}) {
  return (
    <div
      className="glp"
      style={{
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "bottom center",
        zIndex: zOffset,
        flexShrink: 0,
      }}
    >
      <div className="glp__outer" style={{ width }}>
        <div className="glp__mat">
          <div className={`glp__canvas ${canvasClass}`} style={{ height }} />
        </div>
      </div>
    </div>
  );
}

export default function GalleryEntrance() {
  return (
    <div className="gallery-entrance" aria-hidden="true">
      {/* Left wall: two paintings leaning against the left wall */}
      <div className="glp-group glp-group--left">
        <LeaningPainting canvasClass="glp__canvas--burnt" rotate={-13} width={44} height={58} zOffset={1} />
        <LeaningPainting canvasClass="glp__canvas--ochre" rotate={-9} width={52} height={70} zOffset={2} />
      </div>

      {/* Right wall: two paintings leaning against the right wall */}
      <div className="glp-group glp-group--right">
        <LeaningPainting canvasClass="glp__canvas--slate" rotate={9} width={50} height={66} zOffset={2} />
        <LeaningPainting canvasClass="glp__canvas--umber" rotate={14} width={42} height={55} zOffset={1} />
      </div>
    </div>
  );
}
