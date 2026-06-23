import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppForm,
  AppImage,
  AppRow,
  AppText,
  AppTextField,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, imageSources, component, text } from '@/assets';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  VerificationInitialTransfer_Input_BankName_Input?: string;
  VerificationInitialTransfer_Input_MyDepositAccountNumb_Input?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const VerificationInitialTransfer: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  const onPressDoneverificationInitialTransferCtaDoneButton = async () => {
    navigation.navigate(Route.HOME, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-386217'}
      testID={'cfb2b0bd-9132-4754-8f2c-d23c523c9691'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-396063'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          VerificationInitialTransfer_Input_BankName_Input: '',
          VerificationInitialTransfer_Input_MyDepositAccountNumb_Input: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={
                  'VerificationInitialTransfer_AppBar_AppBarAsappHeader_AppBar'
                }
                leadingIcon={
                  'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/37db2b6e-cc21-49aa-81b0-fe52875fe580-i3734_1498_917_858.png'
                }
                style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
              />
              <AppColumn
                widgetId={'VerificationInitialTransfer_Container_Column'}
                spacing={20}
                style={sharedStyles.ampContainerColumn}
              >
                <AppColumn
                  widgetId={
                    'VerificationInitialTransfer_Container_ContentFormLayo_Column'
                  }
                  spacing={20}
                  style={sharedStyles.ampContainerContentColumn}
                >
                  <AppColumn
                    widgetId={
                      'VerificationInitialTransfer_Container_Title_Column'
                    }
                    spacing={4}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'VerificationInitialTransfer_Label_MakeAnInitialTransfer_Text'
                      }
                      numberOfLines={3}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationInitialTransfer
                          .VerificationInitialTransfer_Label_MakeAnInitialTransfer_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationInitialTransfer
                          .VerificationInitialTransfer_Label_MakeAnInitialTransfer_Text
                          .label
                      }
                    </AppText>
                    <AppText
                      widgetId={'VerificationInitialTransfer_Body_Text'}
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationInitialTransfer
                          .VerificationInitialTransfer_Body_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationInitialTransfer
                          .VerificationInitialTransfer_Body_Text.label
                      }
                    </AppText>
                  </AppColumn>
                  <AppTextField
                    widgetId={
                      'VerificationInitialTransfer_Input_BankName_Input'
                    }
                    style={sharedStyles.loginScreenInputUserNameInput}
                    placeholder={
                      STRINGS.VerificationInitialTransfer
                        .VerificationInitialTransfer_Input_BankName_Input
                        .placeholder
                    }
                  />
                  <AppTextField
                    widgetId={
                      'VerificationInitialTransfer_Input_MyDepositAccountNumb_Input'
                    }
                    style={sharedStyles.loginScreenInputUserNameInput}
                    placeholder={
                      STRINGS.VerificationInitialTransfer
                        .VerificationInitialTransfer_Input_MyDepositAccountNumb_Input
                        .placeholder
                    }
                  />
                  <AppColumn
                    widgetId={
                      'VerificationInitialTransfer_Container_List_Column'
                    }
                    spacing={8}
                    style={sharedStyles.ampContainerContentColumn}
                  >
                    <AppColumn
                      widgetId={
                        'VerificationInitialTransfer_Container_Content_Column'
                      }
                      spacing={4}
                      style={
                        styles.verificationInitialTransferContainerContentColumnStyle
                      }
                    >
                      <AppText
                        widgetId={
                          'VerificationInitialTransfer_Label_MinimumInitialTransfe_Text'
                        }
                        numberOfLines={1}
                        style={[
                          text.label.medium,
                          sharedStyles.dataClasificationOpenAccountBodyText,
                        ]}
                        accessibilityLabel={
                          STRINGS.VerificationInitialTransfer
                            .VerificationInitialTransfer_Label_MinimumInitialTransfe_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.VerificationInitialTransfer
                            .VerificationInitialTransfer_Label_MinimumInitialTransfe_Text
                            .label
                        }
                      </AppText>
                      <AppRow
                        widgetId={
                          'VerificationInitialTransfer_Container_Content_Row'
                        }
                        spacing={4}
                        style={
                          styles.verificationInitialTransferContainerContentRowStyle
                        }
                      >
                        <AppText
                          widgetId={
                            'VerificationInitialTransfer_Label_Sgd_Text'
                          }
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.verificationInitialTransferLabelSgdTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.VerificationInitialTransfer
                              .VerificationInitialTransfer_Label_Sgd_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.VerificationInitialTransfer
                              .VerificationInitialTransfer_Label_Sgd_Text.label
                          }
                        </AppText>
                        <AppText
                          widgetId={'VerificationInitialTransfer_Label_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.verificationInitialTransferLabelTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.VerificationInitialTransfer
                              .VerificationInitialTransfer_Label_Text
                              .accessibilityLabel
                          }
                        >
                          {
                            STRINGS.VerificationInitialTransfer
                              .VerificationInitialTransfer_Label_Text.label
                          }
                        </AppText>
                      </AppRow>
                    </AppColumn>
                    <AppButton
                      widgetId={
                        'VerificationInitialTransfer_Cta_InstantTransferViaPay_Button'
                      }
                      icon={
                        'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/e09b9dca-648f-4f43-9851-efcca4500dfd-3088_7640.png'
                      }
                      style={
                        styles.verificationInitialTransferCtaInstantTransferViaPayButtonStyle
                      }
                      iconStyles={
                        styles.verificationInitialTransferCtaInstantTransferViaPayButtonIconStyles
                      }
                      textStyle={[
                        text.label.medium,
                        styles.verificationInitialTransferCtaInstantTransferViaPayButtonTextStyle,
                      ]}
                      label={
                        STRINGS.VerificationInitialTransfer
                          .VerificationInitialTransfer_Cta_InstantTransferViaPay_Button
                          .label
                      }
                      accessibilityLabel={
                        STRINGS.VerificationInitialTransfer
                          .VerificationInitialTransfer_Cta_InstantTransferViaPay_Button
                          .accessibilityLabel
                      }
                    />
                    <AppRow
                      widgetId={
                        'VerificationInitialTransfer_Container_Card_Row'
                      }
                      spacing={8}
                      style={
                        sharedStyles.dataClasificationOpenAccountContainerCardRow
                      }
                    >
                      <AppImage
                        widgetId={
                          'VerificationInitialTransfer_Image_Verified_Image'
                        }
                        source={imageSources.image__9m9uu}
                        style={
                          sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
                        }
                      />
                      <AppText
                        widgetId={
                          'VerificationInitialTransfer_Label_FromYourNonJointBankA_Text'
                        }
                        numberOfLines={2}
                        style={[
                          text.label.medium,
                          sharedStyles.eligibilityRequirementLabelNotAcitizenResidentAndOrText,
                        ]}
                        accessibilityLabel={
                          STRINGS.VerificationInitialTransfer
                            .VerificationInitialTransfer_Label_FromYourNonJointBankA_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.VerificationInitialTransfer
                            .VerificationInitialTransfer_Label_FromYourNonJointBankA_Text
                            .label
                        }
                      </AppText>
                    </AppRow>
                    <AppRow
                      widgetId={
                        'VerificationInitialTransfer_Container_Card_Row_2'
                      }
                      spacing={8}
                      style={
                        sharedStyles.dataClasificationOpenAccountContainerCardRow
                      }
                    >
                      <AppImage
                        widgetId={
                          'VerificationInitialTransfer_Image_Verified_Image_2'
                        }
                        source={imageSources.image__0mbf0}
                        style={
                          sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
                        }
                      />
                      <AppText
                        widgetId={
                          'VerificationInitialTransfer_Label_AminimumBalanceOfSgd2_Text'
                        }
                        numberOfLines={2}
                        style={[
                          text.label.medium,
                          sharedStyles.eligibilityRequirementLabelNotAcitizenResidentAndOrText,
                        ]}
                        accessibilityLabel={
                          STRINGS.VerificationInitialTransfer
                            .VerificationInitialTransfer_Label_AminimumBalanceOfSgd2_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.VerificationInitialTransfer
                            .VerificationInitialTransfer_Label_AminimumBalanceOfSgd2_Text
                            .label
                        }
                      </AppText>
                    </AppRow>
                  </AppColumn>
                </AppColumn>
                <AppButton
                  widgetId={'VerificationInitialTransfer_Cta_Done_Button'}
                  onPress={() => {
                    onPressDoneverificationInitialTransferCtaDoneButton({});
                  }}
                  style={sharedStyles.ampCtaContinueButton}
                  accessibilityLabel={
                    STRINGS.VerificationInitialTransfer
                      .VerificationInitialTransfer_Cta_Done_Button
                      .accessibilityLabel
                  }
                  label={
                    STRINGS.VerificationInitialTransfer
                      .VerificationInitialTransfer_Cta_Done_Button.label
                  }
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
  verificationInitialTransferContainerContentColumnStyle: {
    alignSelf: 'stretch',
    padding: 16,
    overflow: 'hidden',
    backgroundColor: '#faf9f5',
    borderRadius: 4,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  verificationInitialTransferContainerContentRowStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 24,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  verificationInitialTransferLabelSgdTextStyle: {
    width: 37,
    fontSize: 14,
    color: '#231f20',
    fontWeight: 600,
    fontFamily: 'Outfit-600-normal',
    textAlignVertical: 'center',
    lineHeight: 20,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  verificationInitialTransferLabelTextStyle: {
    fontWeight: 600,
    fontFamily: 'Outfit-600-normal',
    color: '#231f20',
    width: 66,
    lineHeight: 24,
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  verificationInitialTransferCtaInstantTransferViaPayButtonStyle: {
    alignSelf: 'stretch',
    paddingBottom: 0,
    paddingLeft: 0,
    lineHeight: 20,
    textAlign: 'left',
    borderRadius: 4,
    backgroundColor: '#faf9f5',
    paddingTop: 0,
    padding: 16,
    paddingRight: 0,
    height: component.button.height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  verificationInitialTransferCtaInstantTransferViaPayButtonIconStyles: {
    marginRight: 8,
    iconSize: 24,
    color: color.brand.onPrimary,
  },
  verificationInitialTransferCtaInstantTransferViaPayButtonTextStyle: {
    color: '#231f20',
    fontWeight: 500,
    fontFamily: 'Outfit-500-normal',
    fontSize: 14,
  },
});

export default VerificationInitialTransfer;
