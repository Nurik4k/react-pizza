import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton:React.FC = () => {
  return (
    <div className='pizza-block'>
      <ContentLoader
        speed={2}
        width={280}
        height={467}
        viewBox='0 0 280 467'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <circle cx='138' cy='119' r='120' />
        <rect x='116' y='281' rx='0' ry='0' width='56' height='2' />
        <rect x='105' y='276' rx='0' ry='0' width='1' height='0' />
        <rect x='0' y='258' rx='0' ry='0' width='280' height='27' />
        <rect x='0' y='307' rx='0' ry='0' width='280' height='88' />
        <rect x='0' y='417' rx='0' ry='0' width='280' height='45' />
      </ContentLoader>
    </div>
  );
}
