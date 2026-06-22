import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppForm,
  AppImage,
  AppText,
  AppTextField,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, imageSources, text } from '@/assets';

import { ASPasswordTextField } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  LoginScreen_Input_UserName_Input?: string;
  LoginScreen_Input_UserName_Input_2?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const LoginScreen: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  const onPressLoginloginScreenCtaLoginButton = async () => {
    navigation.navigate(Route.HOME_LITE, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-233643'}
      testID={'00571aad-bed9-46f5-991e-94d0805872a7'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-959673'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          LoginScreen_Input_UserName_Input: '',
          LoginScreen_Input_UserName_Input_2: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'LoginScreen_AppBar'}
                leadingIcon={
                  'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/9c051c63-e328-42da-bf39-567ee6f797ad-i3731_1363_917_858.png'
                }
                style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
              />
              <AppColumn
                widgetId={'LoginScreen_Container_Column'}
                spacing={20}
                style={styles.loginScreenContainerColumnStyle}
              >
                <AppColumn
                  widgetId={'LoginScreen_Container_Column_2'}
                  spacing={56}
                  style={styles.loginScreenContainerColumn2Style}
                >
                  <AppImage
                    widgetId={'LoginScreen_Image_LogoAsimage_Image'}
                    source={imageSources.image__uwte}
                    style={styles.loginScreenImageLogoAsimageImageStyle}
                  />
                  <AppColumn
                    widgetId={'LoginScreen_Container_ContentFormLayout_Column'}
                    spacing={20}
                    style={sharedStyles.ampContainerContentColumn}
                  >
                    <AppText
                      widgetId={'LoginScreen_Label_WelcomeBack_Text'}
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.LoginScreen.LoginScreen_Label_WelcomeBack_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.LoginScreen.LoginScreen_Label_WelcomeBack_Text
                          .label
                      }
                    </AppText>
                    <AppTextField
                      widgetId={'LoginScreen_Input_UserName_Input'}
                      style={sharedStyles.loginScreenInputUserNameInput}
                      placeholder={
                        STRINGS.LoginScreen.LoginScreen_Input_UserName_Input
                          .placeholder
                      }
                    />
                    <ASPasswordTextField
                      placeholderTextColor={color.text.tertiary}
                      borderErrorColor={color.status.danger}
                      borderActiveColor={color.brand.primary}
                      secureTextEntry={true}
                      autoComplete={'off'}
                      autoCapitalize={'none'}
                      isShowSuffixIcon={true}
                      keyboardType={'default'}
                      allowFontScaling={false}
                      name={'LoginScreen_Input_UserName_Input_2'}
                      style={sharedStyles.loginScreenInputUserNameInput}
                      suffixIconStyles={
                        styles.loginScreenInputUserNameInput2SuffixIconStyles
                      }
                      labelTextStyle={[
                        text.label.medium,
                        sharedStyles.loginScreenInputUserNameInput2LabelText,
                      ]}
                      inputTextStyle={[
                        text.body.medium,
                        sharedStyles.homeInputActivateYourVirtualCardNowInputInputText,
                      ]}
                      placeholderTextStyle={
                        sharedStyles.homeInputActivateYourVirtualCardNowInputPlaceholderText
                      }
                      errorMessageTextStyle={
                        sharedStyles.homeInputActivateYourVirtualCardNowInputErrorMessageText
                      }
                      contentContainerStyle={
                        sharedStyles.homeInputActivateYourVirtualCardNowInputContentContainer
                      }
                      prefixTextStyle={[
                        text.body.medium,
                        sharedStyles.homeInputActivateYourVirtualCardNowInputPrefixText,
                      ]}
                      placeholder={
                        STRINGS.LoginScreen.LoginScreen_Input_UserName_Input_2
                          .placeholder
                      }
                      testId={'LoginScreen_Input_UserName_Input_2'}
                    />
                    <AppText
                      widgetId={'LoginScreen_Label_TroubleLoggingIn_Text'}
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        styles.loginScreenLabelTroubleLoggingInTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.LoginScreen
                          .LoginScreen_Label_TroubleLoggingIn_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.LoginScreen
                          .LoginScreen_Label_TroubleLoggingIn_Text.label
                      }
                    </AppText>
                  </AppColumn>
                </AppColumn>
                <AppButton
                  widgetId={'LoginScreen_Cta_Login_Button'}
                  onPress={() => {
                    onPressLoginloginScreenCtaLoginButton({});
                  }}
                  style={sharedStyles.ampCtaContinueButton}
                  accessibilityLabel={
                    STRINGS.LoginScreen.LoginScreen_Cta_Login_Button
                      .accessibilityLabel
                  }
                  label={STRINGS.LoginScreen.LoginScreen_Cta_Login_Button.label}
                />
              </AppColumn>
            </>
          );
        }}
      </AppForm>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  loginScreenContainerColumnStyle: {
    alignItems: 'center',
    paddingBottom: 16,
    paddingLeft: 24,
    flex: 1,
    paddingRight: 24,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  loginScreenContainerColumn2Style: {
    alignSelf: 'stretch',
    paddingTop: 20,
    alignItems: 'center',
    flex: 1,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  loginScreenImageLogoAsimageImageStyle: {
    height: 32,
    aspectRatio: 6.7188,
    width: '65.7%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  loginScreenInputUserNameInput2SuffixIconStyles: {
    iconSize: 20,
    color: '#fbbf2d',
  },
  loginScreenLabelTroubleLoggingInTextStyle: {
    lineHeight: 20,
    fontSize: 14,
    fontWeight: 600,
    alignSelf: 'stretch',
    color: '#231f20',
    fontFamily: 'Outfit-600-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default LoginScreen;
