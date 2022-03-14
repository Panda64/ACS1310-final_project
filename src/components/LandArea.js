  import React, { useState } from 'react'
  import AnimatedCircularProgress from './AnimatedCircularProgress'

  const TOTAL_AREA = 148940000.0
  let current_area = 0
  let prev_country = ''
  let prev_selected = false
  
  function LandArea({ mapState, data }) {
    const [valueEnd, setValueEnd] = useState(0);

    function calculatePercentage() {
        prev_country = mapState.countryCode
        prev_selected = mapState.isSelected

        if (mapState.isSelected) {
            current_area += data.find(i=>i.cca2 === mapState.countryCode).area
        } else {  
            current_area -= data.find(i=>i.cca2 === mapState.countryCode).area
        }
    
        if (current_area > 0) {
            setValueEnd(current_area / TOTAL_AREA * 100)
        } else {
            setValueEnd(0)
        }
    }

    if (mapState.countryCode !== '' && (mapState.countryCode !== prev_country || mapState.isSelected !== prev_selected)) {
        calculatePercentage()
    }

    return (
    <div className="LandArea">
        <AnimatedCircularProgress valueEnd={valueEnd} post_text={"%"} decimal={1}/>
    </div>   
    )
  }
    
    export default LandArea