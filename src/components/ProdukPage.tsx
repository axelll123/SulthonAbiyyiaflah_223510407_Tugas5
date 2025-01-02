import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type ProductItemProps = {
  title: string;
  icon: string;
};

const ProductItem = ({ title, icon }: ProductItemProps) => {
  return (
    <View style={styles.productItem}>
      <Icon name={icon} size={40} color="#2C3E50" />
      <Text style={styles.productTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  productTitle: { fontSize: 16, marginTop: 8, color: '#2C3E50' },
});

export default ProductItem;
