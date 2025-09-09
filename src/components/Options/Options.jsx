import css from './Options.module.css';

export default function Options({ onUpdateFeedback, onReset, feedbackCount }) {
  const handleFeedback = (feedbackType) => () => onUpdateFeedback(feedbackType);

  return (
    <div className={css.container}>
      <button onClick={handleFeedback('good')}>Good</button>
      <button onClick={handleFeedback('neutral')}>Neutral</button>
      <button onClick={handleFeedback('bad')}>Bad</button>
      {feedbackCount > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
