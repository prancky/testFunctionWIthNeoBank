import React from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppImage,
  AppRow,
  AppText,
} from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { imageSources, space, text } from '@/assets';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const IntroductionFirstScreen: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressAlreadyauserLLoginintroductionFirstScreenCtaLoginButton =
    async () => {
      navigation.navigate(Route.LOGIN_SCREEN, {});
    };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-636562'}
      testID={'f8e0ec8d-4574-4f35-a9b3-e74f4c2e38e6'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'IntroductionFirstScreen_AppBar_Header_AppBar'}
        variant={'transparent'}
        leadingShow={false}
        leadingIconSize={24}
        leadingIcon={'arrow_back'}
        style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
      >
        <AppImage
          widgetId={'IntroductionFirstScreen_Image_Settings_Image'}
          source={imageSources.image__bbpbm}
          style={sharedStyles.homeImageVisibilityImage}
        />
      </AppAppBar>
      <AppColumn
        widgetId={'IntroductionFirstScreen_Container_Column'}
        spacing={space['2']}
        style={sharedStyles.homeLiteProcessingContainerColumn}
      >
        <AppColumn
          widgetId={'IntroductionFirstScreen_Container_Content_Column'}
          spacing={space['2']}
          style={styles.introductionFirstScreenContainerContentColumnStyle}
        >
          <AppColumn
            widgetId={'IntroductionFirstScreen_Container_Title_Column'}
            spacing={space['2']}
            style={styles.introductionFirstScreenContainerTitleColumnStyle}
          >
            <AppText
              widgetId={'IntroductionFirstScreen_Label_UserName_Text'}
              numberOfLines={1}
              style={[
                text.label.medium,
                styles.introductionFirstScreenLabelUserNameTextStyle,
              ]}
              accessibilityLabel={
                STRINGS.IntroductionFirstScreen
                  .IntroductionFirstScreen_Label_UserName_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.IntroductionFirstScreen
                  .IntroductionFirstScreen_Label_UserName_Text.label
              }
            </AppText>
            <AppText
              widgetId={
                'IntroductionFirstScreen_Label_EasyTransparentAndSecure_Text'
              }
              numberOfLines={1}
              style={[
                text.label.medium,
                styles.introductionFirstScreenLabelEasyTransparentAndSecureTextStyle,
              ]}
              accessibilityLabel={
                STRINGS.IntroductionFirstScreen
                  .IntroductionFirstScreen_Label_EasyTransparentAndSecure_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.IntroductionFirstScreen
                  .IntroductionFirstScreen_Label_EasyTransparentAndSecure_Text
                  .label
              }
            </AppText>
          </AppColumn>
          <AppImage
            widgetId={'IntroductionFirstScreen_Background_ImageAsimage_Image'}
            source={imageSources.image__wj8al}
            style={sharedStyles.homeLiteBackgroundImageAsimageImage}
          />
          <AppRow
            widgetId={'IntroductionFirstScreen_Container_DotIndicator_Row'}
            spacing={4}
            style={styles.introductionFirstScreenContainerDotIndicatorRowStyle}
          >
            <AppColumn
              widgetId={'IntroductionFirstScreen_Container_Column_2'}
              spacing={space['2']}
              style={styles.introductionFirstScreenContainerColumn2Style}
            />
            <AppColumn
              widgetId={'IntroductionFirstScreen_Container_Column_3'}
              spacing={space['2']}
              style={styles.introductionFirstScreenContainerColumn3Style}
            />
            <AppColumn
              widgetId={'IntroductionFirstScreen_Container_Column_4'}
              spacing={space['2']}
              style={styles.introductionFirstScreenContainerColumn4Style}
            />
          </AppRow>
        </AppColumn>
        <AppColumn
          widgetId={'IntroductionFirstScreen_Container_Action_Column'}
          spacing={space['2']}
          style={sharedStyles.ampContainerTitleColumn}
        >
          <AppButton
            widgetId={'IntroductionFirstScreen_Cta_Login_Button'}
            onPress={() => {
              onPressAlreadyauserLLoginintroductionFirstScreenCtaLoginButton(
                {},
              );
            }}
            style={styles.introductionFirstScreenCtaLoginButtonStyle}
            accessibilityLabel={
              STRINGS.IntroductionFirstScreen
                .IntroductionFirstScreen_Cta_Login_Button.accessibilityLabel
            }
            label={
              STRINGS.IntroductionFirstScreen
                .IntroductionFirstScreen_Cta_Login_Button.label
            }
          />
          <AppButton
            widgetId={'IntroductionFirstScreen_Cta_Register_Button'}
            style={sharedStyles.ampCtaContinueButton}
            accessibilityLabel={
              STRINGS.IntroductionFirstScreen
                .IntroductionFirstScreen_Cta_Register_Button.accessibilityLabel
            }
            label={
              STRINGS.IntroductionFirstScreen
                .IntroductionFirstScreen_Cta_Register_Button.label
            }
          />
        </AppColumn>
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  introductionFirstScreenContainerContentColumnStyle: {
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
    paddingTop: 32,
    justifyContent: 'space-between',
    paddingBottom: 32,
    flexShrink: 1,
  },
  introductionFirstScreenContainerTitleColumnStyle: {
    alignItems: 'center',
    padding: 16,
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 4,
    borderColor: '#fbbf2d',
    flexShrink: 1,
  },
  introductionFirstScreenLabelUserNameTextStyle: {
    alignSelf: 'stretch',
    fontFamily: 'Outfit-500-normal',
    fontWeight: 500,
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    color: '#231f20',
    letterSpacing: 0.64,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  introductionFirstScreenLabelEasyTransparentAndSecureTextStyle: {
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: 'Outfit-400-normal',
    alignSelf: 'stretch',
    color: '#4d4d4d',
    fontSize: 14,
    fontWeight: 400,
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  introductionFirstScreenContainerDotIndicatorRowStyle: {
    height: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  introductionFirstScreenContainerColumn2Style: {
    overflow: 'hidden',
    backgroundColor: '#ffcc00',
    borderRadius: 100,
    minHeight: 16,
    width: 16,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  introductionFirstScreenContainerColumn3Style: {
    minHeight: 11,
    width: 11,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#dddddd',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  introductionFirstScreenContainerColumn4Style: {
    backgroundColor: '#dddddd',
    width: 8,
    minHeight: 8,
    borderRadius: 100,
    overflow: 'hidden',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  introductionFirstScreenCtaLoginButtonStyle: {
    paddingBottom: 0,
    backgroundColor: 'transparent',
    height: 52,
    alignSelf: 'stretch',
    paddingTop: 0,
    paddingRight: 24,
    lineHeight: 20,
    paddingLeft: 24,
    textAlign: 'left',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
});

export default IntroductionFirstScreen;
