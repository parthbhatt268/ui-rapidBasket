import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import './carousel.css'

const items = [
  {
    icon: "face",
    copy: '01. Snacks'
  }, {
    icon: "pets",
    copy: '02. Meals'
  }, {
    icon: "stars",
    copy: '03. Sweets'
  }, {
    icon: "invert_colors",
    copy: '04. Dairy Products'
  }, {
    icon: "psychology",
    copy: '05. Ice Cream & Frozen Products'
  }, {
    icon: "brightness_7",
    copy: '06. Soft Drinks & Juice'
  }
];

const Card = (props) => {
  return (
    <li className="card">
      <span class="material-icons">{props.icon}</span>
      <p>{props.copy}</p>
    </li>
  )
}

const CarouselSet = () => {
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(items);

  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length);
  }, [carouselItems])

  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('')
  }

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  }

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  }

  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={() => setMoveClass('next')} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={() => setMoveClass('prev')} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
        {carouselItems.map((t, index) =>
          <Card key={t.copy + index} icon={t.icon} copy={t.copy} />
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fruit: state.fruit
  };
};

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(CarouselSet);

