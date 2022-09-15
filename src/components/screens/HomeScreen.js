import React, { useLayoutEffect } from 'react';

import HeaderBar from '../bars/HeaderBar';
import HomeTabs from '../navigation/HomeTabs';

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
        <HomeTabs />
    )
};

export default HomeScreen;