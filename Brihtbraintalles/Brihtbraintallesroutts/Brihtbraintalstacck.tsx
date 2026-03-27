// stack

import {createStackNavigator} from '@react-navigation/stack';

import Brihtbraintallesload from '../Brihtbraintallescpntts/Brihtbraintallesload';
import Brihtbraintallesonbr from '../Brihtbraintallesscrnns/Brihtbraintallesonbr';
import Brihtbraintaltabs from '../../Brihtbraintaltabs';
import Brihtbraintallesstoryfull from '../Brihtbraintallesscrnns/Brihtbraintallesstoryfull';
import Brihtbraintallesblogfull from '../Brihtbraintallesscrnns/Brihtbraintallesblogfull';

const Stack = createStackNavigator();

const Brihtbraintalstacck = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Brihtbraintallesload"
        component={Brihtbraintallesload}
      />
      <Stack.Screen
        name="Brihtbraintallesonbr"
        component={Brihtbraintallesonbr}
      />
      <Stack.Screen name="Brihtbraintaltabs" component={Brihtbraintaltabs} />
      <Stack.Screen
        name="Brihtbraintallesstoryfull"
        component={Brihtbraintallesstoryfull}
      />
      <Stack.Screen
        name="Brihtbraintallesblogfull"
        component={Brihtbraintallesblogfull}
      />
    </Stack.Navigator>
  );
};

export default Brihtbraintalstacck;
