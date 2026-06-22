import React, { useMemo } from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Route from './routes';
import { ASBottomTabNavigator } from '@/components';

import NavigationService from './NavigationService';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { color, text } from '@/assets';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EligibilityRequirement from '@/screens/EligibilityRequirement/EligibilityRequirement';
import AMP from '@/screens/AMP/AMP';
import HomeLiteProcessing from '@/screens/HomeLiteProcessing/HomeLiteProcessing';
import LiteHomeVerifying from '@/screens/LiteHomeVerifying/LiteHomeVerifying';
import HomeLiteMoreInfo from '@/screens/HomeLiteMoreInfo/HomeLiteMoreInfo';
import VerificationVerified from '@/screens/VerificationVerified/VerificationVerified';
import HomeLite from '@/screens/HomeLite/HomeLite';
import IntroductionFirstScreen from '@/screens/IntroductionFirstScreen/IntroductionFirstScreen';
import DataClasificationOpenAccount from '@/screens/DataClasificationOpenAccount/DataClasificationOpenAccount';
import IdentityIDCardPhoto from '@/screens/IdentityIDCardPhoto/IdentityIDCardPhoto';
import VerificationMoreInfo from '@/screens/VerificationMoreInfo/VerificationMoreInfo';
import LoginScreen from '@/screens/LoginScreen/LoginScreen';
import VerificationInitialTransfer from '@/screens/VerificationInitialTransfer/VerificationInitialTransfer';
import VerificationAddress from '@/screens/VerificationAddress/VerificationAddress';
import VerificationSelfie from '@/screens/VerificationSelfie/VerificationSelfie';
import VerificationDetails from '@/screens/VerificationDetails/VerificationDetails';
import VerificationEmlpoyement from '@/screens/VerificationEmlpoyement/VerificationEmlpoyement';
import MarketingPreference from '@/screens/MarketingPreference/MarketingPreference';
import ReviewAndConfirmDetails from '@/screens/ReviewAndConfirmDetails/ReviewAndConfirmDetails';
import VerificationPurpose from '@/screens/VerificationPurpose/VerificationPurpose';
import Home from '@/screens/Home/Home';
import Deposit from '@/screens/Deposit/Deposit';
import Center from '@/screens/Center/Center';
import Finance from '@/screens/Finance/Finance';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export const defaultBackButton = (): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.backIcon}
      onPress={() => {
        NavigationService.goBack();
      }}
    >
      <Ionicons name='arrow-back' size={24} color={color.brand.primary} />
    </TouchableOpacity>
  );
};

const HomeTabIcon = ({ color }: { color: string }) => (
  <Image
    source={require('@/assets/images/C6f264b750a7437e9595B0362a355376TabIcon.png')}
    style={{ width: 24, height: 24 }}
    resizeMode='contain'
  />
);

const DepositTabIcon = ({ color }: { color: string }) => (
  <Image
    source={require('@/assets/images/C9e7b615D9f14b2e932420ad4a0d1970TabIcon.png')}
    style={{ width: 24, height: 24 }}
    resizeMode='contain'
  />
);

const FinanceTabIcon = ({ color }: { color: string }) => (
  <Image
    source={require('@/assets/images/as78295ccd83264fab9aa0D21320db527bTabIcon.png')}
    style={{ width: 24, height: 24 }}
    resizeMode='contain'
  />
);

const IdentityIDCardPhotoTabIcon = ({ color }: { color: string }) => (
  <Image
    source={require('@/assets/images/as327ac544C4924d258ede04a64cdf61bfTabIcon.png')}
    style={{ width: 24, height: 24 }}
    resizeMode='contain'
  />
);

