import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { sortItems } from '../components/Sort';
import {Skeleton, Pagination, PizzaBlock, Sort, Categories} from '../components'

import { useAppDispatch } from '../redux/store';
import { searchValueSelector } from '../redux/slices/search/selectors';
import { filterSelector } from '../redux/slices/filter/selectors';
import { pizzaSelector } from '../redux/slices/pizza/selectors';
import { setFilters } from '../redux/slices/filter/slice';
import { SetFiltersParams } from '../redux/slices/filter/types';
import { fetchPizzas } from '../redux/slices/pizza/slice';


const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = useRef(false);
  const isSearch = useRef(false);
  const searchValue = useSelector(searchValueSelector);
  const { categoryId: category, page, sort } = useSelector(filterSelector);
  const { products, status } = useSelector(pizzaSelector);

  import('../utils/math').then(
    math => console.log(math.add(5, 10))
  )

  const getPizzas = async () => {
    const title = sort.searchProp.replace('-', '');
    const order = sort.searchProp.includes('-') ? 'desc' : 'asc';
    const cat = category ? `&category=${category}` : '';
    const search = searchValue ? '&search=' + searchValue : '';
    const currPage = `page=${page}`;

    dispatch(
      fetchPizzas({
        title,
        order,
        cat,
        search,
        currPage,
      }),
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.searchProp,
        category,
        currPage: page,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [category, sort.searchProp, page]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.slice(1)) as unknown as SetFiltersParams;
      const sort = sortItems.find((item) => item.searchProp === params.sortProperty.searchProp);

      if (sort) {
        params.sortProperty = sort;
      }

      dispatch(setFilters(params));

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [category, sort.searchProp, searchValue, page]);


  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      {status === 'error' ? (
        <div className='content--error'>
          <h2>
            Произошло ошибка <span>😕</span>
          </h2>
          <p>
            К сожалению, не смогли получить пиццы <br />
            Повторите попытку позже
          </p>
        </div>
      ) : (
        <div className='content__items'>
          {status === 'loading'
            ? [...Array(8)].map((_, i) => <Skeleton key={i} />)
            : products.map((item: any) => <PizzaBlock key={item.id} {...item} />)}
        </div>
      )}

      <Pagination />
    </div>
  );
};

export default Home;
