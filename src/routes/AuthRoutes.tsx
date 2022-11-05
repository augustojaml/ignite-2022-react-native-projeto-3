import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
  TransitionPresets,
} from '@react-navigation/stack';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

const GLOBAL_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.FadeFromBottomAndroid,
};

type AuthRoutesProps = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthRoutesNavigationProps = StackNavigationProp<AuthRoutesProps>;

const AuthStack = createStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Group screenOptions={GLOBAL_OPTIONS}>
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
}
