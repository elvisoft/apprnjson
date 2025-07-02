import DefaultRoundedButton from '@/components/DefaultRoundedButton';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function TabTwoScreen() {

  const cerrarsesion = () => {
    try {
      router.replace('/'); // Navigate to the login screen
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
   <View style={{ flex: 1, padding: 16 }}>
    
      <DefaultRoundedButton
          text='Cerrar SESION'
          onPress={() => cerrarsesion()}     
          backgroundColor='#ff7b25'               
      />
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
});
