import './Stats.css';
import data from '../country_data.json';
import LandArea from "./LandArea";

function Stats(props) {
  var result = data.find(t=>t.cca2 ==='AW').area;
    return (
    <div className="Stats">
      <LandArea mapState={props.mapState} data={data} />
    </div>
  )
}
  
  export default Stats