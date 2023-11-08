import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ListaDeTarefas = () => {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setListaTarefas((tarefasAntigas) => [
        ...tarefasAntigas,
        { id: Math.random().toString(), titulo: tarefa },
      ]);
      setTarefa(''); // Limpa o campo de entrada
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Lista de Tarefas</Text>
      <TextInput
        placeholder="Tarefa"
        value={tarefa}
        onChangeText={(text) => setTarefa(text)}
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
        }}
      />
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
      <FlatList
        data={listaTarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              padding: 10,
            }}
          >
            <Text>{item.titulo}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListaDeTarefas;
