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
  VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDown?: string;
  VerificationMoreInfo_Input_OtherSourceOfFunds_Input?: string;
  VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDo_2?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const VerificationMoreInfo: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  const onPressContinueverificationMoreInfoCtaContinueButton = async () => {
    navigation.navigate(Route.LITE_HOME_VERIFYING, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-715971'}
      testID={'042ccecd-a3dc-47ba-b9f4-f0ccf3997c7b'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-136117'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDown: '',
          VerificationMoreInfo_Input_OtherSourceOfFunds_Input: '',
          VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDo_2: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={
                  'VerificationMoreInfo_AppBar_AppBarAsappHeader_AppBar'
                }
                leadingIcon={
                  'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/a838b8f8-de71-46b2-bdf8-c9c174f06bd8-i3734_1490_917_858.png'
                }
                style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
              />
              <AppColumn
                widgetId={'VerificationMoreInfo_Container_Column'}
                spacing={20}
                style={sharedStyles.ampContainerColumn}
              >
                <AppColumn
                  widgetId={'VerificationMoreInfo_Container_ProgressBar_Column'}
                  spacing={8}
                  style={
                    sharedStyles.identityIdcardPhotoContainerProgressBarColumn
                  }
                >
                  <AppText
                    widgetId={'VerificationMoreInfo_Label_YourAccount_Text'}
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      sharedStyles.identityIdcardPhotoLabelVerifyYourIdentityText,
                    ]}
                    accessibilityLabel={
                      STRINGS.VerificationMoreInfo
                        .VerificationMoreInfo_Label_YourAccount_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.VerificationMoreInfo
                        .VerificationMoreInfo_Label_YourAccount_Text.label
                    }
                  </AppText>
                  <AppProgressBar
                    widgetId={
                      'VerificationMoreInfo_Container_ProgressBarAsprog_ProgressBar'
                    }
                    style={
                      sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={
                    'VerificationMoreInfo_Container_ContentFormLayout_Column'
                  }
                  spacing={20}
                  style={sharedStyles.ampContainerContentColumn}
                >
                  <AppColumn
                    widgetId={'VerificationMoreInfo_Container_Title_Column'}
                    spacing={4}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'VerificationMoreInfo_Label_WeNeedFewMoreInformation_Text'
                      }
                      numberOfLines={3}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationMoreInfo
                          .VerificationMoreInfo_Label_WeNeedFewMoreInformation_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationMoreInfo
                          .VerificationMoreInfo_Label_WeNeedFewMoreInformation_Text
                          .label
                      }
                    </AppText>
                    <AppText
                      widgetId={
                        'VerificationMoreInfo_Label_WeNeedThisInformationToPr_Text'
                      }
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationMoreInfo
                          .VerificationMoreInfo_Label_WeNeedThisInformationToPr_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationMoreInfo
                          .VerificationMoreInfo_Label_WeNeedThisInformationToPr_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppDropDown
                    widgetId={
                      'VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDown'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationMoreInfo
                        .VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDown
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationMoreInfo
                        .VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDown
                        .searchPlaceholder
                    }
                  />
                  <AppTextField
                    widgetId={
                      'VerificationMoreInfo_Input_OtherSourceOfFunds_Input'
                    }
                    style={sharedStyles.loginScreenInputUserNameInput}
                    placeholder={
                      STRINGS.VerificationMoreInfo
                        .VerificationMoreInfo_Input_OtherSourceOfFunds_Input
                        .placeholder
                    }
                  />
                  <AppDropDown
                    widgetId={
                      'VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDo_2'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationMoreInfo
                        .VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDo_2
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationMoreInfo
                        .VerificationMoreInfo_Container_DropdownFieldAsdropD_DropDo_2
                        .searchPlaceholder
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'VerificationMoreInfo_Container_Action_Column'}
                  spacing={8}
                  style={sharedStyles.ampContainerTitleColumn}
                >
                  <AppRow
                    widgetId={'VerificationMoreInfo_Container_Content_Row'}
                    spacing={8}
                    style={sharedStyles.identityIdcardPhotoContainerContentRow}
                  >
                    <AppImage
                      widgetId={'VerificationMoreInfo_Image_GppGood_Image'}
                      source={imageSources.image__4g7xl}
                      style={sharedStyles.homeImageVisibilityImage}
                    />
                    <AppText
                      widgetId={
                        'VerificationMoreInfo_Label_YourDataIsProtectedAccord_Text'
                      }
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.identityIdcardPhotoLabelYourDataIsProtectedAccordText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationMoreInfo
                          .VerificationMoreInfo_Label_YourDataIsProtectedAccord_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationMoreInfo
                          .VerificationMoreInfo_Label_YourDataIsProtectedAccord_Text
                          .label
                      }
                    </AppText>
                  </AppRow>
                  <AppButton
                    widgetId={'VerificationMoreInfo_Cta_Continue_Button'}
                    onPress={() => {
                      onPressContinueverificationMoreInfoCtaContinueButton({});
                    }}
                    style={sharedStyles.ampCtaContinueButton}
                    accessibilityLabel={
                      STRINGS.VerificationMoreInfo
                        .VerificationMoreInfo_Cta_Continue_Button
                        .accessibilityLabel
                    }
                    label={
                      STRINGS.VerificationMoreInfo
                        .VerificationMoreInfo_Cta_Continue_Button.label
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

export default VerificationMoreInfo;
