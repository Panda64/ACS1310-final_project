import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMerc } from "@react-jvectormap/world"

import './Map.css';

const { getName } = require("country-list");

class Map extends React.Component {
  
  handleRegion = (e, code, isSelected, selectedRegions) => {
    this.props.updateCountries(selectedRegions, code, isSelected, getName(code));
  }

  render() {
    return (
      <div>
        <VectorMap
          map={ worldMerc }
          backgroundColor="transparent"
          zoomOnScroll={true}
          style={{
            width: "100%",
            height: "400px",
            fill: "#e4e4e4"
          }}
          onRegionSelected={this.handleRegion}
          className="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
            selected: {
              fill: "#00A300" // color for the clicked country
            },
            selectedHover: {}
          }}
          regionsSelectable={true}
        />
      </div>
    );
  }
}

export default Map;