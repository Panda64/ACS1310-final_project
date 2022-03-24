# Travel Tracker

Ever wanted to track all of the places you've ever travelled to? My travel tracker will do just that! To get started, simply enter your name and then click on each country you have visited. You will then see various stats about the places you have been! To save your travel profile, click on the "Save as PNG" button at the bottom of the page (make sure your browser window is maximized first).

![first_image](/public/screenshot1.png)
![second_image](/public/screenshot2.png)

## Current Functionality

- Users can enter their name to create their custom travel tracker
- Users can navigate around a world map to select the countries they have been to
- Various stats will display about the visited countries
- Users can save their travel profile as a PNG

## Future Functionality

- More statistics
- Seperate USA map for a USA specific travel profile
- Use web scraping and/or API's to get realtime country data

## Libraries/Resources Used

- [React](https://reactjs.org/)
- [jvectormap](https://github.com/kadoshms/react-jvectormap) - Used to make the interactive map
- [react-circular-progressbar](https://github.com/kevinsqi/react-circular-progressbar) - Used to make the statistical progress bars
- [Country GDP's](https://worldpopulationreview.com/countries/countries-by-gdp) - Source for GDP data on each country
- [General Country Data](https://raw.githubusercontent.com/mledoze/countries/master/countries.json) - Source for country flag and land area data
- [Country Population](https://github.com/samayo/country-json/blob/master/src/country-by-population.json) - Source for country population data

## Usage

My travel tracker is currently live [here](https://jayjay.me/travel_tracker/).

**NOTE:** Due to naming conventions, there is a chance that clicking on some countires will result in the page crashing. I am currently working to elimate all instances of this, but if you run into this issue, feel free to open an issue and I will get it fixed promptly!
