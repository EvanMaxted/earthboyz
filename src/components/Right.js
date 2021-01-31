import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
function Right(props) {
    return (
      <>
        <li className='cards__item'>
          <Link className='right'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img n
                className='rightImage'
                alt='Travel Image'
                src ={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='lateralText'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }
  
  export default Right;