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

import { imageSources, space, text } from '@/assets';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  ReviewAndConfirmDetails_Input_FullName_Input?: string;
  ReviewAndConfirmDetails_Input_IcNumber_Input?: string;
  ReviewAndConfirmDetails_Input_DateOfBirth_Input?: string;
  ReviewAndConfirmDetails_Input_UserName_Input?: string;
  ReviewAndConfirmDetails_Input_UserName_Input_2?: string;
  ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDown?: string;
  ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_2?: string;
  ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_3?: string;
  ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_4?: string;
  ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_5?: string;
  ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_6?: string;
  ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_7?: string;
  ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_8?: string;
  ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_9?: string;
  ReviewAndConfirmDetails_Input_UserName_Input_3?: string;
  ReviewAndConfirmDetails_Input_UserName_Input_4?: string;
  ReviewAndConfirmDetails_Input_CountryOfTaxResidence_Input?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const ReviewAndConfirmDetails: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  const onPressContinuereviewAndConfirmDetailsCtaContinueButton = async () => {
    navigation.navigate(Route.MARKETING_PREFERENCE, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-288371'}
      testID={'d6aedeed-3578-4c57-85e1-7fc3294dd17c'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-258879'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          ReviewAndConfirmDetails_Input_FullName_Input: '',
          ReviewAndConfirmDetails_Input_IcNumber_Input: '',
          ReviewAndConfirmDetails_Input_DateOfBirth_Input: '',
          ReviewAndConfirmDetails_Input_UserName_Input: '',
          ReviewAndConfirmDetails_Input_UserName_Input_2: '',
          ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDown: '',
          ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_2: '',
          ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_3: '',
          ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_4: '',
          ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_5: '',
          ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_6: '',
          ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_7: '',
          ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_8: '',
          ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_9: '',
          ReviewAndConfirmDetails_Input_UserName_Input_3: '',
          ReviewAndConfirmDetails_Input_UserName_Input_4: '',
          ReviewAndConfirmDetails_Input_CountryOfTaxResidence_Input: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={
                  'ReviewAndConfirmDetails_AppBar_AppBarAsappHeader_AppBar'
                }
                leadingIcon={
                  'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/cd5641fd-2c3c-4b64-9199-6593bdb37c31-i3734_1474_917_858.png'
                }
                style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
              />
              <AppColumn
                widgetId={'ReviewAndConfirmDetails_Container_Column'}
                spacing={20}
                style={sharedStyles.ampContainerColumn}
              >
                <AppColumn
                  widgetId={
                    'ReviewAndConfirmDetails_Container_ProgressBar_Column'
                  }
                  spacing={8}
                  style={
                    sharedStyles.identityIdcardPhotoContainerProgressBarColumn
                  }
                >
                  <AppText
                    widgetId={'ReviewAndConfirmDetails_Label_UserName_Text'}
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      sharedStyles.identityIdcardPhotoLabelVerifyYourIdentityText,
                    ]}
                    accessibilityLabel={
                      STRINGS.ReviewAndConfirmDetails
                        .ReviewAndConfirmDetails_Label_UserName_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.ReviewAndConfirmDetails
                        .ReviewAndConfirmDetails_Label_UserName_Text.label
                    }
                  </AppText>
                  <AppProgressBar
                    widgetId={
                      'ReviewAndConfirmDetails_Container_ProgressBarAsp_ProgressBar'
                    }
                    style={
                      sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'ReviewAndConfirmDetails_Container_Content_Column'}
                  spacing={20}
                  style={sharedStyles.ampContainerContentColumn}
                >
                  <AppColumn
                    widgetId={'ReviewAndConfirmDetails_Container_Title_Column'}
                    spacing={4}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'ReviewAndConfirmDetails_Label_ReviewAndConfirmYourDetai_Text'
                      }
                      numberOfLines={3}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Label_ReviewAndConfirmYourDetai_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Label_ReviewAndConfirmYourDetai_Text
                          .label
                      }
                    </AppText>
                    <AppText
                      widgetId={
                        'ReviewAndConfirmDetails_Label_MakeSureThatAllTheDetails_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
                      ]}
                      accessibilityLabel={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Label_MakeSureThatAllTheDetails_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Label_MakeSureThatAllTheDetails_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'ReviewAndConfirmDetails_Container_PersonalDetails_Column'
                    }
                    spacing={20}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppRow
                      widgetId={
                        'ReviewAndConfirmDetails_Container_TitleContainer_Row'
                      }
                      spacing={space['2']}
                      style={
                        styles.reviewAndConfirmDetailsContainerTitleContainerRowStyle
                      }
                    >
                      <AppText
                        widgetId={
                          'ReviewAndConfirmDetails_Label_PersonalDetails_Text'
                        }
                        numberOfLines={0}
                        style={[
                          text.label.medium,
                          styles.reviewAndConfirmDetailsLabelPersonalDetailsTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.ReviewAndConfirmDetails
                            .ReviewAndConfirmDetails_Label_PersonalDetails_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.ReviewAndConfirmDetails
                            .ReviewAndConfirmDetails_Label_PersonalDetails_Text
                            .label
                        }
                      </AppText>
                      <AppImage
                        widgetId={'ReviewAndConfirmDetails_Image_Minus_Image'}
                        source={imageSources.image__czgo}
                        style={sharedStyles.homeImageVisibilityImage}
                      />
                    </AppRow>
                    <AppTextField
                      widgetId={'ReviewAndConfirmDetails_Input_FullName_Input'}
                      style={sharedStyles.loginScreenInputUserNameInput}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Input_FullName_Input
                          .placeholder
                      }
                    />
                    <AppTextField
                      widgetId={'ReviewAndConfirmDetails_Input_IcNumber_Input'}
                      style={sharedStyles.loginScreenInputUserNameInput}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Input_IcNumber_Input
                          .placeholder
                      }
                    />
                    <AppTextField
                      widgetId={
                        'ReviewAndConfirmDetails_Input_DateOfBirth_Input'
                      }
                      style={sharedStyles.loginScreenInputUserNameInput}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Input_DateOfBirth_Input
                          .placeholder
                      }
                    />
                    <AppTextField
                      widgetId={'ReviewAndConfirmDetails_Input_UserName_Input'}
                      style={sharedStyles.loginScreenInputUserNameInput}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Input_UserName_Input
                          .placeholder
                      }
                    />
                    <AppTextField
                      widgetId={
                        'ReviewAndConfirmDetails_Input_UserName_Input_2'
                      }
                      style={sharedStyles.loginScreenInputUserNameInput}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Input_UserName_Input_2
                          .placeholder
                      }
                    />
                    <AppDropDown
                      widgetId={
                        'ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDown'
                      }
                      options={[]}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDown
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDown
                          .searchPlaceholder
                      }
                    />
                    <AppDropDown
                      widgetId={
                        'ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_2'
                      }
                      options={[]}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_2
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_2
                          .searchPlaceholder
                      }
                    />
                    <AppDropDown
                      widgetId={
                        'ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_3'
                      }
                      options={[]}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_3
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_3
                          .searchPlaceholder
                      }
                    />
                    <AppDropDown
                      widgetId={
                        'ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_4'
                      }
                      options={[]}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_4
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_4
                          .searchPlaceholder
                      }
                    />
                    <AppDropDown
                      widgetId={
                        'ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_5'
                      }
                      options={[]}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_5
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_5
                          .searchPlaceholder
                      }
                    />
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'ReviewAndConfirmDetails_Container_EmploymentDetails_Column'
                    }
                    spacing={20}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppRow
                      widgetId={
                        'ReviewAndConfirmDetails_Container_TitleContainer_Row_2'
                      }
                      spacing={space['2']}
                      style={
                        styles.reviewAndConfirmDetailsContainerTitleContainerRow2Style
                      }
                    >
                      <AppText
                        widgetId={
                          'ReviewAndConfirmDetails_Label_EmploymentDetails_Text'
                        }
                        numberOfLines={0}
                        style={[
                          text.label.medium,
                          styles.reviewAndConfirmDetailsLabelEmploymentDetailsTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.ReviewAndConfirmDetails
                            .ReviewAndConfirmDetails_Label_EmploymentDetails_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.ReviewAndConfirmDetails
                            .ReviewAndConfirmDetails_Label_EmploymentDetails_Text
                            .label
                        }
                      </AppText>
                      <AppImage
                        widgetId={'ReviewAndConfirmDetails_Image_Minus_Image_2'}
                        source={imageSources.image__8w1e}
                        style={sharedStyles.homeImageVisibilityImage}
                      />
                    </AppRow>
                    <AppDropDown
                      widgetId={
                        'ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_6'
                      }
                      options={[]}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_6
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_6
                          .searchPlaceholder
                      }
                    />
                    <AppDropDown
                      widgetId={
                        'ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_7'
                      }
                      options={[]}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_7
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_7
                          .searchPlaceholder
                      }
                    />
                    <AppDropDown
                      widgetId={
                        'ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_8'
                      }
                      options={[]}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_8
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_8
                          .searchPlaceholder
                      }
                    />
                    <AppDropDown
                      widgetId={
                        'ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_9'
                      }
                      options={[]}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_9
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Container_DropdownFieldAsdr_DropDo_9
                          .searchPlaceholder
                      }
                    />
                    <AppTextField
                      widgetId={
                        'ReviewAndConfirmDetails_Input_UserName_Input_3'
                      }
                      style={sharedStyles.loginScreenInputUserNameInput}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Input_UserName_Input_3
                          .placeholder
                      }
                    />
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'ReviewAndConfirmDetails_Container_Purpose_Column'
                    }
                    spacing={20}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppRow
                      widgetId={
                        'ReviewAndConfirmDetails_Container_TitleContainer_Row_3'
                      }
                      spacing={space['2']}
                      style={
                        styles.reviewAndConfirmDetailsContainerTitleContainerRow3Style
                      }
                    >
                      <AppText
                        widgetId={
                          'ReviewAndConfirmDetails_Label_AccountOpeningPurpose_Text'
                        }
                        numberOfLines={0}
                        style={[
                          text.label.medium,
                          styles.reviewAndConfirmDetailsLabelAccountOpeningPurposeTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.ReviewAndConfirmDetails
                            .ReviewAndConfirmDetails_Label_AccountOpeningPurpose_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.ReviewAndConfirmDetails
                            .ReviewAndConfirmDetails_Label_AccountOpeningPurpose_Text
                            .label
                        }
                      </AppText>
                      <AppImage
                        widgetId={'ReviewAndConfirmDetails_Image_Minus_Image_3'}
                        source={imageSources.image__wl6ij}
                        style={sharedStyles.homeImageVisibilityImage}
                      />
                    </AppRow>
                    <AppTextField
                      widgetId={
                        'ReviewAndConfirmDetails_Input_UserName_Input_4'
                      }
                      style={sharedStyles.loginScreenInputUserNameInput}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Input_UserName_Input_4
                          .placeholder
                      }
                    />
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'ReviewAndConfirmDetails_Container_TaxDetails_Column'
                    }
                    spacing={20}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppRow
                      widgetId={
                        'ReviewAndConfirmDetails_Container_TitleContainer_Row_4'
                      }
                      spacing={space['2']}
                      style={
                        styles.reviewAndConfirmDetailsContainerTitleContainerRow4Style
                      }
                    >
                      <AppText
                        widgetId={
                          'ReviewAndConfirmDetails_Label_TaxDetails_Text'
                        }
                        numberOfLines={0}
                        style={[
                          text.label.medium,
                          styles.reviewAndConfirmDetailsLabelTaxDetailsTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.ReviewAndConfirmDetails
                            .ReviewAndConfirmDetails_Label_TaxDetails_Text
                            .accessibilityLabel
                        }
                      >
                        {
                          STRINGS.ReviewAndConfirmDetails
                            .ReviewAndConfirmDetails_Label_TaxDetails_Text.label
                        }
                      </AppText>
                      <AppImage
                        widgetId={'ReviewAndConfirmDetails_Image_Minus_Image_4'}
                        source={imageSources.image__y44s}
                        style={sharedStyles.homeImageVisibilityImage}
                      />
                    </AppRow>
                    <AppTextField
                      widgetId={
                        'ReviewAndConfirmDetails_Input_CountryOfTaxResidence_Input'
                      }
                      style={sharedStyles.loginScreenInputUserNameInput}
                      placeholder={
                        STRINGS.ReviewAndConfirmDetails
                          .ReviewAndConfirmDetails_Input_CountryOfTaxResidence_Input
                          .placeholder
                      }
                    />
                  </AppColumn>
                </AppColumn>
                <AppButton
                  widgetId={'ReviewAndConfirmDetails_Cta_Continue_Button'}
                  onPress={() => {
                    onPressContinuereviewAndConfirmDetailsCtaContinueButton({});
                  }}
                  style={sharedStyles.ampCtaContinueButton}
                  label={
                    STRINGS.ReviewAndConfirmDetails
                      .ReviewAndConfirmDetails_Cta_Continue_Button.label
                  }
                  accessibilityLabel={
                    STRINGS.ReviewAndConfirmDetails
                      .ReviewAndConfirmDetails_Cta_Continue_Button
                      .accessibilityLabel
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
  reviewAndConfirmDetailsContainerTitleContainerRowStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    aspectRatio: 16.35,
    flexShrink: 1,
  },
  reviewAndConfirmDetailsLabelPersonalDetailsTextStyle: {
    textAlignVertical: 'center',
    color: '#231f20',
    fontFamily: 'Outfit-600-normal',
    flex: 1,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  reviewAndConfirmDetailsContainerTitleContainerRow2Style: {
    justifyContent: 'space-between',
    aspectRatio: 16.35,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 1,
  },
  reviewAndConfirmDetailsLabelEmploymentDetailsTextStyle: {
    fontFamily: 'Outfit-600-normal',
    flex: 1,
    lineHeight: 20,
    textAlignVertical: 'center',
    fontWeight: 600,
    fontSize: 14,
    color: '#231f20',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  reviewAndConfirmDetailsContainerTitleContainerRow3Style: {
    aspectRatio: 16.35,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
    flexShrink: 1,
  },
  reviewAndConfirmDetailsLabelAccountOpeningPurposeTextStyle: {
    color: '#231f20',
    textAlignVertical: 'center',
    fontFamily: 'Outfit-600-normal',
    flex: 1,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: 600,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  reviewAndConfirmDetailsContainerTitleContainerRow4Style: {
    aspectRatio: 16.35,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexShrink: 1,
  },
  reviewAndConfirmDetailsLabelTaxDetailsTextStyle: {
    lineHeight: 20,
    fontSize: 14,
    color: '#231f20',
    fontFamily: 'Outfit-600-normal',
    flex: 1,
    fontWeight: 600,
    textAlignVertical: 'center',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default ReviewAndConfirmDetails;
