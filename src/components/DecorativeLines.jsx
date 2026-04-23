import "../styles/decorative-lines.css";

const DecorativeLines = () => {
  return (
    <div className="decorative-lines" aria-hidden="true">
      <img src="/blue.svg" className="decor blue" alt="" draggable={false} />
      <img
        src="/orange.svg"
        className="decor orange"
        alt=""
        draggable={false}
      />
      <img src="/white.svg" className="decor white" alt="" draggable={false} />
    </div>
  );
};

export default DecorativeLines;
