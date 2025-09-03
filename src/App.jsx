import Description from '@/components/Description';
import Feedback from '@/components/Feedback';
import Options from '@/components/Options';
import usePersistedState from '@/hooks/usePersistedState';

import css from './App.module.css';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [feedbackStorage, setFeedbackStorage] = usePersistedState('feedback', initialState);

  const updateFeedback = (feedbackType) => {
    if (!Object.keys(feedbackStorage).includes(feedbackType)) return;

    setFeedbackStorage((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackStorage(initialState);
  };

  const totalFeedback = feedbackStorage.good + feedbackStorage.neutral + feedbackStorage.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedbackStorage.good / totalFeedback) * 100) : 0;

  return (
    <div className={css.container}>
      <Description />
      <Options onUpdateFeedback={updateFeedback} onReset={resetFeedback} />
      <Feedback
        feedback={feedbackStorage}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </div>
  );
}
