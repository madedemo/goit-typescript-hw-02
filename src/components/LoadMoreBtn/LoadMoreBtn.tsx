import css from './LoadMoreBtn.module.css';
import { FC } from 'react'

interface LoadMoreBtnProps {
  onClick: () => void
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {

  return (
    <div className={css.buttonwrapper}>
    <button onClick={onClick} className={css.button}>
      Load more
    </button>
    </div>
  );
};

export default LoadMoreBtn ;