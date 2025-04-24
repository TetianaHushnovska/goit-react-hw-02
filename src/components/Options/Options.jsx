import styles from "./Options.module.css";

export default function Options({
  options,
  onFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button key={option} onClick={() => onFeedback(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
