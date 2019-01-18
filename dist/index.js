import React, { Component } from 'react';
import { View,Text } from 'react-native';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';

class DateTimePickerWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime : null,
      selectedDate: new Date()
    };
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  setDate = (dateTime) => this.setState({ dateTime })

  render() {
    const { style } = this.props;

    return (
      <View style={{width : "100%", height : "100%", position : "fixed", backgroundColor : "red"}}>
        <Text>Modal para el DateTimePicker</Text>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker value={selectedDate} onChange={this.handleDateChange} />
          <TimePicker value={selectedDate} onChange={this.handleDateChange} />
          <DateTimePicker value={selectedDate} onChange={this.handleDateChange} />
        </MuiPickersUtilsProvider>
      </View>
    );
  }
}

export default DateTimePickerWeb;