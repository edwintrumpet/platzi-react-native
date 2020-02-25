import React from 'react';
import {View, Image, SafeAreaView, StyleSheet} from 'react-native';

const Header = ({children}) => (
  <View>
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <View>{children}</View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
