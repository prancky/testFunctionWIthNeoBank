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
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { imageSources, text, radius } from '@/assets';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  VerificationDetails_Container_DropdownFieldAsdropDo_DropDown?: string;
  VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_2?: string;
  VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_3?: string;
  VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_4?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const VerificationDetails: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  const onPressContinueverificationDetailsCtaContinueButton = async () => {
    navigation.navigate(Route.VERIFICATION_EMLPOYEMENT, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-884509'}
      testID={'cd9257f4-7a06-4f8c-8188-56407a5f55a8'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-663616'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          VerificationDetails_Container_DropdownFieldAsdropDo_DropDown: '',
          VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_2: '',
          VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_3: '',
          VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_4: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'VerificationDetails_AppBar_AppBarAsappHeader_AppBar'}
                leadingIcon={
                  'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/96406627-9098-4630-af0a-421dc1baada5-i3734_1450_917_858.png'
                }
                style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
              />
              <AppColumn
                widgetId={'VerificationDetails_Container_Column'}
                spacing={20}
                style={sharedStyles.ampContainerColumn}
              >
                <AppColumn
                  widgetId={'VerificationDetails_Container_ProgressBar_Column'}
                  spacing={8}
                  style={
                    sharedStyles.identityIdcardPhotoContainerProgressBarColumn
                  }
                >
                  <AppText
                    widgetId={'VerificationDetails_Label_AboutYou_Text'}
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      sharedStyles.identityIdcardPhotoLabelVerifyYourIdentityText,
                    ]}
                    accessibilityLabel={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Label_AboutYou_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.VerificationDetails
                        .VerificationDetails_Label_AboutYou_Text.label
                    }
                  </AppText>
                  <AppProgressBar
                    widgetId={
                      'VerificationDetails_Container_ProgressBarAsprogr_ProgressBar'
                    }
                    style={
                      sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={
                    'VerificationDetails_Container_ContentFormLayout_Column'
                  }
                  spacing={20}
                  style={sharedStyles.ampContainerContentColumn}
                >
                  <AppColumn
                    widgetId={'VerificationDetails_Container_Title_Column'}
                    spacing={4}
                    style={sharedStyles.identityIdcardPhotoContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'VerificationDetails_Label_PersonalDetails_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationDetails
                          .VerificationDetails_Label_PersonalDetails_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationDetails
                          .VerificationDetails_Label_PersonalDetails_Text.label
                      }
                    </AppText>
                    <AppText
                      widgetId={
                        'VerificationDetails_Label_TellUsMoreAboutYou_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationDetails
                          .VerificationDetails_Label_TellUsMoreAboutYou_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationDetails
                          .VerificationDetails_Label_TellUsMoreAboutYou_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppDropDown
                    widgetId={
                      'VerificationDetails_Container_DropdownFieldAsdropDo_DropDown'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Container_DropdownFieldAsdropDo_DropDown
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Container_DropdownFieldAsdropDo_DropDown
                        .searchPlaceholder
                    }
                  />
                  <AppDropDown
                    widgetId={
                      'VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_2'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_2
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_2
                        .searchPlaceholder
                    }
                  />
                  <AppDropDown
                    widgetId={
                      'VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_3'
                    }
                    options={[]}
                    placeholder={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_3
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_3
                        .searchPlaceholder
                    }
                  />
                  <AppDropDown
                    widgetId={
                      'VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_4'
                    }
                    options={[]}
                    containerStyle={
                      styles.verificationDetailsContainerDropdownFieldAsdropDoDropDo4ContainerStyle
                    }
                    placeholder={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_4
                        .placeholder
                    }
                    searchPlaceholder={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Container_DropdownFieldAsdropDo_DropDo_4
                        .searchPlaceholder
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'VerificationDetails_Container_Action_Column'}
                  spacing={8}
                  style={sharedStyles.ampContainerTitleColumn}
                >
                  <AppRow
                    widgetId={'VerificationDetails_Container_Content_Row'}
                    spacing={8}
                    style={sharedStyles.identityIdcardPhotoContainerContentRow}
                  >
                    <AppImage
                      widgetId={'VerificationDetails_Image_GppGood_Image'}
                      source={imageSources.image__erhu}
                      style={sharedStyles.homeImageVisibilityImage}
                    />
                    <AppText
                      widgetId={
                        'VerificationDetails_Label_YourDataIsProtectedAccord_Text'
                      }
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.identityIdcardPhotoLabelYourDataIsProtectedAccordText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationDetails
                          .VerificationDetails_Label_YourDataIsProtectedAccord_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationDetails
                          .VerificationDetails_Label_YourDataIsProtectedAccord_Text
                          .label
                      }
                    </AppText>
                  </AppRow>
                  <AppButton
                    widgetId={'VerificationDetails_Cta_Continue_Button'}
                    onPress={() => {
                      onPressContinueverificationDetailsCtaContinueButton({});
                    }}
                    style={sharedStyles.ampCtaContinueButton}
                    accessibilityLabel={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Cta_Continue_Button
                        .accessibilityLabel
                    }
                    label={
                      STRINGS.VerificationDetails
                        .VerificationDetails_Cta_Continue_Button.label
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

const styles = StyleSheet.create({
  verificationDetailsContainerDropdownFieldAsdropDoDropDo4ContainerStyle: {
    borderColor: '#c4c4c4',
    paddingLeft: 14,
    backgroundColor: '#ffffff',
    paddingBottom: 12,
    paddingTop: 12,
    height: 44,
    paddingRight: 14,
    borderWidth: 1,
    borderRadius: radius.sm,
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    justifyContent: 'space-between',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
});

export default VerificationDetails;
