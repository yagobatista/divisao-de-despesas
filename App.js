import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Page1 from './pages/home';
import Page2 from './pages/about';
import CriarRateioScreen from './pages/criar-rateio'
import CriarDespesaScreen from './pages/cadastroDespesas'
import DespesasScreen from './pages/despesas'

const AppContainer = createAppContainer(
  createStackNavigator({
    Home: Page1,
    About: Page2,
    CriarRateio: CriarRateioScreen,
    CriarDespesa: CriarDespesaScreen,
    Despesas: DespesasScreen,
  })
);
export default class App extends Component {

  render(){
    return (
        <AppContainer/>
    );
  }
}

