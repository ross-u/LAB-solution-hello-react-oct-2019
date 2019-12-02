import React from 'react';

// We use the function component, however we could do the same with the class component

function Card(props) {
  /*  The props passed from App.js are available in the component

    <Card cardImage={icon1} cardTitle="Some Text String" />      */

  return (
    // props = { cardImage, cardTitle }

    <div className="card">
      {/*  Reference the value from the props object */}
      <img src={props.cardImage} alt="" />
      <h4 className="card-title">{props.cardTitle}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}

export default Card;
