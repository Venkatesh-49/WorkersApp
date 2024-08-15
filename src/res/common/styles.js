import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    
// General styles
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
  
  // CategoriesScreen styles
  categoriesContainer: {
    flex: 1,
    padding: wp('1.25%'),
    width: "100%",
  },
  row: {
    justifyContent: "flex-start",
    marginBottom: hp('1%'),
  },

  // WelcomeScreen styles
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('5%'),
  },
  welcomeText: {
    fontSize: wp('6%'),
  },

  // App styles
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    backgroundColor: "white",
  },
  logo: {
    height: hp('8%'),
    width: wp('20%'),
    marginRight: wp('40%'),
  },

  // BottomBar styles
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: hp('1%'),
  },
  bottomBarIconButton: {
    alignItems: "center",
  },
  selectedLine: {
    width: wp('6%'),
    height: 2,
    backgroundColor: '#e6ac00',
    marginBottom: hp('0.5%'),
  },
  iconText: {
    fontSize: wp('3%'),
    marginTop: hp('0.5%'),
    color: 'black',
  },
  selectedText: {
    color: '#e6ac00',
    fontWeight: 'bold',
  },

  // Header styles
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    backgroundColor: "white",
  },
  logo: {
    height: hp('8%'),
    width: wp('20%'),
    marginRight: wp('40%'),
  },
  iconButton: {
    padding: hp('1%'),
  },

  // Search styles
  headerContainer: {
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarContainer: {
    marginLeft: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: wp('2%'),
    marginVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    width: wp('75%'),
    backgroundColor: '#c2d6d6',
  },
  filtercontainer: {
    marginLeft: wp('2.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('3%'),
    width: wp('12%'),
    height: hp('4%'),
    backgroundColor: '#c2d6d6',
  },
  searchBar: {
    flex: 1,
    height: hp('5%'),
    paddingHorizontal: wp('2%'),
  },
  searchIcon: {
    marginRight: wp('2%'),
  },
  voiceIcon: {
    marginLeft: wp('2%'),
  },
  category: {
    alignItems: 'center',
    marginHorizontal: wp('2.5%'),
    paddingVertical: hp('1.5%'),
    borderRadius: wp('2.5%'),
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCategory: {
    borderColor: '#3498db',
  },
  iconContainer: {
    width: wp('17%'),
    height: wp('17%'),
    borderRadius: wp('7.5%'), 
    overflow: 'hidden', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: hp('0.5%'),
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  categoryName: {
    fontSize: wp('3.5%'),
    color: '#333',
  },

  // WorkerProfile styles
  workProfileContainer: {
    alignItems: "flex-start",
    marginTop: hp('1.0%'),
    padding: wp('2.0%'),
    margin:wp('1.3%')
  },
  imageContainer: {
    position: "relative",
    width: wp('17.5%'),
    height: wp('17.5%'),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: wp('8.75%'),
  },
  flag: {
    position: "absolute",
    bottom: wp('12.5%'),
    right: 0,
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('2.5%'),
    backgroundColor: "black",
  },
  name: {
    marginVertical: hp('0.625%'),
    fontSize: wp('3.75%'),
  },
});

export default styles;
