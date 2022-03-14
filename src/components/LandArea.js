import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import React, { useState } from 'react'
  import { easeQuadInOut } from "d3-ease";
  import AnimatedProgressProvider from "./AnimatedProgressProvider";
  import "react-circular-progressbar/dist/styles.css";

  const TOTAL_AREA = 148940000.0
  let current_area = 0
  let prev_country = ''
  let prev_selected = false
  
  function LandArea(props) {
    const [valueEnd, setValueEnd] = useState(0);
    console.log(props.mapState)

    function calculatePercentage() {
        prev_country = props.mapState.countryCode
        prev_selected = props.mapState.isSelected

        if (props.mapState.isSelected) {
            current_area += props.data.find(i=>i.cca2 === props.mapState.countryCode).area
        } else {  
            current_area -= props.data.find(i=>i.cca2 === props.mapState.countryCode).area
        }

        console.log(current_area)
    
        if (current_area > 0) {
            setValueEnd(current_area / TOTAL_AREA * 100)
        } else {
            setValueEnd(0)
        }
    }

    if (props.mapState.countryCode !== '' && (props.mapState.countryCode !== prev_country || props.mapState.isSelected !== prev_selected)) {
        calculatePercentage()
    }

    return (
    <div className="LandArea" style={{ width: 200, height: 200 }}>
        <AnimatedProgressProvider
        valueStart={0}
        valueEnd={valueEnd}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat={false}
        >
        {value => {
            const roundedValue = Math.round(value);
            return (
            <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                styles={buildStyles({ 
                pathTransition: "none", 
                })}
            />
            );
        }}
        </AnimatedProgressProvider>
    </div>   
    )
  }
    
    export default LandArea