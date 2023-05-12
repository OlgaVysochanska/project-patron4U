import Button from 'components/Button/Button';
import SearchIcon from '../../../icons/SearchIcon';
import CrossIcon from 'icons/CrossIcon';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';

import style from './SearchBar.module.scss';

const SearchBar = ({ onSubmit }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  console.log('Render form');
  const { search } = state;

  const buttonClass = search ? style.active : style.disabled;

  const remove = () => {
    setState({
      search: '',
    });
  };

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
          className={buttonClass}
          SVGComponent={SearchIcon}
        />

        {search && (
          <Button
            type="button"
            className={style.crossBtn}
            SVGComponent={CrossIcon}
            onClick={remove}
          />
        )}
      </div>
    </form>
  );
};

export default SearchBar;
