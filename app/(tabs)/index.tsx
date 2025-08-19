import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';

export default function Index() {
  const backgroundImage = require('@/assets/images/academia.png');

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);

    const a = parseFloat(altura);
    if (!p || !a) {
      setResultado("Preencha peso e altura");
      return;
    }

    const imc = p / (a * a);
    setResultado(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
      setClassificacao("Peso normal");
    } else if (imc >= 25 && imc < 30) {
      setClassificacao("Sobrepeso");
    } else if (imc >= 30 && imc < 35) {
      setClassificacao("Obesidade Grau I");
    } else if (imc >= 35 && imc < 40) {
      setClassificacao("Obesidade Grau II (severa)");
    } else {
      setClassificacao("Obesidade Grau III (mórbida)");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Calculadora <Text style={styles.imc}>IMC</Text></Text>

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

        <Button label={'Calcular'} onPress={calcularIMC} />

        {resultado ? (
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultado}>{resultado}</Text>
            <Text style={styles.resultado}>Classificação: {classificacao}</Text>
          </View>
        ) : null}  
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    width: 320,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: 'rgba(255, 0, 0, 1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontSize: 24,
    letterSpacing: 12,
    marginBottom: 30,
    marginTop: 45,
    textTransform: 'uppercase',
  },
  text: {
    color: '#fff',
  },
  resultadoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultado: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 700,
    letterSpacing: 2,
  },
  imc: {
    color: '#ff0000',
    fontWeight: 900,
    letterSpacing: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
