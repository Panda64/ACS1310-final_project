// This component could use some cleaning up... Should get rid of all the [min_max] indexing
// More time effecient solution could be written for determining min and max GDP's

import { useState } from 'react'
import FlagStat from "./FlagStat";

let target_gdp = [[null, null], [null, null]]
let gdp_array = [[], []]
let flag_array = [[], []]
let prev_countries = ['', '']
let prev_selected = [false, false]

function GDP({ mapState, country_data, country_gdp, text, min_max }) {
    const [targetCountry, setTargetCountry] = useState([0, '']);

    function calculateTargetGDP() {
        let index
        prev_countries[min_max] = mapState.countryCode
        prev_selected[min_max] = mapState.isSelected

        let gdp = country_gdp.find(i=>i.country === mapState.countryName).unGDP

        if (!mapState.isSelected) {
            index = gdp_array[min_max].indexOf(gdp)
            gdp_array[min_max] = gdp_array[min_max].filter(function(e) { return e !== gdp })
            flag_array[min_max].splice(index, 1)

            if (gdp_array[min_max].length === 0) {
                target_gdp[min_max] = [null, null]
                setTargetCountry([0, ''])
                return
            }

            if (gdp === target_gdp[min_max][0]) {
                let new_target_gdp

                if (min_max === 1) {
                    new_target_gdp = Math.max(...gdp_array[min_max])
                } else {
                    new_target_gdp = Math.min(...gdp_array[min_max])
                }

                index = gdp_array[min_max].indexOf(new_target_gdp)
                target_gdp[min_max] = [new_target_gdp, flag_array[min_max][index]]
                setTargetCountry(target_gdp[min_max])
            }

            return
        }

        let flag = country_data.find(i=>i.cca2 === mapState.countryCode).flag
        gdp_array[min_max].push(gdp)
        flag_array[min_max].push(flag)

        if (min_max === 1) {
            if (gdp > target_gdp[min_max][0] || !target_gdp[min_max][0]) {
                target_gdp[min_max] = [gdp, flag]
                setTargetCountry(target_gdp[min_max])
            }
        } else {
            if (gdp < target_gdp[min_max][0] || !target_gdp[min_max][0]) {
                target_gdp[min_max] = [gdp, flag]
                setTargetCountry(target_gdp[min_max])
            }
        }
    }


    if (mapState.countryCode !== '' && (mapState.countryCode !== prev_countries[min_max] || mapState.isSelected !== prev_selected[min_max])) {
        calculateTargetGDP()
    }

    return (
        <div className="GDP">
            <FlagStat
                valueEnd={targetCountry[0]}
                country_flag={targetCountry[1]}
                heading_text={text}
            />
        </div>
    )
}
  
  export default GDP