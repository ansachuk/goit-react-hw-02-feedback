const Controls = ({ title, onControlClick }) => {
  return (
    <button
      onClick={() => {
        onControlClick(title);
      }}
    >
      {title}
    </button>
  );
};
export default Controls;
