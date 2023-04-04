import { KeyboardAvoidingView, Platform} from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView 
            behavior={Platform.OS === "ios"?"padding":"height"}
            style={{flex:1}}
            keyboardVerticalOffset={Platform.OS ==="ios"?-64:0}
            > 
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false,
              }}/>
              <Stack.Screen name="MapScreen" component={MapScreen} options={{
                headerShown: false,
              }}/>
              <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{
                headerShown: false,
              }}/>
            </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
  );
}


