import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '~/pages/Home';
import Detalhe from '~/pages/Detalhe';
import Carrinho from '~/pages/Carrinho';

import { colors } from './styles';

const MainStack = createStackNavigator(
  {
    Home,
    Detalhe,
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} solid />,
    },
  },
);

const CartStack = createStackNavigator(
  {
    Carrinho,
  },
  {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="shopping-cart" size={24} color={tintColor} solid />
      ),
    },
  },
);

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Main: MainStack,
      Cart: CartStack,
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.light,
        style: {
          backgroundColor: colors.white,
        },
      },
    },
  ),
);

export default Routes;
