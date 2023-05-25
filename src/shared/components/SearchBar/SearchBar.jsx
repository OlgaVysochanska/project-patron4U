import { useSearchParams } from 'react-router-dom';
import Button from 'shared/components/Button/Button';
import SearchIcon from '../../../icons/SearchIcon';
import CrossIcon from 'icons/CrossIcon';
import useForm from 'shared/hooks/useForm';
import PropTypes from 'prop-types';
import initialState from './initialState';
import useLang from 'shared/hooks/useLang';
import useTheme from 'shared/hooks/useTheme';
import locale from './locale.json';

import style from './SearchBar.module.scss';

const SearchBar = ({ onSubmit }) => {
  const [, setSearchParams] = useSearchParams();
  const { state, setState, handleChange, handleSubmitSearch } = useForm({
    initialState,
    onSubmit,
  });
  const { theme } = useTheme();
  const { lang } = useLang();
  const title = locale.title[lang];

  const { search } = state;

  const buttonClass = search ? style.active : style.disabled;

  const remove = () => {
    setState({
      search: '',
    });
    setSearchParams({});
  };

  const searchInput =
    theme === 'light'
      ? style.searchInput
      : `${style.searchInput} + ${style.searchInputDark}`;

  return (
    <form className={style.searchForm} onSubmit={handleSubmitSearch}>
      <div className={style.container}>
        <label>
          <input
            className={searchInput}
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder={title}
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

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
