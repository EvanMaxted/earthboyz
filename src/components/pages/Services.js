import React from 'react';
import '../../App.css';
import Lateral from '../Lateral';
import Right from '../Right';

export default function Services() {
  return (
  <>
  <section className = "test">
  <h1 className='services'>SERVICES</h1>

  </section>
      <Lateral
              src='images/mulchinsta.jpg'
              text='Arnprior Earth Depot is proud to partner with our trusted peers at Capital Asphalt & Interlock to offer installation services to our clientele.'
            />
      <Right
      src='images/soildelivery.jpg'
      text='We offer delivery services to faciliate the lives of each and every one of our customers.'

      />
      <Lateral
        src='images/mulch.jpg'
        text='We carry materials on site! Stop by to pick up or refuel on supplies needed for your perfect yard dream.'
      />
  </>
  );
}
