import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.teal_green,
    elevation: 0
  }
})

const HeaderBar = ({ title, rightIcons = [] }) => (
  <Appbar.Header style={styles.container}>
    <Appbar.Content title={title} />
    {rightIcons.map((rightIcon) => (
      <Appbar.Action icon={rightIcon?.name} onPress={rightIcon?.onPress} />
    ))}
  </Appbar.Header>
);

export default HeaderBar;