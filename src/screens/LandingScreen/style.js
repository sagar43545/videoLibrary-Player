//================================ React Native Imported Files ======================================//

import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
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
  header: {
    height: hp(8),
    width: wp(90),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listView: {
    flex: 0.83,
  },
});

export default styles;
