import React, { Component } from "react";
import { Platform, Picker, StyleSheet, Text, View, Button, Select } from "react-native";
import MultiSelect from "react-native-multiple-select";

import { PermissionsAndroid } from "react-native";
import Contacts from "react-native-contacts";
import { TextInput } from "react-native-gesture-handler";
const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  content: {
    flex: 1,
    padding: "15px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderBottomColor: "#CCC"
  }
});
class CriarRateio extends Component {
  state = {
    participantes: [],
    name: '',
  };

  componentDidMount(){
       this.setState({
      items: [
        { name: "taiane", id: 1 },
        { name: "alexandre", id: 2 },
        { name: "gustavo", id: 3 },
        { name: "bernardo", id: 4 }
      ]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>Nome para a divisão</Text>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
        ></TextInput>
        <Text style={styles.content}>Participantes</Text>
        <Participantes selectedItems={this.state.participantes}></Participantes>
        <View style={styles.content}>
          <Button title="Salvar" />
        </View>
      </View>
    );
  }
}

CriarRateio.navigationOptions = {
  title: "Criar Rateio"
};

export default CriarRateio;

class Participantes extends Component {
  state = {
    selectedItems: [],
    items: []
  };

  onSelectedItemsChange(selectedItems) {
    this.setState({ selectedItems });
  }

  render() {
    const { selectedItems, items } = this.state;
    return (
      <View>
        <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
        <View>
          {this.multiSelect &&
            this.multiSelect.getSelectedItemsExt(selectedItems)}
        </View>
      </View>
    );
  }
}
