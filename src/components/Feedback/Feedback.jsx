import styles from "./Feedback.module.css";

export default function Feedback({ values, totalFeedback, positiveFeedback }) {
  return (
    <div className={styles.feedback}>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      {totalFeedback > 0 && (
        <>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedback}%</p>
        </>
      )}
    </div>
  );
}
