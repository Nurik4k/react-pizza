import React, { useRef } from 'react';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import clear from '../../assets/img/clear.png';
import { useDispatch, useSelector } from 'react-redux';
import {  setSearchValue, setValue } from '../../redux/slices/search/slice';
import { searchSelector } from '../../redux/slices/search/selectors';

const Search: React.FC = () => {
  const { value } = useSelector(searchSelector);
  const dispatch = useDispatch();

  const searchRef = useRef<HTMLInputElement>(null);

  const handleClickClear = () => {
    dispatch(setSearchValue(''));
    dispatch(setValue(''));

    searchRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 500),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(e.target.value));
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns='http://www.w3.org/2000/svg'
        fill='#000000'
        viewBox='0 0 50 50'
        width='50px'
        height='50px'
      >
        <path d='M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z' />
      </svg>
      <input
        ref={searchRef}
        onChange={onChangeInput}
        value={value}
        className={styles.input}
        type='text'
        placeholder='Поиск пицц...'
      />
      {value && (
        <img onClick={handleClickClear} className={styles.clear} src={clear} alt='Clear Icon' />
      )}
    </div>
  );
};

export default Search;
