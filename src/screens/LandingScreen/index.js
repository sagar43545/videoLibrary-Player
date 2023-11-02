//================================ React Native Imported Files ======================================//

import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

//================================ Local Imported Files ======================================//

import styles from './style';
import AppHeader from '../../components/AppHeader';
import SearchComponent from '../../components/SearchComponent';
import CandidateListing from '../../components/CandidateListing';
import {SELECT_SCREEN} from '../../constants/navigators';
import {CandidatesList, CandidatesListCopy} from '../../constants/AppData';

const LandingScreen = props => {
  const [searchInput, setSearchInput] = useState('');
  const [candidates, setCandidates] = useState(CandidatesList);
  const [candidatesCopy, setCandidatesCopy] = useState(CandidatesListCopy);

  const _renderCandidates = (item, index) => {
    return (
      <CandidateListing
        name={item?.name}
        party={item.party}
        fromSelect={true}
        isSelected={item.isSelected}
        onAddCandidate={() => onHandleAdd(item, index)}
      />
    );
  };

  const onHandleAdd = (i, v) => {
    if (i?.isSelected) {
      candidates[v].isSelected = !i?.isSelected;
      setCandidates(() => {
        return [...candidates];
      });
    } else {
      const selectedObjects = candidates?.filter(obj => obj?.isSelected);
      if (selectedObjects?.length >= 10) {
        alert('You can select up to 10 candidates');
      } else {
        candidates[v].isSelected = !i?.isSelected;
        setCandidates(() => {
          return [...candidates];
        });
      }
    }
  };

  const searchFilterFunction = text => {
    if (text) {
      const newData = candidates?.filter(function (item) {
        const itemData = item?.name
          ? item?.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setCandidates(newData);
      setSearchInput(text);
    } else {
      setCandidates(candidatesCopy);
      setSearchInput(text);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <AppHeader
          title={'Select up to 10 candidates'}
          rightText={'Next'}
          onRightIconTwoPress={() => {
            const selectedObjects = candidates?.filter(obj => obj?.isSelected);
            if (selectedObjects?.length > 0) {
              props.navigation.navigate(SELECT_SCREEN, {item: selectedObjects});
            } else {
              alert('Please select candidates first');
            }
          }}
        />
      </View>
      <View style={styles.header}>
        <SearchComponent
          placeholder={'Candidate name'}
          onChangeText={e => searchFilterFunction(e)}
          onCancel={() => console.log('Cancelled')}
          value={searchInput}
        />
      </View>
      <View style={styles.listView}>
        <FlatList
          data={candidates}
          extraData={candidates}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item, index}) => _renderCandidates(item, index)}
        />
      </View>
    </View>
  );
};

export default LandingScreen;
