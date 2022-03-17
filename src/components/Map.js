import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMerc } from "@react-jvectormap/world"

import styled from "@emotion/styled";
import './Map.css';

const { getName } = require("country-list");

class Map extends React.Component {
  // state = {
  //   countriesCodesArray: [],
  //   countriesNamesArray: [],
  //   data: {},
  //   title: "",
  //   titleSet: false,
  //   color: "#48aeef"
  // };

  // handleColorChange = color => {
  //   console.log(color.hex);
  //   this.setState({ color: color.hex });
  // };

  // handleChange = e => {
  //   this.setState({
  //     title: e.target.value
  //   });
  // };

  // handleFormSubmit = () => {
  //   this.setState({
  //     titleSet: true
  //   });
  // };

  // handleClick = (e, countryCode) => {
  //   const { countriesCodesArray } = this.state;
  //   // console.log(countryCode);
  //   if (countriesCodesArray.indexOf(countryCode) === -1) {
  //     this.setState(
  //       {
  //         countriesCodesArray: [...countriesCodesArray, countryCode]
  //       },
  //       () => this.getCountriesNamesList()
  //     );
  //   }
  // };

  handleRegion = (e, code, isSelected, selectedRegions) => {
    this.props.updateCountries(selectedRegions, code, isSelected, getName(code));
  }

  // getCountriesNamesList = () => {
  //   const { countriesCodesArray } = this.state;
  //   const list = countriesCodesArray.map(code => getName(code));
  //   this.setState(
  //     {
  //       countriesNamesArray: list
  //     },
  //     () => this.makeMapDataStructure()
  //   );
  // };

  // makeMapDataStructure = () => {
  //   const { countriesCodesArray } = this.state;
  //   let obj = {};
  //   //{CN: 5, MX: 5, TX: 5}
  //   countriesCodesArray.forEach(countryCode => (obj[countryCode] = 5));
  //   this.setState({
  //     data: obj
  //   });
  // };

  render() {
    // const { countriesNamesArray, data, color } = this.state;
    // console.log(data)
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
          // series={{
          //   regions: [
          //     {
          //       values: data, // this is the map data
          //       scale: ["#e4e4e4", color], // your color game's here
          //       normalizeFunction: "polynomial"
          //     }
          //   ]
          // }}
        />
        <Container>
          {/* {titleSet ? (
            <h3>{title}</h3>
          ) : (
            <div>
              <h4>Set your map's title:</h4>
              <form onSubmit={this.handleFormSubmit}>
                <input type="text" onChange={this.handleChange} />
              </form>
            </div>
          )}
          <ColorPickerContainer>
            <ColorPicker
              handleColorChange={this.handleColorChange}
              color={color}
            />
          </ColorPickerContainer> */}
          {/* <div>
            {countriesNamesArray.map((country, i) => (
              <div key={i}>{country}</div>
            ))}
          </div> */}
        </Container>
      </div>
    );
  }
}

export default Map;

const Container = styled.div`
  text-align: center;
  input {
    padding: 10px;
    border-radius: 5px;
    border-shadow: 0;
    border-style: solid;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;
// const ColorPickerContainer = styled.div`
//   position: absolute;
// `;