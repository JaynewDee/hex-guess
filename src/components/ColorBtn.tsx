const ColorBtn = ({ text, onClick }: { text: string; onClick: any }) => {
  return (
    <button className="color-btn" onClick={onClick} key={text}>
      {text}
    </button>
  );
};

export default ColorBtn;
