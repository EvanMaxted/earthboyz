import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
function Lateral(props) {
    return (
      <>
        <li className='cards__item'>
          <Link className='lateral'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img n
                className='lateralImage'
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
  
  export default Lateral;
