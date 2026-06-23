import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppDropDown,
  AppForm,
  AppImage,
  AppProgressBar,
  AppRow,
  AppText,
  AppTextField,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { imageSources, text } from '@/assets';

import { StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  VerificationAddress_Input_MailingAddressLine1_Input?: string;
  VerificationAddress_Input_MailingAddressLine2_Input?: string;
  VerificationAddress_Input_Postalcode_Input?: string;
  VerificationAddress_Container_DropdownFieldAsdropDo_DropDown?: string;
  VerificationAddress_Container_DropdownFieldAsdropDo_DropDo_2?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const VerificationAddress: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  const onPressContinueverificationAddressCtaContinueButton = async () => {
    navigation.navigate(Route.VERIFICATION_SELFIE, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-861340'}
      testID={'c6323571-23da-4d1c-b075-a967be93ca2e'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-498105'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          VerificationAddress_Input_MailingAddressLine1_Input: '',
          VerificationAddress_Input_MailingAddressLine2_Input: '',
          VerificationAddress_Input_Postalcode_Input: '',
          VerificationAddress_Container_DropdownFieldAsdropDo_DropDown: '',
          VerificationAddress_Container_DropdownFieldAsdropDo_DropDo_2: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'VerificationAddress_AppBar_AppBarAsappHeader_AppBar'}
                leadingIcon={
                  'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/f78dbde4-a3c5-49d1-acc2-357bf3e29ed2-i3734_1434_917_858.png'
                }
                style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
              />
              <AppColumn
                widgetId={'VerificationAddress_Container_Column'}
                spacing={20}
                style={sharedStyles.ampContainerColumn}
              >
                <AppColumn
                  widgetId={'VerificationAddress_Container_ProgressBar_Column'}
                  spacing={8}
                  style={
                    sharedStyles.identityIdcardPhotoContainerProgressBarColumn
                  }
                >
                  <AppText
                    widgetId={
                      'VerificationAddress_Label_VerifyYourIdentity_Text'
                    }
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      sharedStyles.identityIdcardPhotoLabelVerifyYourIdentityText,
                    ]}
                    accessibilityLabel={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Label_VerifyYourIdentity_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.VerificationAddress
                        .VerificationAddress_Label_VerifyYourIdentity_Text.label
                    }
                  </AppText>
                  <AppProgressBar
                    widgetId={
                      'VerificationAddress_Container_ProgressBarAsprogr_ProgressBar'
                    }
                    style={
                      sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={
                    'VerificationAddress_Container_ContentFormLayout_Column'
                  }
                  spacing={20}
                  style={sharedStyles.ampContainerContentColumn}
                >
                  <AppColumn
                    widgetId={'VerificationAddress_Container_Title_Column'}
                    spacing={4}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'VerificationAddress_Label_ResidentialAddress_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationAddress
                          .VerificationAddress_Label_ResidentialAddress_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationAddress
                          .VerificationAddress_Label_ResidentialAddress_Text
                          .label
                      }
                    </AppText>
                    <AppText
                      widgetId={
                        'VerificationAddress_Label_EnterYourResidentialAddress_Text'
                      }
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationAddress
                          .VerificationAddress_Label_EnterYourResidentialAddress_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationAddress
                          .VerificationAddress_Label_EnterYourResidentialAddress_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppTextField
                    widgetId={
                      'VerificationAddress_Input_MailingAddressLine1_Input'
                    }
                    style={sharedStyles.loginScreenInputUserNameInput}
                    placeholder={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Input_MailingAddressLine1_Input
                        .placeholder
                    }
                  />
                  <AppTextField
                    widgetId={
                      'VerificationAddress_Input_MailingAddressLine2_Input'
                    }
                    style={sharedStyles.loginScreenInputUserNameInput}
                    placeholder={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Input_MailingAddressLine2_Input
                        .placeholder
                    }
                  />
                  <AppTextField
                    widgetId={'VerificationAddress_Input_Postalcode_Input'}
                    style={sharedStyles.loginScreenInputUserNameInput}
                    placeholder={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Input_Postalcode_Input.placeholder
                    }
                  />
                  <AppDropDown
                    widgetId={
                      'VerificationAddress_Container_DropdownFieldAsdropDo_DropDown'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Container_DropdownFieldAsdropDo_DropDown
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Container_DropdownFieldAsdropDo_DropDown
                        .searchPlaceholder
                    }
                  />
                  <AppDropDown
                    widgetId={
                      'VerificationAddress_Container_DropdownFieldAsdropDo_DropDo_2'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Container_DropdownFieldAsdropDo_DropDo_2
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Container_DropdownFieldAsdropDo_DropDo_2
                        .searchPlaceholder
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'VerificationAddress_Container_Action_Column'}
                  spacing={8}
                  style={sharedStyles.ampContainerTitleColumn}
                >
                  <AppRow
                    widgetId={'VerificationAddress_Container_Content_Row'}
                    spacing={8}
                    style={sharedStyles.identityIdcardPhotoContainerContentRow}
                  >
                    <AppImage
                      widgetId={'VerificationAddress_Image_GppGood_Image'}
                      source={imageSources.image__v7hq}
                      style={sharedStyles.homeImageVisibilityImage}
                    />
                    <AppText
                      widgetId={
                        'VerificationAddress_Label_YourDataIsProtectedAccord_Text'
                      }
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.identityIdcardPhotoLabelYourDataIsProtectedAccordText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationAddress
                          .VerificationAddress_Label_YourDataIsProtectedAccord_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationAddress
                          .VerificationAddress_Label_YourDataIsProtectedAccord_Text
                          .label
                      }
                    </AppText>
                  </AppRow>
                  <AppButton
                    widgetId={'VerificationAddress_Cta_Continue_Button'}
                    onPress={() => {
                      onPressContinueverificationAddressCtaContinueButton({});
                    }}
                    style={sharedStyles.ampCtaContinueButton}
                    accessibilityLabel={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Cta_Continue_Button
                        .accessibilityLabel
                    }
                    label={
                      STRINGS.VerificationAddress
                        .VerificationAddress_Cta_Continue_Button.label
                    }
                  />
                </AppColumn>
              </AppColumn>
            </>
          );
        }}
      </AppForm>
    </AppContainer>
  );
};

const styles = StyleSheet.create({});

export default VerificationAddress;
