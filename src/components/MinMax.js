// TODO: More time effecient solution could be written for determining min and max targets

import { useState, useRef } from 'react'
import FlagStat from "./FlagStat";


function MinMax({ mapState, country_data, country_comp, text, min_max, comp_index }) {

    let target_array = useRef([null, null, null])
    let comp_array = useRef([])
    let name_array = useRef([])
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
            name_array.current.splice(index, 1)

            if (comp_array.current.length === 0) {
                target_array.current = [null, null, null]
                setTargetCountry([0, '', ''])
                return
            }

            if (value === target_array.current[0]) {
                let new_target_value

                if (min_max === 1) {
                    new_target_value = Math.max(...comp_array.current)
                } else {
                    new_target_value = Math.min(...comp_array.current)
                }

                index = comp_array.current.indexOf(new_target_value)
                target_array.current = [new_target_value, flag_array.current[index], name_array.current[index]]
                setTargetCountry(target_array.current)
            }

            return
        }

        let flag = country_data.find(i=>i.cca2 === mapState.countryCode).flag
        comp_array.current.push(value)
        flag_array.current.push(flag)
        name_array.current.push(mapState.countryName)

        if (min_max === 1) {
            if (value > target_array.current[0] || !target_array.current[0]) {
                target_array.current = [value, flag, mapState.countryName]
                setTargetCountry(target_array.current)
            }
        } else {
            if (value < target_array.current[0] || !target_array.current[0]) {
                target_array.current = [value, flag, mapState.countryName]
                setTargetCountry(target_array.current)
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
                country_name={targetCountry[2]}
                heading_text={text}
            />
        </div>
    )
}
  
  export default MinMax