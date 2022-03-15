import './Stats.css';
import country_data from '../country_data.json';
import gdp_data from '../country_gdp.json';
import pop_data from '../country_pop.json';
import LandArea from "./LandArea";
import TotalCountries from './TotalCountries';
import MinMax from './MinMax';

function Stats({ mapState }) {
  return (
    <div className="Stats">
      <LandArea mapState={mapState} country_data={country_data} />
      <TotalCountries mapState={mapState} />
      <MinMax mapState={mapState} country_data={country_data} country_comp={gdp_data} comp_index={"unGDP"} min_max={1} text={"💸 📈Highest GDP:"}/>
      <MinMax mapState={mapState} country_data={country_data} country_comp={gdp_data} comp_index={"unGDP"} min_max={0} text={"💸📉 Lowest GDP:"}/>
      <MinMax mapState={mapState} country_data={country_data} country_comp={pop_data} comp_index={"population"} min_max={1} text={"🌆 Highest Population:"}/>
      <MinMax mapState={mapState} country_data={country_data} country_comp={pop_data} comp_index={"population"} min_max={0} text={"🏕 Lowest Population:"}/>
      
    </div>
  )
}
  
  export default Stats