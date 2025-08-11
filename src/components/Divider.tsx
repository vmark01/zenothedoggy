import "./Divider.css"

export type DividerProps = {
    text? : string
}

export default function Divider({ text }: DividerProps) {
  return (
    <div className="custom-divider-container">
      <div className="custom-divider-line" />
      {text && <span className="custom-divider-text">{text}</span>}
      <div className="custom-divider-line" />
    </div>
  );
}