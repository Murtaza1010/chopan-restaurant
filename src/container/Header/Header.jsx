import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header' app__wrapper section__padding id="home">

    <div className='app_wrapper_info'>
      {/*  props enables new property-value */}
      <SubHeading title="Chase The New Flavour"/> 
      <h1 className='app__header-h1'>The Key To Fine Dinning</h1>
      <p className='p__opensans' style={{margin: '2rem 0rem'}}>We create magic for all ages with our mouth smacking foods and swiftest restaurant takeaway service. We assure you to get the best possible service from each of our staff members.</p>
      <button type='button' className='custom_button'>Explore Menu</button>

    </div>
       <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
   
    
  </div>
);

export default Header;
