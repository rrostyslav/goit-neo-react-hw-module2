import css from './Feedback.module.css';

export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.container}>
      <span>Good: {feedback.good}</span>
      <span>Neutral: {feedback.neutral}</span>
      <span>Bad: {feedback.bad}</span>
      <span>Total: {totalFeedback}</span>
      <span>Positive: {positiveFeedback}%</span>
    </div>
  );
}
