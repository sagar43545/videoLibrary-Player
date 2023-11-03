import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import {useFocusEffect} from '@react-navigation/native';
import HeaderComponent from '../Utils/HeaderComponent';
import YoutubePlayer from "react-native-youtube-iframe";

const HomeScreen = props => {

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      console.log('video has finished playing!');
    }
  }, []);

  useFocusEffect(() => {
    Orientation.lockToPortrait();
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerStyleView}>
          <HeaderComponent
            onPressAvatar={() => props.navigation.navigate('Users')}
            onPressNotification={() =>
              props.navigation.navigate('Notifications')
            }
          />
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.contentContainer}>
            <Image
              source={require('../../assets/infoUp.jpeg')}
              style={styles.wallWripple}
              resizeMode="center"
            />
            <Text style={styles.growingContent}>
              Robert F. Kennedy, Jr. sees the situation at the border primarily as a humanitarian crisis. It is a crisis that has spread far beyond the border, as a flood of migrants has overwhelmed the resources of cities as far away as New York. The suffering of the migrants at the hands of drug cartels, human traffickers, and exploitative employers is heartbreaking.{"\n\n"}

              As President, Kennedy is going to end the humanitarian crisis, starting with its most immediate cause — an uncontrolled border. As he seals the border to illegal immigration, his administration will enact deeper reforms to stem illegal migration in the long term, while expanding lawful, orderly immigration according to principles of justice and fairness.{"\n\n"}

              We must recognize that the foremost victims of a porous, chaotic border are the immigrants themselves. Compassion and decency demand that we do not allow the current situation to continue.{"\n\n"}

              Overview{"\n\n"}

              Ruthless criminal cartels have woven drugs, immigration, and human trafficking together into a multi-billion dollar business.{"\n\n"}
              Biden administration policy has greatly exacerbated the situation. The border is out of control. Immigration is being administered by the cartels, not our government.{"\n\n"}
              Just as a cell has a membrane, a country must have borders or it will disintegrate.{"\n\n"}
              Our policy will be first, to get the border under control. Second, to work with other countries to stem the tide of migrants. Third, to fully fund and prioritize the administrative infrastructure for lawful, orderly immigration to this country.{"\n\n"}
              A humanitarian, economic, and public security nightmare{"\n\n"}

              The criminal cartels that now control immigration across the Mexican border exact a high price. Migrants are routinely robbed, raped, kidnapped, and sex trafficked. These horrors are happening systemically and at scale. The whereabouts of some 85,000 children who have been separated from their parents are unknown. In May, a “stash house” with 135 kidnapped migrants was liberated just across the border in San Luis. For everyone that is discovered, many more operate undetected. Our unregulated border is not compassionate. It is an open opportunity for the worst kinds of organized crime.{"\n\n"}

              The Mexican cartels controlling immigration are as ruthless in this business as they are in the drug business. Gang violence all along the border has spiked as the cartels vie for turf through assassination and torture. The Mexican state of Sonora recorded 1765 murders in 2022, and many unsolved disappearances. The Mexican government’s official tally of disappearances now approaches 100,000.{"\n\n"}

              This civil disorder is encroaching into the US, as destitute migrants flood American cities, sleeping on sidewalks and overwhelming humanitarian resources. Here too they are easy prey for criminals.{"\n\n"}

              Fentanyl and methamphetamine are flooding into the country across the border along with the migrants. That is part of the cartels' integrated business model.{"\n\n"}

              Because migrants have no documentation, they have no bargaining power or recourse when employers take advantage of them. They work for $5 or $6 an hour. They exist as the permanent bottom layer of a shadow economy from which it is almost impossible to escape. A pool of cheap, exploitable labor lowers the floor for all labor, putting downward pressure on wages and harming the American working class.{"\n\n"}

              As a young man, RFK Jr. had the honor to work with Cesar Chavez. He understood that farm laborers’ conditions would never improve when endless new busloads of undocumented immigrants were available to replace any workers who tried to bargain for better working conditions. He was no xenophobe. Immigration is good for this country. It is unlawful, disorderly illegal immigration that harms migrants and undercuts American workers.{"\n\n"}

              In the long term, perhaps the most pernicious effect of the current border chaos is that a criminal infrastructure of well-financed, institutionalized cartels is taking hold, corrupting government officials and insinuating itself into society. Just as Prohibition was a tremendous boon to organized crime, birthing the American mafia of legend, so also does the border situation provide a financial foundation for criminal organizations that could persist of decades.{"\n\n"}

              Tough and Humanitarian Policy{"\n\n"}

              The first step toward fixing this situation is to reassert control over our border.  Today there is no control, no effective policy and, as a result, there is a humanitarian, security, and economic disaster.{"\n\n"}

              There are two ways people enter this country illegally. One way is by sneaking in. The other is by simply walking across at an entry point, claiming asylum, and disappearing. We have to address both. If we only shut down the asylum route, they will sneak across instead. If we only seal the border, they will overwhelm asylum processing resources. We must end both simultaneously. To accomplish this, the Kennedy administration will pursue the following policies.{"\n\n"}

              Tighten border security to regain control over the border. We will use technology that was installed at the border then dismantled by the Biden administration, such as cameras, lights, and motion detectors, coupled with physical barriers in key areas (there is no need to build a wall across the entire 2,000-mile border). We have the technology to prevent people from getting through undetected. We can control the border. We have the technology. We can deploy the personnel. All we need is the will.{"\n\n"}

              Get on top of asylum claims. We have to fully fund courts, services, and border agencies to allow lawful immigration in accordance with U.S. law and deny non-compliant access, and appoint more judges to handle asylum cases. There are woefully few asylum judges to process even the legitimate claims of political refugees. If claimants of political asylum knew their case would be heard swiftly, and that specious claims would be met with swift deportation, the cartels’ business model would fail.{"\n\n"}
              There are 1.6 million immigrants living in the US while they await their asylum hearing. Fewer than 15% will be approved. We need to appoint hundreds more judges to deal with this backlog, and to ensure that newly arriving immigrants get a hearing before being admitted to the U.S.{"\n\n"}

              This is a common-sense solution that can transcend partisan rancor. Democrats will support swift attention to asylum claims so that we meet our humanitarian obligations. Republicans will support an end to the flow of millions of unheard asylum claimants into the U.S. on their own recognizance.{"\n\n"}

              Migrants will know that their case will be heard at the border and they will not be let through unless it is approved. Deciding to spend a lifetime of savings and risk injury, rape, and death to make this journey is the biggest decisions of most migrants' lives. They do not make that kind of a decision in a vacuum. We must give them forewarning that we are hiring hundreds more judges and they can no longer expect to be let into the country due to judicial delays.{"\n\n"}

              We will work with the Mexican government to stem the flow of transit migration through Mexico. We have to cultivate a more positive relationship with Mexico and work closely with its people and government who desperately want to be free of the plague of cartel violence.{"\n\n"}

              Together, these three policies will end the business model of the cartels. When we also expand legal immigration, migrants will rationally choose the legal path instead of putting their families’ lives at the mercy of criminals.{"\n\n"}

              Long-term solutions{"\n\n"}

              Beyond the immediate border crisis is a long-term immigration crisis, the result of lack of leadership, poor planning, little to no diplomacy, economic exploitation, and an inability to reimagine a regionally cooperative approach. We can control the border, but immigration pressure will not abate until we change the conditions that make so many people desperate to flee their homelands. Sadly, the United States has contributed to those conditions. As President, RFK Jr. will change that by implementing a new kind of Good Neighbor policy, starting in this hemisphere.{"\n\n"}

              He will:{"\n\n"}

              End military adventurism that destabilizes other nations and generates millions of refugees. That’s what happened in Syria and Iraq, which sent millions of migrants into Europe. The current flood of arms into Ukraine sends ripples of instability across the continent. Some of the weapons have already ended up in Africa and central Asia, two major sources of immigration.{"\n\n"}
              Stop supporting despotic governments, juntas, coups, death squads, and repressive regimes that persecute and impoverish their own people. America will stop opposing governments that seek land reform, labor reform, and social welfare for their people. These create a desperate and miserable population prone to flee their homeland for a better life.{"\n\n"}
              Cooperate with Mexico and Central American countries to improve economies and provide economic incentives to help build jobs and develop much-needed infrastructure and a better standard of living, so people will be motivated to stay in their home country and enjoy their natural culture and heritage.{"\n\n"}
              Pursue a different trade and economic policy. Decades of neoliberal austerity measures will end. No longer will the US encourage financial institutions like the IMF and World Bank to demand that developing nations gut their social programs, privatize public assets, and strip away environmental and labor protections. We will reform the financial regime that holds countries in the global South subject to crushing debts that create poverty and send millions fleeing north.{"\n\n"}
              Politicians in the past have appealed to xenophobia and bigotry in calling for a tough border policy. RFK Jr.’s call for a tough border comes from a different place. It comes from compassion and humanitarian conscience. He calls upon all Americans, of every part and political persuasion to face facts. President Biden’s loose border policy has been a disaster. It serves no one: not the migrants, not the nations south of the border, and not our own country. We are in the midst of a humanitarian nightmare, an entirely unnecessary one of our own making. Conscience demands that we stem the tide of illegal immigration so that we can return to the orderly, lawful immigration that has brought so much dynamism to our country.{"\n\n"}
            </Text>
          </View>
          <View style={styles.youtubePlayer}>
            <Text style={styles.videoTitle}>
              {"The Revolving Door Between Industry And Government Agencies"}
            </Text>
            <YoutubePlayer
                height={220}
                play={playing}
                videoId={"RLHDlvW6YuE"}
                onChangeState={onStateChange}
                webViewStyle={styles.youtubeOpacity}
            />
          </View>
          <View style={styles.youtubePlayer}>
            <Text style={styles.videoTitle}>
              {"Robert F. Kennedy Jr. Addresses Border Crisis and Releases 'Midnight at the Border'"}
            </Text>
            <YoutubePlayer
                height={220}
                play={playing}
                videoId={"XyX2kr9WavI"}
                onChangeState={onStateChange}
                webViewStyle={styles.youtubeOpacity}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  youtubeOpacity: {
    opacity: 0.99,
  },
  youtubePlayer: {
    paddingHorizontal:15,
  },
  videoTitle: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 15,
    color: '#212121',
    marginBottom: 8,
  },
  headerStyleView: {
    height: 50,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  wallWripple: {
    width: '100%',
    height: 150,
  },
  growingContent: {
    marginTop: 20,
    fontFamily: 'Outfit-Regular',
    color: '#595959',
    fontSize: 17,
    fontWeight: '300',
    textAlign: 'left',
    marginBottom: 10,
  },
  channelAvtar: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
  },

  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 8,
  },
  buttonText: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    marginHorizontal: 6,
  },
  modalLine: {
    borderBottomWidth: 4,
    borderBottomColor: '#282828',
    width: '11%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 6,
    opacity: 0.7,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  modalHeading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    marginHorizontal: 10,
  },
  margin: {
    marginBottom: 48,
  },
  homeRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-around',
  },
  rightButton: {
    marginHorizontal: 8,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  optionContainer: {
    marginHorizontal: 11,
    marginBottom: 4,
  },
  option: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 5,
  },
  optionText: {
    fontFamily: 'Roboto-Light',
    marginLeft: 10,
    fontSize: 18,
    color: '#212121',
  },
});

export default HomeScreen;
