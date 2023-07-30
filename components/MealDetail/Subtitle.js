import { Text, View, StyleSheet } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleConatiner}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#918103',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleConatiner: {
    padding: 6,
    marginHorizontal: 15,
    marginVertical: 4,
    borderBottomColor: 'white',
    borderBottomWidth: 4,
  },
});
