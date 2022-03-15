// More time effecient solution could be written for determining min and max targets

import { useState, useRef } from 'react'
import FlagStat from "./FlagStat";


function MinMax({ mapState, country_data, country_comp, text, min_max, comp_index }) {

    let target_gdp = useRef([null, null])
    let comp_array = useRef([])
    let flag_array = useRef([])
    let prev_country = useRef('')
    let prev_selected = useRef(false)

    const [targetCountry, setTargetCountry] = useState([0, '']);

    function calculateTarget() {
        let index
        prev_country.current = mapState.countryCode
        prev_selected.current = mapState.isSelected

        let value = country_comp.find(i=>i.country === mapState.countryName)[comp_index]

        if (!mapState.isSelected) {
            index = comp_array.current.indexOf(value)
            comp_array.current = comp_array.current.filter(function(e) { return e !== value })
            flag_array.current.splice(index, 1)

            if (comp_array.current.length === 0) {
                target_gdp.current = [null, null]
                setTargetCountry([0, ''])
                return
            }

            if (value === target_gdp.current[0]) {
                let new_target_gdp

                if (min_max === 1) {
                    new_target_gdp = Math.max(...comp_array.current)
                } else {
                    new_target_gdp = Math.min(...comp_array.current)
                }

                index = comp_array.current.indexOf(new_target_gdp)
                target_gdp.current = [new_target_gdp, flag_array.current[index]]
                setTargetCountry(target_gdp.current)
            }

            return
        }

        let flag = country_data.find(i=>i.cca2 === mapState.countryCode).flag
        comp_array.current.push(value)
        flag_array.current.push(flag)

        if (min_max === 1) {
            if (value > target_gdp.current[0] || !target_gdp.current[0]) {
                target_gdp.current = [value, flag]
                setTargetCountry(target_gdp.current)
            }
        } else {
            if (value < target_gdp.current[0] || !target_gdp.current[0]) {
                target_gdp.current = [value, flag]
                setTargetCountry(target_gdp.current)
            }
        }
    }


    if (mapState.countryCode !== '' && (mapState.countryCode !== prev_country.current || mapState.isSelected !== prev_selected.current)) {
        calculateTarget()
    }

    return (
        <div className="MinMax">
            <FlagStat
                valueEnd={targetCountry[0]}
                country_flag={targetCountry[1]}
                heading_text={text}
            />
        </div>
    )
}
  
  export default MinMax