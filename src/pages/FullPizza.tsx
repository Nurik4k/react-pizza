import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://63272eadba4a9c4753328ada.mockapi.io/pizzas/${id}`,
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Загрузка</div>;
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt='' />
      <h2>{pizza.name}</h2>
      <p>Цена: {pizza.price}</p>
    </div>
  );
};

export default FullPizza;
