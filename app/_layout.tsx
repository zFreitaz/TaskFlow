import {Stack} from 'expo-router'
import { StackScreen } from 'react-native-screens'

export default function LAyout(){

    return(
        <Stack>
            <Stack.Screen
            name="index"
            options={{title: "Bem Vindo"}}
            />

             <Stack.Screen
            name="tarefas/tarefas"
            options={{title: "Minhas Tarefas"}}
            />
        

            <Stack.Screen
            name="tarefas/addTarefas"
            options={{title: "Adicionar Tarefas"}}
            />
        </Stack>
    )
}