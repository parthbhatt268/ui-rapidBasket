import React from 'react'

const AboutPerformance = () => {
  return (
    <div>
      <div class="row1-container">
        <div class="box box-down cyan">
          <h2>3 Millions+ Downloads</h2>
          {/* <p>
            Downloads on iOS AppStore and Android PlayStore.</p> */}
          <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
        </div>

        <div class="box red">
          <h2>1000+ Home Delivery per Hours</h2>
          <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
        </div>

        <div class="box box-down blue">
          <h2>9000+ Hotels have paterend</h2>
          <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
        </div>
      </div>
      <div class="row2-container">
        <div class="box orange">
          <h2>1600000+ Meals Delivered </h2>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutPerformance