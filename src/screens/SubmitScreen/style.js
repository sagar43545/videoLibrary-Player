//================================ React Native Imported Files ======================================//

import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//================================ Local Imported Files ======================================//

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flex: 0.15,
  },
  upperTitleView: {
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  listView: {
    flex: 0.83,
  },
});

export default styles;
