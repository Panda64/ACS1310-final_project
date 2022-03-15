import './Stats.css';
import country_data from '../country_data.json';
import gdp_data from '../country_gdp.json';
import LandArea from "./LandArea";
import TotalCountries from './TotalCountries';
import GDP from './GDP';

function Stats({ mapState }) {
  return (
    <div className="Stats">
      <LandArea mapState={mapState} country_data={country_data} />
      <TotalCountries mapState={mapState} />
      <GDP mapState={mapState} country_data={country_data} country_gdp={gdp_data} min_max={1} text={"💸 📈Highest GDP:"}/>
      <GDP mapState={mapState} country_data={country_data} country_gdp={gdp_data} min_max={0} text={"💸📉 Lowest GDP:"}/>
    </div>
  )
}
  
  export default Stats