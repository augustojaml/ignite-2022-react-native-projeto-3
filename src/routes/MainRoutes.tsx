import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useTheme, Box } from 'native-base';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export function MainRoutes() {
  const user = undefined;

  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray['700'];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <>{user ? <AppRoutes /> : <AuthRoutes />}</>
      </NavigationContainer>
    </Box>
  );
}
