import React, { useState } from "react";
import { View, FlatList } from "react-native";
import Search from "../Components/Search";
import workers from "../data/workers.json";
import categories from "../data/categories.json";
import BottomBar from "../Components/BottomBar";
import styles from "../res/common/styles";
import WorkerProfile from "../Components/WorkerProfile";


const CategoriesScreen = () => {
  const [filteredWorkers, setFilteredWorkers] = useState(workers);

  const handleSearch = (text) => {
    setFilteredWorkers(
      workers.filter((worker) =>
        worker.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const handleSelectCategory = (category) => {
    if (category === null) {
      setFilteredWorkers(workers);
    } else {
      setFilteredWorkers(
        workers.filter((worker) => worker.categoryId === category.id)
      );
    }
  };

  return (
    <View style={styles.categoriesContainer}>
      <Search
        categories={categories}
        onSearch={handleSearch}
        onSelectCategory={handleSelectCategory}
      />
      <FlatList
        data={filteredWorkers}
        renderItem={({ item }) => <WorkerProfile profile={item} />}
        keyExtractor={(item) => item.id}
        numColumns={4}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
      <BottomBar />
    </View>
  );
};

export default CategoriesScreen;
