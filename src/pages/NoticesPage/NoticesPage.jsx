import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import PlusIcon from 'icons/PlusSmallIcon';
import Button from 'shared/components/Button';
import Title from 'shared/components/Title/Title';
import style from './NoticesPage.module.scss';
const NoticesPage = () => {
  return (
    <>
      If components are ready, add them to NoticesPage. /NoticesSearch,
      NoticesCategoriesList, NoticesNav, NoticesFilters, AddPet/
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <div className={style.wrapper}>
        <NoticesCategoriesNav />

        <Button
          type="button"
          className={style.addBtn}
          SVGComponent={PlusIcon}
          label={'Add Pet'}
        />
      </div>{' '}
    </>
  );
};

export default NoticesPage;
