import Button from 'components/Button/Button';
import SearchIcon from '../../../icons/SearchIcon';
// import CrossIcon from 'icons/CrossIcon';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';

import style from './SearchBar.module.scss';

const SearchBar = ({ onSubmit }) => {
  //   const [searchQuery, setSearchQuery] = useState('');

  //   const handleQuerySearch = e => {
  //     setSearchQuery(e.target.value.toLowerCase());
  //   };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     // if (searchQuery.trim() === '') {
  //     //   toast.info('Enter the film title');
  //     // }

  //     // onSearch(searchQuery);
  //     setSearchQuery('');
  //   };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  console.log('Render form');
  const { search } = state;
  return (
    <form className={style.searchForm} onSubmit={handleSubmit}>
      <div className={style.container}>
        <label>
          <input
            className={style.searchInput}
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Search"
            required
          />
        </label>

        <Button
          type="submit"
          className={style.searchBtn}
          SVGComponent={SearchIcon}
        />

        {/* {search && (
          <Button className={style.crossBtn} SVGComponent={CrossIcon} />
        )} */}
      </div>
    </form>
  );
};

export default SearchBar;
