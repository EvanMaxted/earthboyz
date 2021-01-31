import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
 
  return (
    <div className='cards'>
      <h1>Our selection</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.JPG!D'
              text='Top Soil'
              path='/products'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Mulch'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.JPG!D'
              text='Stone selection'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Sand'
              path='/products'
            />
            <CardItem
              src='images/img-4.JPG!D'
              text='Granite Boulders'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Stone dust'
              path='/products'
            />
            <CardItem
              src='images/img-10.webp'
              text='Landscaping supplies'
              path='/products'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
