//================================ React Native Imported Files ======================================//

import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//================================ Local Imported Files ======================================//

import colors from '../assets/colors/colors';

const SearchComponent = props => {
  return (
    <View style={[styles.mainContainer, props.customContainerStyle]}>
      <Image
        source={require('../assets/images/search.png')}
        style={{height: hp(2), width: hp(2), tintColor: colors.black}}
      />
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={colors.unFocusColor}
        style={styles.inputStyle}
        onChangeText={txt => props.onChangeText(txt)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(6),
    width: wp(90),
    borderRadius: wp(4),
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    borderColor: colors.placeholderColor,
  },
  inputStyle: {
    width: '100%',
    height: '100%',
    paddingHorizontal: wp(2),
    fontSize: wp(4),
  },
});

export default SearchComponent;
