import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login';

const SettingsScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`mt-auto mb-auto p-8`}>
        <Login/>
        <Stack.Navigator>
         <Stack.Screen
         name="loginScreen"
         component={Login}
         options={{
           headerShown: false,
         }}
         />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})