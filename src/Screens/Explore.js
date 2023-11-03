import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import email from 'react-native-email';
import HeaderComponent from '../Utils/HeaderComponent';

const informationContent1 = () => (
  <View style={styles.informationContent1}>
    <Text style={styles.growingTitle}>Growing freedom one seed at a time</Text>
    <Text style={styles.growingContent}>
      Since our launch on Earth Day 2021, we have helped people grow food in
    </Text>
    <View style={styles.thirdContent}>
      <View style={styles.thirdContainerChild}>
        <Text style={styles.numberTitle}>50</Text>
        <Text style={styles.stateTitle}>STATES</Text>
      </View>
      <View style={styles.thirdContainerChild}>
        <Text style={styles.numberTitle}>51</Text>
        <Text style={styles.stateTitle}>COUNTRIES</Text>
      </View>
    </View>
    <View style={styles.mt10}>
      <Text style={styles.growingContent}>
        including resorts in Thailand, large farms in Africa, and single-family
        residences from Poland to Mexico and all around the United States. Our
        professional food forest designers can design in any location around the
        world.
      </Text>
    </View>
  </View>
);

const _renderFirstCarousel = ({index, item}) => (
  <View>
    <View style={styles.renderFirstCarousel}>
      <Image source={item.uri} style={styles.peopleSaidImage} />
    </View>
  </View>
);

const _renderSecondCarousel = ({index, item}) => (
  <View>
    <View style={styles.renderSecondCarousel}>
      <Image source={item.uri} style={styles.workImage} />
    </View>
  </View>
);

