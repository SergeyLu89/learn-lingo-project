import css from './Modal.module.css';
import sprite from '../../assets/sprite.svg';
import { useCallback, useEffect } from 'react';

const Modal = ({ children, isOpen, closeFnc }) => {
  const closeOnClick = useCallback(() => {
    if (isOpen) {
      closeFnc();
    }
  }, [isOpen, closeFnc]);

  useEffect(() => {
    const onPressEsc = event => {
      if (event.code === 'Escape') {
        closeOnClick();
      }
    };
    window.addEventListener('keydown', onPressEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onPressEsc);
      document.body.style.overflow = 'auto';
    };
  }, [closeOnClick]);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeOnClick();
    }
  };

  return (
    <div className={css.backdrop} onClick={onOverlayClick}>
      <div className={css.modal}>
        <button className={css.modalCloseBtn} onClick={closeOnClick}>
          <svg width="32" height="32" aria-label="cross icon">
            <use href={sprite + '#icon-cross'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
