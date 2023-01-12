import "css/Button.css";

export function Button({ onClickHandler, title }) {
  return <button onClick={onClickHandler}>{title}</button>;
}
