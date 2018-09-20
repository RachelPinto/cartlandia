import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

export default class TruckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  fetchTruckList() {
    fetch('http://data.streetfoodapp.com/1.1/regions')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          city: responseJson[city]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchTruckList();
  }

  render() {
    return (
      <View>
        <Text>{this.state.city}</Text>
      </View>
    )
  }
};
