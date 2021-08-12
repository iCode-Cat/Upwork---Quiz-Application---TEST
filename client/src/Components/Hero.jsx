import React from 'react';
import style from '../Scss/Hero.module.scss';
import Button from './Button';
import Logo from '../Images/logo.svg';
import HeroJSON from '../Json/Hero.json';
const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url('/background.jpg')` }}
      className={style.wrapper}
    >
      <div className={style.hero_container}>
        <div className={style.hero}>
          <h1 className={style.title}>{HeroJSON.title} </h1>
          <p
            dangerouslySetInnerHTML={{ __html: HeroJSON.sub_title }}
            className={style.description}
          />
          <Button text='Start Quiz' type='btnBlue' size='btnSm' />
        </div>
        <img src={Logo} alt='logo-company' className={style.logo} />
      </div>
    </section>
  );
};

export default Hero;