const DefaultTabNavigator = ({ route }: { route: { name: string } }) => {
  const tabs = useMemo(
    () => [
      {
        name: 'Home',
        component: Home,
        title: 'Home',
        icon: HomeTabIcon,
      },

      {
        name: 'Deposit',
        component: Deposit,
        title: 'Deposit',
        icon: DepositTabIcon,
      },

      {
        name: 'Finance',
        component: Finance,
        title: 'Finance',
        icon: FinanceTabIcon,
      },

      {
        name: 'IdentityIDCardPhoto',
        component: IdentityIDCardPhoto,
        title: 'Card',
        icon: IdentityIDCardPhotoTabIcon,
      },
    ],
    [],
  );

  return (
    <ASBottomTabNavigator
      tabs={tabs}
      initialRouteName={route.name}
      tabBarStyle={{
        backgroundColor: '#ffffff',
        height: 88,
        paddingBottom: 18,
      }}
      activeColor={color.brand.primary}
      inactiveColor={color.text.tertiary}
      tabBarShape={'standard'}
      tabBarShapeBorderRadius={0}
      tabBarShapeBorderTopLeftRadius={0}
      tabBarShapeBorderTopRightRadius={0}
      tabBarShapeBorderBottomLeftRadius={0}
      tabBarShapeBorderBottomRightRadius={0}
      tabBarShapeNotchWidth={72}
      tabBarShapeCurvedDepth={24}
      tabBarShapeCutoutGap={8}
      tabBarShapeNotchSweep={1}
      tabBarShapeCurvedTrough={'round'}
      tabBarStyleVariant={'solid'}
      tabBarBlurIntensity={80}
      tabBarBlurTint={'default'}
      tabBarShowLabels={'always'}
      tabBarIconSize={24}
      tabBarCenterAction={{
        icon: ({ color }: { color: string }) => (
          <Image
            source={require('@/assets/images/as8160351f63e34fad9207Cc1c51278019TabIcon.png')}
            style={{ width: 24, height: 24 }}
            resizeMode='contain'
          />
        ),
        onPress: () => {
          NavigationService.navigate('Center');
        },
        size: 56,
        screen: Center,
        iconSize: 24,
        backgroundColor: '#fbbf2d',
        iconColor: '#ffffff',
        anchor: 'inline',
        topOffset: 14,
      }}
    />
  );
};

const defaultTab = (name: string) => (
  <Stack.Screen
    name={name}
    options={{ headerShown: false }}
    component={DefaultTabNavigator}
  />
);

/**
 * AppNavigator component for managing navigation.
 * @returns {JSX.Element} - The AppNavigator component.
 */
const AppNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={Route.INTRODUCTION_FIRST_SCREEN}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerLeft: () => defaultBackButton(),
        headerTitle: '',
        presentation: 'modal',
        header: () => null,
      }}
    >
      <Stack.Screen
        name={Route.ELIGIBILITY_REQUIREMENT}
        component={EligibilityRequirement}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.A_M_P}
        component={AMP}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.HOME_LITE_PROCESSING}
        component={HomeLiteProcessing}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.LITE_HOME_VERIFYING}
        component={LiteHomeVerifying}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.HOME_LITE_MORE_INFO}
        component={HomeLiteMoreInfo}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.VERIFICATION_VERIFIED}
        component={VerificationVerified}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.HOME_LITE}
        component={HomeLite}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.INTRODUCTION_FIRST_SCREEN}
        component={IntroductionFirstScreen}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.DATA_CLASIFICATION_OPEN_ACCOUNT}
        component={DataClasificationOpenAccount}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      {defaultTab(Route.IDENTITY_I_D_CARD_PHOTO)}
      <Stack.Screen
        name={Route.VERIFICATION_MORE_INFO}
        component={VerificationMoreInfo}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.LOGIN_SCREEN}
        component={LoginScreen}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.VERIFICATION_INITIAL_TRANSFER}
        component={VerificationInitialTransfer}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.VERIFICATION_ADDRESS}
        component={VerificationAddress}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.VERIFICATION_SELFIE}
        component={VerificationSelfie}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.VERIFICATION_DETAILS}
        component={VerificationDetails}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.VERIFICATION_EMLPOYEMENT}
        component={VerificationEmlpoyement}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.MARKETING_PREFERENCE}
        component={MarketingPreference}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.REVIEW_AND_CONFIRM_DETAILS}
        component={ReviewAndConfirmDetails}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      <Stack.Screen
        name={Route.VERIFICATION_PURPOSE}
        component={VerificationPurpose}
        options={() => ({ headerStyle: { backgroundColor: '#ffffff' } })}
      />
      {defaultTab(Route.HOME)}
      {defaultTab(Route.DEPOSIT)}
      <Stack.Screen
        name={Route.CENTER}
        component={Center}
        options={() => ({})}
      />
      {defaultTab(Route.FINANCE)}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    paddingHorizontal: 24,
  },
});

export default AppNavigator;
