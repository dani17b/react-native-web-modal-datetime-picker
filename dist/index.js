import React, { Component } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';

class DateTimePickerWeb extends Component {
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

export default DateTimePickerWeb;