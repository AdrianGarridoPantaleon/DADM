import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button, Image, ScrollView, Alert } from 'react-native';



export default function App() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [habilitarboton, setBoton] = useState(true);
  const toggleSwitch = (value) => {

    if (!pass || !email) {
      Alert.alert('rellene los campos')
    }
    else {
      if (value) {
        setBoton(previousState => !previousState)
      }
      else {
        setBoton(previousState => !previousState)
      }
      setIsEnabled(previousState => !previousState);
    }

  }

  return (
    <View style={styles.container}>

      <Text style={{ fontSize: 15, marginTop: 10 }}>Bienvenido a la Practica2 React Native</Text>

      <Image
        source={require('./src/logo.png')}
        style={{ marginTop: 40, width: 241, height: 209 }}
      />


      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={email => setEmail(email)}

      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        keyboardType="numeric"
        secureTextEntry={true}
        onChangeText={pass => setPass(pass)}
      />

      <View style={styles.container2}>
        <ScrollView style={styles.ScrollView}>
          <Text>
            Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32

            El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.

          </Text>

          <Switch
            style={{ alignItems: 'center' }}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}

          />
          <Text>He leido y estoy de acuerdo</Text>
        </ScrollView>
        </View>

        <Button
          disabled={habilitarboton}
          onPress={() => {
            alert('Bienvenido ' + email)
          }}
          title="Entrar"

        />
      </View >
      );
}

      const styles = StyleSheet.create({
        container: {
        flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
      input: {
        height: 40,
      width: 190,
      marginTop: 20,
      borderColor: '#ccc',
      borderWidth: 2
  },
  container2: {
    flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '30%',
  maxHeight:'20%'
},
      ScrollView: {
        marginTop: 20,
      marginVertical: 20,
      marginHorizontal: 20
  }
});
