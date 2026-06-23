import React from 'react';
import { AppColumn, AppContainer } from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { space } from '@/assets';

import { StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { useClearHeaderActions } from '@/utils/screen.effects';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const NewScreen01: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-462579'}
      testID={'db924e1f-712d-4e3a-8554-28136182ae7e'}
      style={sharedStyles.container2}
    >
      <AppColumn
        widgetId={'mainContainer'}
        spacing={space['2']}
        style={sharedStyles.mainContainer}
      />
    </AppContainer>
  );
};

const styles = StyleSheet.create({});

export default NewScreen01;
