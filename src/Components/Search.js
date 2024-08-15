import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../res/common/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import strings from "../res/common/string";

const Search = ({ categories, onSearch, onSelectCategory }) => {
  const [selectedId, setSelectedId] = useState(null);

  const getImage = (imageLink) => {
    switch (imageLink) {
      case strings.search.STARS:
        return require("../res/images/stars.png");
      case strings.search.PHOTOGRAPHER:
        return require("../res/images/photoGrapher.jpeg");
      case strings.search.MAKEUP:
        return require("../res/images/make-up.png");
      case strings.search.MEHENDI:
        return require("../res/images/mehendi.png");
      case strings.search.SHOPPING:
        return require("../res/images/shopping.png");
      default:
        return null;
    }
  };

  const handleSelect = (item) => {
    if (item.id === selectedId) {
      setSelectedId(null);
      onSelectCategory(null);
    } else {
      setSelectedId(item.id);
      onSelectCategory(item);
    }
  };

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.category,
              item.id === selectedId && styles.selectedCategory,
            ]}
            onPress={() => handleSelect(item)}
          >
            <View style={styles.iconContainer} key={item.id}>
              <Image
                style={styles.icon}
                source={getImage(item.imageLink)}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      />

      <View style={styles.headerContainer}>
        <View style={styles.searchBarContainer}>
          <Ionicons
            name="search"
            size={wp("5%")}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBar}
            placeholder={strings.search.SEARCHPLACEHOLDER}
            onChangeText={(text) => onSearch(text)}
          />
          <Ionicons
            name="mic"
            size={wp("5%")}
            color="#888"
            style={styles.voiceIcon}
          />
        </View>
        <View style={styles.filtercontainer}>
          <TouchableOpacity>
            <Ionicons name="filter-outline" size={wp("5%")} color="#888" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Search;
