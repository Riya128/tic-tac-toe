function Square({ value, clickHandler }) {
  return (
    <button class="btn btn-warning"
      style={{
        height: "100px",
        width: "100px",
        border:"3px solid black",
        display: "inline-block",
        fontSize:"30px",
        fontWeight:"bold",
        color:"red"
      }}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
}
export default Square;
