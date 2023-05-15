
import Button from 'shared/components/Button/Button';
import style from './NoticesCategoriesNav.module.scss';
export const NoticesCategoriesNav = () => {
  return (
    <div className={style.wrapper}>
      <Button label={'sell'} className={style.btn} />

      <Button label={'lost/found'} className={style.btn} />

      <Button label={'in good hands'} className={style.btn} />
    </div>
  );
};

