import {Stack} from 'expo-router'

export default function LAyout(){

    return(
        <Stack>
            <Stack.Screen
            name="index"
            options={{title: "Bem Vindo"}}
            />

             <Stack.Screen
            name="tarefas"
            options={{title: "Minhas Tarefas"}}
            />
        </Stack>
    )
}