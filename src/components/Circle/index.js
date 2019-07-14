import React, { useState } from 'react';

import './index.scss'

const CIRCLE_SIZE_HALF = '40vh';
const RADIUS = 360;

const CircleItem = (props) => {
  const {
    deg,
    index,
  } = props;

  return (
    <div
      className="circle-item"
      style={{
        transform: `rotate(${deg * index}deg) translate(0, -${CIRCLE_SIZE_HALF}) rotate(-${deg * index}deg)`
      }}
    >{deg}</div>
  )
}

const Circle = (props) => {
  const [items, setItems] = useState([]);
  const [deg, setDegree] = useState(0);

  const handleAddItem = () => {
    const newItems = [...items, {}];
    setDegree((RADIUS / newItems.length) % RADIUS);
    setItems(newItems)
  }

  return (
    [<div className="circle-container">
      {
        items.map((item, index) => (<CircleItem deg={deg} index={index + 1} />))
      }
    </div>,
    <button onClick={handleAddItem}>Add item</button>,
    ]
  )
}

export default Circle;
