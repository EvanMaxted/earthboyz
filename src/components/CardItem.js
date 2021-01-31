import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

function CardItem(props) {

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

      <div>
        <li className='cards__item__link' onClick={handleClick}>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img className='cards__item__img' src={props.src} />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </li>
      </div>

      <div>
        <li className='cards__item__link' onClick={handleClick}>
            <figure className='cards__item__pic-wrap' data-category={props.label}> </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </li>
      </div>

    </ReactCardFlip>
  );
}

export default CardItem;


    // <>
    //   <li className='cards__item'>
    //     <Link className='cards__item__link' to={props.path}>
    //       <figure className='cards__item__pic-wrap' data-category={props.label}>
    //         <img
    //           className='cards__item__img'
    //           // alt='Travel Image'
    //           src={props.src}
    //         />
    //       </figure>
    //       <div className='cards__item__info'>
    //         <h5 className='cards__item__text'>{props.text}</h5>
    //       </div>
    //     </Link>
    //   </li>
    // </>