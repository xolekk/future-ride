import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data=[
    {
        id: "Standard-123",
        title: "Standard",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Premium-456",
        title: "Premium",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Luxury-789",
        title: "Luxury",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation =useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View style={tw`bg-purple-400`}>
            <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
        </View>

        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item:{id,title,multiplier,image}, item})=>(
            <TouchableOpacity
            onPress={()=> setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-purple-200"}`}>
                <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode:"contain",
                }}
                source={{uri: image}}
                />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>{travelTimeInformation?.duration?.text}</Text>
                </View>
                <Text style={tw`text-xl`}>

                {new Intl.NumberFormat('en-gb', {
                    style: 'currency',
                    currency: 'GBP'
                }).format(
                    (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier / 100)
                )}

                </Text>
            </TouchableOpacity>
        )}
        />

        <View style={tw`mt-auto border-t border-purple-200`}>
            <TouchableOpacity
            onPress={()=>console.log('chosen ' + selected?.title)}
             disabled={!selected}
              style={tw `bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard