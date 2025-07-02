import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function DashboardScreen() {
  const [datasalas, setDatasalas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sielconapidev.onrender.com/salas');
        const data = await response.json();
        console.log('Data fetched from API:', data);
        setDatasalas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
   <View style={styles.container}>
      <Text>Bienvenido Usuario</Text>
       <ScrollView style={{ flex:1, width: '100%' }}>
          {
              datasalas.length?
              datasalas.map((item:any, index)=>
              <View key={index} style={styles.card}>
                {/* Punto de estado arriba a la derecha */}
                         
                <View>
                  <Text style={styles.txt20}>Sala: {item.Sala}</Text>
                  <Text style={styles.txt20}>UID: {item.UID}</Text>
                  <Text style={styles.txt20}>HardID: {item.HardID}</Text>  
                  <Text style={styles.txt20}>User: {item.mqtt_user}</Text>                      
                </View>                      
                <TouchableOpacity 
                  style={styles.buttoncard}
                  onPress={()=> alert('Recaudar en sala: ' + item.UID)}
                >
                  <Text style={styles.textbtn}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.buttoncard}
                  onPress={()=> alert('Eliminar en sala: ' + item.UID)}
                >
                  <Text style={styles.textbtn}>Eliminar</Text>
                </TouchableOpacity>
              </View>)
              : 
              <View>
                <Text>No se encontraron Salas</Text>
              </View>
          }
        
      </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
 
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  form: {
    width: '87%',
    height: '75%',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    justifyContent: 'center',
    paddingHorizontal: 25
  },
 
  textLogin: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  
  containerTextDontHaveAccount: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  textDontHaveAccount: {
    color: 'white',
    fontSize: 18
  },
  divider: {
    height: 1,
    width: 87,
    backgroundColor: 'white',
    marginHorizontal: 5
  },
  buttonred: {
    width: "100%",
    height: 35,
    backgroundColor: "red", // Botón rojo para cancelar
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
 button: {
    width: "100%",
    height:35,
    //backgroundColor: "#4267B2", // Botón azul inspirado en Facebook
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 15,
    //marginBottom: 15,
  },
  card:{    
    alignItems: 'center',
    justifyContent: 'center',
    width:350,
    height:200,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'purple',
    shadowColor: "purple",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 0, // Android
    marginBottom:10,
    marginTop:10,
    margin:10,
    fontSize:20
  },
  buttoncard:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'purple',
    color:'white',
    borderRadius:10,
    width:'90%',
    height:30,
    marginTop:10,
  },
  textbtn:{
    color:'white',
    fontSize:20
  },
  txt20:{
    fontSize:20
  }
});
