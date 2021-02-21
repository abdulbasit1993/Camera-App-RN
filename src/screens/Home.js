import React from 'react';
import { View, Text, Button } from 'react-native';

function Home(props) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 24, marginBottom: 20, padding: 20, textAlign: 'center'}}>Welcome to Abdul Basit's Camera App!</Text>
            <Button onPress={() => props.navigation.navigate("Camera")} title="Open Camera" />

        </View>
    )
}

export default Home;