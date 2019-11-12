import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Select } from "react-native";
import MultiSelect from "react-native-multiple-select";

import { PermissionsAndroid } from "react-native";
import Contacts from "react-native-contacts";
import { TextInput } from "react-native-gesture-handler";

class Despesas extends Component {
  despesas = [];

  render() {
    const { navigation } = this.props;
    const newItem = navigation.getParam("newDespesa", false);
    let total = 0;

    if (newItem) {
      this.despesas.push(newItem);
    }
    if (this.despesas.length) {
      this.despesas.forEach(({ valor }) => total += Number.parseFloat(valor));
    }
    return (
      <View>
        <Button
          title="Cadastrar Despesa"
          onPress={() =>
            navigation.navigate("CriarDespesa")
          }
        />
        <View>
          {this.despesas
            ? this.despesas.map(({ valor, descricao, status }) => (
                <Text>{`${descricao} - ${valor} - ${status}`}</Text>
              ))
            : "Sem despesas cadastradas"}
        </View>
        <View>
          <Text>Valor total das despesas: {total/2}</Text>
        </View>
      </View>
    );
  }
}

Despesas.navigationOptions = {
  title: "Despesas"
};

export default Despesas;