const TestingScreen = props => {
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
        <ScrollView style={styles.contentContainer}>
          <Image
            source={require('../../assets/explore.jpeg')}
            style={styles.wallWripple}
            resizeMode="contain"
          />
          <Text style={styles.growingContent}>
            Robert F. Kennedy, Jr is a lifelong Democrat and proven champion of the American people.{"\n\n"}

            The son of Senator Robert F. Kennedy and the nephew of President John F. Kennedy, RFK Jr. began a career of public services as soon as he passed the NY State Bar, eventually becoming one of the most influential environmentalists in the United States and earning global recognition including TIME Magazine's "Hero of the Planet” and the Sartisky Peace Award.{"\n\n"}

            RFK Jr. started his career in 1985 as a young attorney for the environmental nonprofit RiverKeeper, prosecuting polluters, ensuring safe drinking water for American families and preserving fishing as a viable livelihood in the United States. During his tenure there, he successfully sued dozens of corrupt municipalities to force compliance with the Clean Water Act. He won cases against corporate giants too, including a suit against General Electric for toxic runoff from its corporate jet hangar and a court order against ExxonMobil mandating they clean up tens of millions of gallons of spilled oil in Brooklyn, NY.{"\n\n"}

            Building on the success of the local Riverkeeper model, RFK Jr. co-founded the WaterKeeper Alliance and served as its President for 21 years. Under his direction, it became the world's largest nonprofit devoted to clean water and now protects 2.7 million miles of waterways with over a million volunteers in the United States and 46 other countries.{"\n\n"}

            RFK Jr.’s work has especially emphasized marginalized communities in their battle against corporate and government polluters. Some of his most noteworthy victories include:{"\n\n"}

            1. In 1991, Kennedy represented the NAACP in a lawsuit battling the creation of a garbage transfer station in an underserved neighborhood in New York.{"\n\n"}
            2. Beginning in 1992, RFK Jr. represented the Cree Indians in their fight against 600 proposed dams on their tribal land.{"\n\n"}
            3. In 1993, Kennedy represented the Confederation of Indian Peoples in their negotiation with oil giant Conoco to limit destruction of the Ecuadorian Amazon.{"\n\n"}
            4. Between 1996 and 2000, Kennedy represented Mexican fishing communities in their battle against Mitsubishi's proposed salt facility in the whale breeding waters of Baja.{"\n\n"}
            5. In 1997, RFK Jr. sued Mobil oil to reverse its pollution of the Hudson River, making the waters fishable again and enabling the return of the Bald Eagle to its nesting ground.{"\n\n"}
            6. Throughout the 1990s, RFK Jr. represented family farmers in their fight against factory farming giants in North Carolina, Iowa, Kansas, Missouri, Illinois, Ohio, Oklahoma and Maryland.{"\n\n"}
            7. In 2001, Kennedy was arrested for protesting US military testing in the fishing waters of Puerto Rico and served 30 days in jail, eventually resulting in the termination of the US bombing of Puerto Rican waters that were causing cancers from uranium exposure and toxic spills.{"\n\n"}
            8. In 2007, RFK Jr. won a $396 million jury verdict on behalf of rural communities in West Virginia contaminated by Zinc from a DuPont chemical plant.{"\n\n"}
            9. The 2010 HBO Film Mann vs Ford documents his four-year battle on behalf of the Ramapough Tribe against the Ford Motor Company over its dumping of toxic waste on tribal lands in New Jersey.{"\n\n"}
            10. The 2011 award-winning film The Last Mountain depicts Kennedy's tireless fight against Appalachian mountaintop removal mining.{"\n\n"}
            11. In 2013, RFK Jr. and his son Conor were arrested in front of the White House for protesting the Keystone Pipeline's construction through native lands and protected wilderness.{"\n\n"}
            12. In 2016, RFK Jr. prosecuted SoCal Gas on behalf of the California communities sickened by the Aliso Canyon Gas Leak, the largest gas leak in American history.{"\n\n"}
            13. Also in 2016, RFK Jr. and several of his children joined the Water Protectors on the Standing Rock Sioux Reservation in North Dakota, to protest the Dakota Access Pipeline crossing tribal lands and threatening the Tribe’s primary water source.{"\n\n"}
            14. In 2017, Kennedy prosecuted Monsanto on behalf of poor farming communities and migrant workers who had developed non-Hodgkin's Lymphoma from exposure to the pesticide Round-up.{"\n\n"}
            15. In 2018, RFK Jr. secured a $670 million settlement for under-resourced communities in Ohio and West Virginia whose drinking water had been contaminated by C8 from industrial dumping and runoff.{"\n\n"}
            16. Also in 2018, Kennedy prosecuted Columbia Gas Company for its negligent pipeline maintenance leading to explosions in three towns north of Boston.{"\n\n"}
            17. As of Dec 2022, the Monsanto lawsuits to which RFK Jr. has devoted much of the past decade have yielded $11 billion for farmers, migrant workers, day laborers, and families exposed to the pesticide RoundUp.{"\n\n"}
            18. Although today he criticizes the Democratic establishment for its abandonment of core Democratic values like peace and the First Amendment, RFK Jr. has long been an active supporter of Democratic candidates and leaders, endorsing and campaigning for Al Gore, John Kerry, Hillary Clinton and Barack Obama. In 2005, he authored a book entitled "Crimes Against Nature: How George W Bush and his Corporate Pals are Plundering the Country and Hijacking our Democracy." RFK Jr. was also an early and vocal critic of President Bush's decision to invade Iraq and the U.S. enhanced interrogation program at Guantanamo Bay and around the world.{"\n\n"}

            RFK Jr. has been a devoted supporter of union rights, going on hunger strike with United Farm Workers and serving as a pall-bearer during the funeral of Cesar Chavez. RFK Jr. has consistently argued that those who work hard in the United States should be able to afford a good life.{"\n\n"}

            RFK Jr.’s activism around toxic pollution led him to lobby successfully for the removal of mercury from most childhood vaccinations in the United States. He went on to advocate for the restoration of standard product liability and placebo testing requirements for vaccine manufacturers. The pharmaceutical mega-corporations are by far the most heavily fined and criminally prosecuted companies in America, yet also some of the most powerful. Hs nonprofit, Children’s Health Defense, has long been a key crusader against the corruption of this industry and its influence in government.{"\n\n"}

            RFK Jr. is an avid outdoorsman, master falconer and white water kayaker. He has authored a dozen books on subjects ranging from environmental protection to American history and public life, including children's books on the lives of St Francis of Asisi and Robert Smalls. In October 2011, RFK Jr. co-founded EcoWatch, a leading environmental news site, and was an editor of Indian Country Today, North America's largest Indigenous newspaper.{"\n\n"}

            Recipient of the Father of the Year award for dedication to family, citizenship, charity, civility, responsibility and reverence, RFK Jr. is the proud father of seven children and grandpa to two grandkids. He is the devoted husband of actress Cheryl Hines and pack leader to four dogs and two giant tortoises. (Yes, they're coming to the White House too.){"\n\n"}
          </Text>
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
  headerStyleView: {
    height: 50,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 25,
    color: '#212121',
    marginHorizontal: 15,
    // marginTop: 50,
  },
  content: {
    color: '#2c2c2c',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  space: {
    height: 25,
  },
  containerDescription: {
    marginBottom: 15,
    marginTop: 25,
    marginHorizontal: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  link: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    marginLeft: 14,
  },
  profile: {
    marginTop: 30,
    width: '100%',
    height: 200,
    // marginHorizontal: 15,
  },
  titleDescription: {
    fontFamily: 'Roboto-Black',
    fontSize: 17,
    marginTop: 15,
    marginBottom: 5,
  },
  subTitleDescription: {
    fontFamily: 'Outfit-SemiBold',
    color: '#92C255',
    fontSize: 15,
    marginTop: 10,
  },
  description: {
    fontFamily: 'Outfit-Regular',
    color: '#595959',
    fontSize: 15,
    fontWeight: '300',
  },
  backgroundVideo: {
    marginTop: 20,
    height: 200,
    width: 320,
    flex: 1,
    // top: 0,
    backgroundColor: '#000',
  },
  youtubePlayer: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  youtubeOpacity: {
    opacity: 0.99,
  },
  informationContent1: {marginBottom: 60, marginTop: 30, marginHorizontal: 20},
  growingTitle: {
    fontFamily: 'Outfit-SemiBold',
    color: '#5E8887',
    fontSize: 21,
    textAlign: 'center',
  },
  growingContent: {
    marginTop: 5,
    fontFamily: 'Outfit-Regular',
    color: '#595959',
    fontSize: 17,
    fontWeight: '300',
    textAlign: 'left',
    marginBottom: 10,
  },
  thirdContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 10,
  },
  thirdContainerChild: {justifyContent: 'center', alignItems: 'center'},
  numberTitle: {
    fontFamily: 'Outfit-SemiBold',
    color: '#5E8887',
    fontSize: 40,
  },
  stateTitle: {
    fontFamily: 'Outfit-SemiBold',
    color: '#92C255',
    fontSize: 15,
  },
  mt10: {
    marginTop: 10,
  },
  contactUsSection: {
    marginBottom: 50,
    // marginTop: 20,
    // marginHorizontal: 5,
    backgroundColor: '#5E8886',
    width: '100%',
    paddingBottom: 20,
  },
  wallWripple: {
    width: '100%',
    height: 250,
  },
  txtContactUsTitle: {
    textAlign: 'center',
    fontFamily: 'Outfit-SemiBold',
    color: 'white',
    fontSize: 21,
  },
  textInputContactUs: {
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
    color: '#000000',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 15,
  },
  textInputContactUsMessage: {
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
    color: '#000000',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 15,
    height: 100,
  },
  contactUsSubmitButton: {
    width: 100,
    height: 50,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  txtSubmit: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Outfit-Regular',
  },
  peopleSaidImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  workImage: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },
  renderFirstCarousel: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 240,
    marginLeft: 25,
    marginRight: 25,
  },
  renderSecondCarousel: {
    borderRadius: 5,
    height: 280,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    alignSelf: 'center',
  },
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  previousCarousel: {
    width: '15%',
    alignItems: 'flex-end',
  },
  mainCarousel: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // alignSelf: 'center',
  },
  mainWorkCarousel: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // backgroundColor: 'red',
    // alignSelf: 'center',
  },
  nextCarousel: {
    width: '15%',
    alignItems: 'flex-start',
  },
  reviewContainer: {
    flexDirection: 'column',
    marginTop: 10,
    alignSelf: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  outfitRegular: {
    fontFamily: 'Outfit-Regular',
  },
  outfitRegularCenter: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  growingContent2: {
    marginTop: 10,
    fontFamily: 'Outfit-Regular',
    color: '#595959',
    fontSize: 17,
    fontWeight: '300',
    textAlign: 'center',
    marginHorizontal: 15,
  },
  paginationContainer: {
    width: 50,
    height: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: '#404040',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  workContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 30,
  },
});

export default TestingScreen;
