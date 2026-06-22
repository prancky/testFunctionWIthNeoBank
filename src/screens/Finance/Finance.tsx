import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet } from 'react-native';

import { useClearHeaderActions } from '@/utils/screen.effects';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const Finance: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return <></>;
};

const styles = StyleSheet.create({});

export default Finance;
