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
  VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDown?: string;
  VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_2?: string;
  VerificationEmlpoyement_Input_NameOfEmployerCompany_Input?: string;
  VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_3?: string;
  VerificationEmlpoyement_Input_UserName_Input?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const VerificationEmlpoyement: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  const onPressContinueverificationEmlpoyementCtaContinueButton = async () => {
    navigation.navigate(Route.VERIFICATION_PURPOSE, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-843313'}
      testID={'9c49d4f7-740d-4930-9602-4131b3e63c76'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-963170'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDown: '',
          VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_2: '',
          VerificationEmlpoyement_Input_NameOfEmployerCompany_Input: '',
          VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_3: '',
          VerificationEmlpoyement_Input_UserName_Input: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={
                  'VerificationEmlpoyement_AppBar_AppBarAsappHeader_AppBar'
                }
                leadingIcon={
                  'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/90b65b5e-a0df-4c60-b013-3d991e6d7c1a-i3734_1458_917_858.png'
                }
                style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
              />
              <AppColumn
                widgetId={'VerificationEmlpoyement_Container_Column'}
                spacing={20}
                style={sharedStyles.ampContainerColumn}
              >
                <AppColumn
                  widgetId={
                    'VerificationEmlpoyement_Container_ProgressBar_Column'
                  }
                  spacing={8}
                  style={
                    sharedStyles.identityIdcardPhotoContainerProgressBarColumn
                  }
                >
                  <AppText
                    widgetId={'VerificationEmlpoyement_Label_AboutYou_Text'}
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      sharedStyles.identityIdcardPhotoLabelVerifyYourIdentityText,
                    ]}
                    accessibilityLabel={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Label_AboutYou_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Label_AboutYou_Text.label
                    }
                  </AppText>
                  <AppProgressBar
                    widgetId={
                      'VerificationEmlpoyement_Container_ProgressBarAsp_ProgressBar'
                    }
                    style={
                      sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={
                    'VerificationEmlpoyement_Container_ContentFormLayout_Column'
                  }
                  spacing={20}
                  style={sharedStyles.ampContainerContentColumn}
                >
                  <AppColumn
                    widgetId={'VerificationEmlpoyement_Container_Title_Column'}
                    spacing={4}
                    style={sharedStyles.identityIdcardPhotoContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'VerificationEmlpoyement_Label_EmploymentDetails_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationEmlpoyement
                          .VerificationEmlpoyement_Label_EmploymentDetails_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationEmlpoyement
                          .VerificationEmlpoyement_Label_EmploymentDetails_Text
                          .label
                      }
                    </AppText>
                    <AppText
                      widgetId={
                        'VerificationEmlpoyement_Label_TellUsMoreAboutWhatYouDo_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationEmlpoyement
                          .VerificationEmlpoyement_Label_TellUsMoreAboutWhatYouDo_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationEmlpoyement
                          .VerificationEmlpoyement_Label_TellUsMoreAboutWhatYouDo_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppDropDown
                    widgetId={
                      'VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDown'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDown
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDown
                        .searchPlaceholder
                    }
                  />
                  <AppDropDown
                    widgetId={
                      'VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_2'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_2
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_2
                        .searchPlaceholder
                    }
                  />
                  <AppTextField
                    widgetId={
                      'VerificationEmlpoyement_Input_NameOfEmployerCompany_Input'
                    }
                    style={sharedStyles.loginScreenInputUserNameInput}
                    placeholder={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Input_NameOfEmployerCompany_Input
                        .placeholder
                    }
                  />
                  <AppDropDown
                    widgetId={
                      'VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_3'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_3
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Container_DropdownFieldAsdr_DropDo_3
                        .searchPlaceholder
                    }
                  />
                  <AppTextField
                    widgetId={'VerificationEmlpoyement_Input_UserName_Input'}
                    style={sharedStyles.loginScreenInputUserNameInput}
                    placeholder={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Input_UserName_Input
                        .placeholder
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'VerificationEmlpoyement_Container_Action_Column'}
                  spacing={8}
                  style={sharedStyles.ampContainerTitleColumn}
                >
                  <AppRow
                    widgetId={'VerificationEmlpoyement_Container_Content_Row'}
                    spacing={8}
                    style={sharedStyles.identityIdcardPhotoContainerContentRow}
                  >
                    <AppImage
                      widgetId={'VerificationEmlpoyement_Image_GppGood_Image'}
                      source={imageSources.image__7yspf}
                      style={sharedStyles.homeImageVisibilityImage}
                    />
                    <AppText
                      widgetId={
                        'VerificationEmlpoyement_Label_YourDataIsProtectedAccord_Text'
                      }
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.identityIdcardPhotoLabelYourDataIsProtectedAccordText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationEmlpoyement
                          .VerificationEmlpoyement_Label_YourDataIsProtectedAccord_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationEmlpoyement
                          .VerificationEmlpoyement_Label_YourDataIsProtectedAccord_Text
                          .label
                      }
                    </AppText>
                  </AppRow>
                  <AppButton
                    widgetId={'VerificationEmlpoyement_Cta_Continue_Button'}
                    onPress={() => {
                      onPressContinueverificationEmlpoyementCtaContinueButton(
                        {},
                      );
                    }}
                    style={sharedStyles.ampCtaContinueButton}
                    accessibilityLabel={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Cta_Continue_Button
                        .accessibilityLabel
                    }
                    label={
                      STRINGS.VerificationEmlpoyement
                        .VerificationEmlpoyement_Cta_Continue_Button.label
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

export default VerificationEmlpoyement;
