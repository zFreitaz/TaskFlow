import Botao from "@/components/Botao";
import { carregarTarefas, salvarTarefas } from "@/utils/armazenamento";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";

export default function AddTarefas() {
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [prioridade, setPrioridade] = useState("")

    async function salvar (){
        if (titulo.trim() === ""){
            Alert.alert("Atenção")
            return;
        }
        if (descricao.trim() === ""){
            Alert.alert("Atenção", "Digite a Descrição da Tarefa!")
                return;
        }
        if (prioridade.trim() === ""){
            Alert.alert("Atenção", "Digite a Prioridade da Tarefa!")
                return;
        }
        
        const novaTarefa = {
            id: Date.now().toString(),
            titulo: titulo.trim(),
            descricao: descricao.trim(),
            prioridade: "Alta"
        }

        const tarefas = await carregarTarefas();

        const novaLista = [...tarefas, novaTarefa]

        await salvarTarefas(novaLista)

        Alert.alert("Sucesso!", "Validação Ok, dados salvos com sucesso!");
        router.replace("/tarefas/tarefas");
    }

    return (
          <View style={styles.container}>
            <Text style={styles.label}>Titulo *</Text>
            <TextInput
                value={titulo}
                style={styles.campo}
                onChangeText={(texto) => { setTitulo(texto) }}
                placeholder="Digite o título da tarefa"
            />
            <Text style={styles.label}>Descrição *</Text>
            <TextInput
                value={descricao}
                style={styles.campo}
                onChangeText={(texto) => { setDescricao(texto) }}
                placeholder="Digite a descricao da tarefa"
                multiline
            />

            <Text style={styles.label}>Prioridade *</Text>
            <TextInput
                value={prioridade}
                style={styles.campo}
                onChangeText={(texto) => { setPrioridade(texto) }}
                placeholder="Digite a prioridade da tarefa"
                multiline
            />

            <View style={{alignSelf: "flex-end"}}>
                <Botao texto="Salvar" onPress={()=> salvar()}/>
            </View>
          </View>
    );
}

const styles = StyleSheet.create({
    campo: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 8,
        padding: 12,
        marginBottom: 15
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    container: {
        flex: 1,
        padding: 20
    }
})