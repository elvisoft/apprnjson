import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
   <View>
    <Text  style={styles.texto1}>Hola Mundo!!</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  texto1:{
    fontSize:30,
    color:'red',
    fontWeight:'bold',
    textAlign:'center',
  }
});
