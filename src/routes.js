import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Cases from './pages/Cases';
import Details from './pages/Details';

import HandseAnimationOne from './pages/HandsAnimation';
import HandsAnimationTwo from './pages/HandsAnimationTwo';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="HandsAnimationOne" component={HandseAnimationOne} />
        <AppStack.Screen name="HandsAnimationTwo" component={HandsAnimationTwo} />
       
        <AppStack.Screen name="Cases" component={Cases}/>
        <AppStack.Screen name="Details" component={Details} />
      </AppStack.Navigator>

    </NavigationContainer>
  )
}