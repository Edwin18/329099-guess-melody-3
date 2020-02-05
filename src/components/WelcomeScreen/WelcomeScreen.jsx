import React from 'react';
// eslint-disable-next-line react/prop-types
const WelcomeScreen = (props) => {
  return <React.Fragment>
    <section className="welcome">
      <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <button className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы.</li>
        <li>Можно допустить {
        // eslint-disable-next-line react/prop-types
          props.errorsCount} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  </React.Fragment>;
};

export default WelcomeScreen;