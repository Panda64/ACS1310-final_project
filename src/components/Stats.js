import './Stats.css';
import data from '../country_data.json';
import LandArea from "./LandArea";

function Stats({ mapState }) {
    return (
    <div className="Stats">
      <LandArea mapState={mapState} data={data} />
    </div>
  )
}
  
  export default Stats