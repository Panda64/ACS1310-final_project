import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from './AnimatedProgressProvider';
  
function FlagStat ({ valueEnd, heading_text, country_flag}) {
    return (
        <div className="FlatStat">
            <h1>{heading_text}</h1>
            <p>{country_flag}</p>

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
                    <p>{roundedValue.toLocaleString('en')}</p>
                )
            }}
            </AnimatedProgressProvider>
            
        </div>   
    )
}

export default FlagStat