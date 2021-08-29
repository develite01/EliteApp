import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './pages/Inicio/index';
import Cadastro from './pages/Cadastro/index';
import Termos from './pages/Termos/index';
import Login from './pages/Login/index';
import Categorias from './pages/Categorias/index';
import preferences from './pages/preferences/index';
import Empresas from './pages/Empresas/index';
import EmpresaDetalhes from './pages/EmpresaDetalhes/index';
import Comentarios from './pages/Comentarios/index';
import Mapas from './pages/Mapas/index';


const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
      headerMode = "none"
      initialRouteName = "initialScreen">

        <Stack.Screen name = "Inicio" component={Inicio} />
        <Stack.Screen name = 'Cadastro' component={Cadastro} />
        <Stack.Screen name = 'Termos' component={Termos} />
        <Stack.Screen name = 'Login' component={Login} />
        <Stack.Screen name = "Categorias" component={Categorias} />
        <Stack.Screen name = "preferences" component={preferences} />
        <Stack.Screen name = "Empresas" component={Empresas} />
        <Stack.Screen name = "EmpresaDetalhes" component={EmpresaDetalhes} />
        <Stack.Screen name = "Comentarios" component={Comentarios} />
        <Stack.Screen name = "Mapas" component={Mapas} />

      </Stack.Navigator>

    </NavigationContainer>

  )

}