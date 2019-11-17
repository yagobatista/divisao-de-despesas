import React from 'react';
import { View, Button, Text } from 'react-native';
import {
  TextInput
} from "react-native-gesture-handler";

const Page1 = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button 
      title="Despesas"
      onPress={() => navigation.navigate('Despesas') }
    />
    <Text>dsadasdasdsa</Text>
           <TextInput
          value={10}
        ></TextInput>
    <Button 
      title="Cadastrar rateio"
      onPress = {
        () => navigation.navigate('CriarRateio')
      }
    />
  </View>
);

Page1.navigationOptions = {
  title: 'Home',
}

export default Page1;