import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 14,
    backgroundColor: '#252102',
  },
  itemText: {
    color: '#dfdab4',
    textAlign: 'center',
  },
});
