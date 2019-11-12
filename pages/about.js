// src/Page2.js

import React from 'react';
import { View, Button, Text } from 'react-native';

const Page2 = ({navigation}) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
    <Button 
      title="Ir rateio"
      onPress={() => navigation.navigate('CriarRateio') }
    />
  </View>
);

Page2.navigationOptions = {
  title: 'About',
}


export default Page2;