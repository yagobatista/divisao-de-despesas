import React from 'react';
import { View, Button, Text } from 'react-native';

const Page1 = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button 
      title="Despesas"
      onPress={() => navigation.navigate('Despesas') }
    />
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