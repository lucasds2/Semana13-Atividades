import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

const IMCalc = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState(null);
  const [status, setStatus] = useState(null);

  const calculateIMC = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightValue = parseFloat(height.replace(',', '.'));
      const heightInM = heightValue < 3 ? heightValue : heightValue / 100;
      

      const imcValue = (weightInKg / (heightInM * heightInM)).toFixed(2);
      setIMC(imcValue);

      if (imcValue < 18.5) {
        setStatus('Abaixo de Peso');
      } else if (imcValue < 25) {
        setStatus('Peso Normal');
      } else if (imcValue < 30) {
        setStatus('Sobrepeso');
      } else if (imcValue < 35) {
        setStatus('Obesidade Grau I');
      } else if (imcValue < 40) {
        setStatus('Obesidade Grau II');
      } else {
        setStatus('Obesidade Mórbida');
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Peso (kg):</Text>
      <TextInput
        style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'gray' }}
        placeholder="Digite seu peso"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <Text>Altura (cm):</Text>
      <TextInput
        style={{ width: 200, height: 40, borderWidth: 1, borderColor: 'gray' }}
        placeholder="Digite sua altura"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <Button title="Calcular IMC" onPress={calculateIMC} />
      {imc !== null && (
        <View>
          <Text>Seu IMC: {imc}</Text>
          <Text>Status de Peso: {status}</Text>
          {status === 'Abaixo de Peso' && (
            <Image source={{ uri: './images/abaixo_do_peso.png' }} style={{ width: 100, height: 100 }} />
          )}
          {status === 'Peso Normal' && (
            <Image source={{ uri: './images/peso_normal.png' }} style={{ width: 100, height: 100 }} />
          )}
          {status === 'Sobrepeso' && (
            <Image source={{ uri: './images/sobrepreso.png' }} style={{ width: 100, height: 100 }} />
          )}
          {status === 'Obesidade Grau I' && (
            <Image source={{ uri: './images/obesidade_I.png' }} style={{ width: 100, height: 100 }} />
          )}
          {status === 'Obesidade Grau II' && (
            <Image source={{ uri: './images/obesidade_II.png' }} style={{ width: 100, height: 100 }} />
          )}
          {status === 'Obesidade Mórbida' && (
            <Image source={{ uri: './images/obesidade_III.png' }} style={{ width: 100, height: 100 }} />
          )}
        </View>
      )}
    </View>
  );
};

export default IMCalc;
