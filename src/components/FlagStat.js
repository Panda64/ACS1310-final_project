import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from './AnimatedProgressProvider';
import ReactTextTransition, { presets } from "react-text-transition";
import './FlagStat.css'
  
function FlagStat ({ valueEnd, heading_text, country_flag}) {
    return (
        <div className="FlagStat">
            <h1 className="flag_heading">{heading_text}</h1>
            <p className="flag_emoji">
                <ReactTextTransition
                text={country_flag}
                springConfig={presets.stiff}
                style={{ margin: "0 4px" }}
                inline
                overflow
                />
            </p>

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