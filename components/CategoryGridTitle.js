import { View, Pressable, Text, StyleSheet } from 'react-native';

function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: '#fbfefe' }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    //Shadow For Android
    elevation: 4,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  //   buttonPressed:{
  //     opacity:0.5
  //   },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
