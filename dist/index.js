import React, { Component } from 'react';
import { View } from 'react-native';

class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { style } = this.props;

    return (
      <View style={style}>
        <Text>Modal para el DateTimePicker</Text>
      </View>
    );
  }
}

export default DateTimePicker;