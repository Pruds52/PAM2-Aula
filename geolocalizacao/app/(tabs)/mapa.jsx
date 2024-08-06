import { useState, useEffect, useRef } from "react"
import { View, StyleSheet } from "react-native-web"
import MapView, { Maker } from 'react-native-maps'
import * as Location from 'expo-location'

export default function Mapa() {
    const { location, setLocation } = useState(null)
    const mapRef = useRef(null)

    async function requestLocationPermissions() {
        const { granted } = await Location.requestForegroundPermissionsAsync()
        if (granted) {
            const currentPosition = await Location.getCurrentPositionAsync()
            setLocation(currentPosition)
            console.log("Localização atual: ", currentPosition)
        }
    }

    useEffect(() => {
        requestLocationPermissions()
    }, [])

    return (
        <>
            <View></View>
        </>
    );
}