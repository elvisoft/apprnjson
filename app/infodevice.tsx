import * as Device from 'expo-device';
import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function InfoDeviceScreen() {
    const [deviceData, setDeviceData] = useState({
        deviceBrand: "",
        designName: "",
        deviceName: "",
        manufacturer: "",
        modelId: "",
        modelName: "",
        osBuildId: "",
        osInternalBuildId: "",
        systemName: "",
        systemVersion: ""       
    });

    useEffect(() => {
       //console.log(DeviceInfo.getDeviceNameSync());
       //console.log(DeviceInfo.getSystemName());
        async function fetchDeviceInfo() {
            setDeviceData({
                deviceBrand: Device.brand??'Unknown Device',
                designName: Device.designName??'Unknown Design',
                deviceName: Device.deviceName??'Unknown Device Name',
                //deviceType: Device.deviceType??'Unknown Device Type',
                manufacturer: Device.manufacturer??'Unknown Manufacturer',
                modelId: Device.modelId??'Unknown Model ID',
                modelName: Device.modelName??'Unknown Model Name',
                osBuildId: Device.osBuildId??'Unknown OS Build ID',
                osInternalBuildId: Device.osInternalBuildId??'Unknown OS Internal Build ID',
                systemName: Device.osName??'Unknown OS Name',
                systemVersion: Device.osVersion??'Unknown OS Version',             
              
            });
        }
        fetchDeviceInfo();
    }, []);

    const handleAccept = () => {
        // Acción al presionar aceptar (puedes personalizarla)
        console.log("Datos aceptados:", deviceData);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            
             <Text>Device Brand:</Text>
             <TextInput
                style={styles.input}
                value={deviceData.deviceBrand}
                editable={false}
                placeholder="Device Brand"
            />
            <Text>Device Name:</Text>
            <TextInput
                style={styles.input}
                value={deviceData.deviceName}
                editable={false}
                placeholder="Device Name"
            />
            <Text>Design Name:</Text>
              <TextInput
                style={styles.input}
                value={deviceData.designName}
                editable={false}
                placeholder="Design Name"
            />
            <Text>System Name:</Text>
            <TextInput
                style={styles.input}
                value={deviceData.systemName}
                editable={false}
                placeholder="System Name"
            />
            <Text>System Version:</Text>
            <TextInput
                style={styles.input}
                value={deviceData.systemVersion}
                editable={false}
                placeholder="System Version"
            />
            <Text>Manufacturer:</Text>
            <TextInput
                style={styles.input}
                value={deviceData.manufacturer}
                editable={false}
                placeholder="Manufacturer"
            />
            <Text>Model Id:</Text>
            <TextInput
                style={styles.input}
                value={deviceData.modelId}
                editable={false}
                placeholder="Model ID"
            />
            <Text>OS BuildId:</Text>
            <TextInput
                style={styles.input}
                value={deviceData.osBuildId}
                editable={false}
                placeholder="osBuildId"
            />
            <Text>OS InternalBuild:</Text>
            <TextInput
                style={styles.input}
                value={deviceData.osInternalBuildId}
                editable={false}
                placeholder="osInternalBuildId"
            />
            <Text>Model Name:</Text>
            <TextInput
                style={styles.input}
                value={deviceData.modelName}
                editable={false}
                placeholder="Model name"
            />
            
            <View style={styles.buttonContainer}>
                <Button title="Aceptar" onPress={handleAccept} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#f2f2f2',
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
});