import React from 'react';
import style from '../Scss/Steps.module.scss';

const FirstStep = ({ HeroJSON }) => {
  const step = HeroJSON.step1;
  const { button, fields } = step;
  return (
    <section className={style.wrapper} id='step1'>
      <div className={style.step}>
        <p>
          <strong>Step 1</strong> of 3
        </p>
      </div>
    </section>
  );
};

export default FirstStep;
