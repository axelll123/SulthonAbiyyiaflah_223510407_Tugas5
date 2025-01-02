import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailScreenProps = {
  route: DetailScreenRouteProp;
};

export default function DetailScreen({ route }: DetailScreenProps) {
  const { title, image } = route.params;

  // Deskripsi berdasarkan produk
  const getProductDescription = (productTitle: string) => {
    switch (productTitle) {
      case 'Churros':
        return 'Churros are a typical Spanish sweet snack that are fried until golden. A sprinkling of sugar and chocolate sauce makes it even more delicious.';
      case 'Beef Burger':
        return 'Beef Burger is a sandwich with a juicy grilled beef patty, topped with fresh vegetables and special sauce.';
      case 'Fried Rice':
        return 'Fried Rice is a delicious dish with rice, vegetables, eggs and delicious spices and a special sauce.';
      case 'Lemon Tea':
        return 'Lemon Tea is a fresh tea drink with refreshing lemon juice, perfect to accompany a hot day.';
      default:
        return 'Detail tidak tersedia untuk produk ini.';
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Gambar Produk */}
      <Image source={image} style={styles.image} />

      {/* Detail Produk */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{getProductDescription(title)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EAEAEA' }, // Soft light gray background

  // Gambar Produk
  image: { 
    width: '100%', 
    height: 300, 
    borderRadius: 15, 
    marginBottom: 20, 
    opacity: 0.8, // Slight opacity to make it blend nicely with the background
  },

  // Konten
  content: {
    backgroundColor: '#FFFFFF', // White background for content section
    padding: 20, // Added more padding for better spacing
    marginTop: -30,
    borderRadius: 10,
    marginHorizontal: 20, // Adjusted margin for better centering
    shadowColor: '#B0B0B0', // Soft shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4, // Soft shadow
    shadowRadius: 6,
    elevation: 5, // Slight elevation for soft floating effect
  },
  title: { 
    fontSize: 28, // Slightly bigger font size for the title
    fontWeight: 'bold', 
    color: '#555555', // Soft dark gray for the title
    marginBottom: 12,
    textAlign: 'center', // Center align title
  },
  description: { 
    fontSize: 16, 
    color: '#7D7D7D', // Soft gray for the description text
    lineHeight: 24, 
    textAlign: 'center', // Center align description text
    marginBottom: 20, // Extra space below description
  },
});
