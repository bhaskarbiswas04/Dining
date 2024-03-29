import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__chef app__bg app_wrapper section__padding'>
    <div className="app__chef-image app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quotes" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
        </div>

        <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corrupti inventore architecto blanditiis quidem expedita dolore nam laudantium provident voluptatum delectus molestiae, id porro possimus.</p>
      </div>

      <div className="app__chef-sign">
        <p className='p__cormorant'>Kevin Luis</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="Sign" />
      </div>

    </div>
  </div>
);

export default Chef;
