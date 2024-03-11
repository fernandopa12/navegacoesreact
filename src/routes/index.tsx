import {NavigationContainer} from '@react-navigation/native'

import { StackRotas } from './stack.routes'
import { TabRotas } from './tab.routes'

export function Routes(){
    return(
    <NavigationContainer>
        <TabRotas/>
    </NavigationContainer>
    )
}