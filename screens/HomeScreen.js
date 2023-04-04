import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOption from '../components/NavOption';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
const HomeScreen = () => {
    const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Text>*Placeholder for image*</Text>
        <GooglePlacesAutocomplete
        placeholder='Where From?'
        styles={{
            container:{
                flex: 0,
            },
            textInput:{
                fontSize: 18,
            }
        }}
        onPress={(data,details = null) => {
            dispatch( setOrigin({
                location: details.geometry.location,
                description: data.description,
                })
            );
            dispatch(setDestination(null));
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
        }}

        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        />
        
        <NavOption/>
        <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "blue",
    }
})