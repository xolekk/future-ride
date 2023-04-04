import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { Icon } from '@rneui/base';

const Login = () => {

  return (
    <SafeAreaView>
      <TouchableOpacity style={tw`flex-row bg-purple-200 justify-center items-center py-2 mt-auto`}
      >
        <Icon
        name="login"
        />
        <Text> Log in </Text>
      </TouchableOpacity>  
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})