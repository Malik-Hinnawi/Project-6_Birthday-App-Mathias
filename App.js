import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import TaylorSwiftScreen from './src/screens/TaylorSwiftScreen';
import TroyeSivanScreen from './src/screens/TroyeSivanScreen';
import LanaDelRayScreen from './src/screens/LanaDelRayScreen';
import LilNasXScreen from './src/screens/LilNasXScreen';
const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaylorSwift" component={TaylorSwiftScreen}/>
        <Stack.Screen name="TroyeSivan" component={TroyeSivanScreen}/>
        <Stack.Screen name="LanaDelRay" component={LanaDelRayScreen} />
        <Stack.Screen name="LilNasX" component={LilNasXScreen} />
      </Stack.Navigator>
    );
  }

export default function App() {
return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
);
}