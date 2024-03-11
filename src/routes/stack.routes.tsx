import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../screens/Home';
import Login from '../screens/Login';

const {Screen,Navigator} = createNativeStackNavigator();

export function StackRotas(){

    return(
        <Navigator>
            <Screen
                name='Home'
                component={Home}
                options={{
                    title:'Tela Home',
                    headerTitleAlign:'center',
                    headerTintColor:'red',
                    headerStyle:{
                        backgroundColor:'#000'
                    }
                    
                }}
            />
            <Screen
                name='Login'
                component={Login}
                options={{
                    headerShown:false
                }}
            />
        </Navigator>
    )
}

