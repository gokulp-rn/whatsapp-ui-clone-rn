import React, { useLayoutEffect } from 'react';
import { Text, View } from "react-native";

import HeaderBar from '../bars/HeaderBar';

const HomeScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => (
                <HeaderBar
                    title={"WhatsApp"}
                    rightIcons={[
                        { name: 'magnify' },
                        { name: 'dots-vertical' },
                    ]}
                />
            )
        })
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => navigation.navigate('Home1')}>Home Screen</Text>
        </View>
    )
};

export default HomeScreen;