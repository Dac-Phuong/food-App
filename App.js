import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,KeyboardAvoidingView, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from './navigation/Foodapp';
import Filter from './project/HomeScreen/bottomTabs/filter';

const Tab = createBottomTabNavigator();
export default function App() {
  return <MainNavigator></MainNavigator>
  // <Filter/>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
