import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {


 
  return (
    <div className='cards'>
      <h1>Our Selection</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='row1'>
            <div className='column'>
              <CardItem
                src='images/img-2.JPG!D'
                text='Top Soil'
                path='/products'
              />
            </div>
            <div className='column'>
              <CardItem
                src='images/img-9.jpg'
                text='Mulch'
                path='/products'
              />
            </div>

            
          </div>
          <div className = "row2">
            <div className = 'column'>
            <CardItem
              src='images/img-3.JPG!D'
              text='Stone selection'
              path='/products'
            /></div>
            <div className = 'column'>
            <CardItem
              src='images/img-8.jpg'
              text='Sand'
              path='/products'
            />
            </div>
            <div className = 'column'>
            <CardItem
              src='images/img-4.JPG!D'
              text='Granite Boulders'
              path='/products'
            />
            </div>
            <div className = 'column'>
            <CardItem
              src='images/img-5.jpg'
              text='Stone dust'
              path='/products'
            />
            </div>
            <div className = 'column'>
            <CardItem
              src='images/img-10.webp'
              text='Landscaping supplies'
              path='/products'
            />
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
