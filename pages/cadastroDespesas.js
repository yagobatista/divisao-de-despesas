import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Select } from "react-native";
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
class CadastrarDespesa extends Component {
  state = {
    descricao: '',
    status: '',
    valor: '',
  };
  saveDespesa = ()=>{
    const {descricao, valor, status} = this.state;
    this.props.navigation.navigate("Despesas", {
      newDespesa: {
        descricao,
        valor,
        status
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={this.state.descricao}
          onChangeText={text => this.setState({ descricao: text })}
        ></TextInput>
        {/* <Text style={styles.content}>Data</Text>
        <Piker selectedItems={this.data}></Piker> */}
        <Text style={styles.content}>Valor</Text>
        <TextInput
          value={this.state.valor}
          onChangeText={text => this.setState({ valor: text })}
        ></TextInput>
        <Text style={styles.content}>Status</Text>
        <TextInput
          value={this.state.status}
          onChangeText={text => this.setState({ status: text })}
        ></TextInput>
        <View style={styles.content}>
          <Button title="Salvar" onPress={this.saveDespesa} />
        </View>
      </View>
    );
  }
}

CadastrarDespesa.navigationOptions = {
  title: "Cadastrar Despesa"
};

export default CadastrarDespesa;