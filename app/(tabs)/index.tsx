import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Input from '../components/input';

export default function Index() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = () => {
    const p = parseFloat(peso);

    const a = parseFloat(altura);
    if (!p || !a) {
      setResultado("Preencha peso e altura");
      return;
    }

    const imc = p / (a * a);
    setResultado(`Seu IMC é: ${imc.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Calculadora IMC</Text>

      <Input 
        placeholder={'Peso em (kg)'}
        keyboardType={'numeric'}
        onChangeText={setPeso}
        value={peso}
      />

      <Input 
        placeholder={'Altura (m)'}
        keyboardType={'numeric'}
        onChangeText={setAltura}
        value={altura}
      />

      <Button title="Calcular" onPress={calcularIMC} />

      {resultado ? (
        <Text style={styles.resultado}>{resultado}</Text>
      ) : null}  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  resultado: {
    marginTop: 20, 
    fontSize: 18,
  },
});
