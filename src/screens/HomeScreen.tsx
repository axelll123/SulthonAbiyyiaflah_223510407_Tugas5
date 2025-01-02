import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import ProductItem from '../components/ProdukPage';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const categories = [
    { id: '1', title: 'FastFood', icon: 'fastfood', backgroundColor: '#FFC107' },
    { id: '2', title: 'Drinks', icon: 'local-cafe', backgroundColor: '#4CAF50' },
    { id: '3', title: 'Food', icon: 'local-restaurant', backgroundColor: '#2196F3' },
    { id: '4', title: 'Happy', icon: 'sentiment-very-satisfied', backgroundColor: '#FF5722' },
  ];

  const products = [
    { id: '1', title: 'Churros', icon: 'cake' },
    { id: '2', title: 'Beef Burger', icon: 'fastfood' },
    { id: '3', title: 'Fried Rice', icon: 'restaurant-menu' },
    { id: '4', title: 'Lemon Tea', icon: 'local-drink' },
    { id: '5', title: 'Ice Cream', icon: 'icecream' },
    { id: '6', title: 'Pizza', icon: 'local-pizza' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Are You Hungry?</Text>
        <TouchableOpacity>
          <Icon name="dehaze" size={30} color="#2C3E50" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Your Mood!"
        placeholderTextColor="#95A5A6"
      />

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={[styles.categoryItem, { backgroundColor: item.backgroundColor }]}>
            <Icon name={item.icon} size={32} color="#FFFFFF" />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />

      {/* Popular */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', { title: item.title, image: null })
            }
          >
            <ProductItem title={item.title} icon={item.icon} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDFDFD', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '700', color: '#2C3E50' },
  searchBar: {
    borderWidth: 1,
    borderColor: '#BDC3C7',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    color: '#2C3E50',
  },
  section: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#34495E' },
  seeAll: { color: '#2980B9', fontSize: 14 },
  categoryList: { paddingHorizontal: 5 },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 15,
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  categoryTitle: { marginTop: 8, fontSize: 12, textAlign: 'center', color: '#FFFFFF' },
  columnWrapper: { justifyContent: 'space-between', marginBottom: 20 },
  productList: { paddingBottom: 20 },
});
