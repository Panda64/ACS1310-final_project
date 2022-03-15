import React, { useState } from 'react'
import AnimatedCircularProgress from './AnimatedCircularProgress'

let current_total = 0
let prev_country = ''
let prev_selected = false

function TotalCountries({ mapState}) {
    const [valueEnd, setValueEnd] = useState(0);

    function calculateTotal() {
        prev_country = mapState.countryCode
        prev_selected = mapState.isSelected

        if (mapState.isSelected) {
            current_total += 1
        } else {  
            current_total -= 1
        }

        setValueEnd(current_total)
    }

    if (mapState.countryCode !== '' && (mapState.countryCode !== prev_country || mapState.isSelected !== prev_selected)) {
        calculateTotal()
    }

    return (
        <div className="TotalCountries">
            <AnimatedCircularProgress valueEnd={valueEnd} post_text={`/195`}/>
        </div>   
    )
}

export default TotalCountries