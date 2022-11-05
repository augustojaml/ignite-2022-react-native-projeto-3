import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { Exercise } from '@screens/Exercise';
import { History } from '@screens/History';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';
import { FC } from 'react';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'native-base';
import { Platform } from 'react-native';

type AppRoutesProps = {
  Home: undefined;
  Exercise: undefined;
  Profie: undefined;
  History: undefined;
};

export type AppRoutesNavigationProps = BottomTabNavigationProp<AppRoutesProps>;

const AppTab = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();
  const iconSize = sizes[6];

  const GLOBAL_OPTIONS: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: colors.green[500],
    tabBarInactiveTintColor: colors.gray[200],
    tabBarStyle: {
      backgroundColor: colors.gray[600],
      borderTopWidth: 0,
      height: Platform.OS === 'android' ? 'auto' : 96,
      paddingBottom: sizes[8],
      paddingTop: sizes[8],
    },
  };

  function tabBarOptions(icon: FC<SvgProps>) {
    const ICON = icon;
    const options: BottomTabNavigationOptions = {
      tabBarIcon: ({ color }) => <ICON fill={color} width={iconSize} height={iconSize} />,
    };
    return options;
  }

  return (
    <AppTab.Navigator initialRouteName="Home">
      <AppTab.Group screenOptions={GLOBAL_OPTIONS}>
        <AppTab.Screen name="Home" component={Home} options={tabBarOptions(HomeSvg)} />
        <AppTab.Screen name="History" component={History} options={tabBarOptions(HistorySvg)} />
        <AppTab.Screen name="Profie" component={Profile} options={tabBarOptions(ProfileSvg)} />
        <AppTab.Screen name="Exercise" component={Exercise} options={{ tabBarButton: () => null }} />
      </AppTab.Group>
    </AppTab.Navigator>
  );
}
