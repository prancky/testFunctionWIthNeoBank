import React from 'react';
import {
  AppButton,
  AppColumn,
  AppContainer,
  AppText,
} from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { space, text, color, component } from '@/assets';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const Testscreen: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-462579'}
      testID={'3cce7a49-56b6-477b-87a4-2eed83779496'}
      style={sharedStyles.container2}
    >
      <AppColumn
        widgetId={'mainContainer'}
        spacing={space['2']}
        style={sharedStyles.mainContainer}
      >
        <AppText
          widgetId={'ASText-992297'}
          style={[text.label.medium, styles.aSTextStyle]}
        >
          {STRINGS.testScreen.ASText_992297.label}
        </AppText>
        <AppButton
          widgetId={'ASButton-144877'}
          style={styles.aSButtonStyle}
          textStyle={[text.label.medium, styles.aSButtonTextStyle]}
          label={STRINGS.testScreen.ASButton_144877.label}
        />
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  aSTextStyle: {
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  aSButtonStyle: {
    height: component.button.height,
    backgroundColor: color.brand.primary,
    justifyContent: 'center',
    paddingBottom: space['2'],
    paddingLeft: space['3'],
    borderRadius: space['3'],
    alignItems: 'center',
    paddingTop: space['2'],
    flexDirection: 'row',
    paddingRight: space['3'],
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  aSButtonTextStyle: { color: color.brand.onPrimary },
});

export default Testscreen;
