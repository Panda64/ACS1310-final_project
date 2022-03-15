import {
    CircularProgressbar,
    buildStyles
  } 
from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import "react-circular-progressbar/dist/styles.css";

function AnimatedCircularProgress({valueEnd, width=200, pre_text='', post_text='', decimal=0, maxValue=100}) {
  return (
    <div className="AnimatedCircularProgress" style={{ width: width, height: width }}>
      <AnimatedProgressProvider
      valueStart={0}
      valueEnd={valueEnd}
      duration={1.4}
      easingFunction={easeQuadInOut}
      repeat={false}
      >
      {value => {
          // const roundedValue = Math.round(value);
          return (
          <CircularProgressbar
              value={value}
              maxValue={maxValue}
              text={`${pre_text}${value.toFixed(decimal)}${post_text}`}
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
  
export default AnimatedCircularProgress