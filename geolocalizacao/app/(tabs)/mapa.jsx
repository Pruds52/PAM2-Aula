import { useState, useEffect, useRef } from "react"
import { View, StyleSheet } from "react-native-web"
import MapView, { Marker } from 'react-native-maps'
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

    useEffect(() => {
        Location.watchPositionAsync({
            accuracy: Location.Accuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            console.log("Nova localização: ", response);
            setLocation(response);
            if (mapRef.current) {
                mapRef.current.animateCamera({
                    pitch: 70,
                    center: response.coords
                })
            }
        })
    }, [])

    return (
        <View style={styles.contain}>

        </View>
    );
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: '100%',
    }
});