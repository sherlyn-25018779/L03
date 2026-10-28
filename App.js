import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component {
  render() {
    return (
        <ScrollView>
          <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_colour={"red"} poster={require("./img/doctor-sleep.jpg")}/>
            <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_colour={"red"} poster={require("./img/midway.jpg")}/>
            <Movie title={"Colony"} year={2026} icon_name={"bacteria"} icon_colour={"grey"} poster={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErDGwdZ6JGZ1O96Q_CJ0oF1Lyxg7Te0bXTHGn0F4YHf0zfYu8wO-YeJc&s=10' }} />
        </ScrollView>
    )
  }
}


export default AllMovies;