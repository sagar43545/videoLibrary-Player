//================================ React Native Imported Files ======================================//

import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

//================================ Local Imported Files ======================================//

import styles from './style';
import AppHeader from '../../components/AppHeader';
import CandidateListing from '../../components/CandidateListing';
const SubmitScreen = props => {
  const [selected, setSelected] = useState(props?.route?.params?.item);
  const _renderCandidates = ({item, drag, isActive}) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity onLongPress={drag} disabled={isActive}>
          <CandidateListing
            name={item?.name}
            party={item.party}
            fromSelect={false}
            isSelected={item.isSelected}
            onAddCandidate={() => onHandleAdd(item)}
          />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  const onHandleAdd = i => {};

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <AppHeader
          title={'Selected Candidates'}
          leftIconPath={require('../../assets/images/back.png')}
          onLeftIconPress={() => props.navigation.goBack()}
          rightText={'Vote'}
          onRightIconTwoPress={() => alert('Voted')}
        />
      </View>
      <View style={styles.upperTitleView}>
        <Text style={styles.textStyle}>
          Slide candidates in order of preference
        </Text>
      </View>
      <View style={styles.listView}>
        <DraggableFlatList
          data={selected}
          extraData={selected}
          keyExtractor={(item, index) => index}
          onDragEnd={({data}) => setSelected(data)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={_renderCandidates}
        />
      </View>
    </View>
  );
};

export default SubmitScreen;
