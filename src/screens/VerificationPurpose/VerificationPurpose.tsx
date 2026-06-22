import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppDropDown,
  AppForm,
  AppIconButton,
  AppImage,
  AppProgressBar,
  AppRadioButton,
  AppRow,
  AppText,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, imageSources, space, component, text } from '@/assets';

import { ASChoiceChips } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  VerificationPurpose_Chips_TagsAschoiceChips_Chips?: string;
  VerificationPurpose_Container_RadioButtonVertica_RadioButton?: string;
  VerificationPurpose_Container_DropdownFieldAsdropDo_DropDown?: string;
  VerificationPurpose_Container_RadioButtonVertica_RadioButt_2?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const VerificationPurpose: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  const onPressContinueverificationPurposeCtaContinueButton = async () => {
    navigation.navigate(Route.REVIEW_AND_CONFIRM_DETAILS, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-655901'}
      testID={'51dc64b4-0c2b-49e6-b6bd-9dadeb1060f9'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-934856'}
        validationSchema={Yup.object().shape({})}
        initialValues={{
          VerificationPurpose_Chips_TagsAschoiceChips_Chips: '',
          VerificationPurpose_Container_RadioButtonVertica_RadioButton: '',
          VerificationPurpose_Container_DropdownFieldAsdropDo_DropDown: '',
          VerificationPurpose_Container_RadioButtonVertica_RadioButt_2: '',
        }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppAppBar
                widgetId={'VerificationPurpose_AppBar_AppBarAsappHeader_AppBar'}
                leadingIcon={
                  'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/5d81f8e3-3540-448d-a4dc-7c4937535a3f-i3734_1466_917_858.png'
                }
                style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
              />
              <AppColumn
                widgetId={'VerificationPurpose_Container_Column'}
                spacing={20}
                style={sharedStyles.ampContainerColumn}
              >
                <AppColumn
                  widgetId={'VerificationPurpose_Container_ProgressBar_Column'}
                  spacing={8}
                  style={
                    sharedStyles.identityIdcardPhotoContainerProgressBarColumn
                  }
                >
                  <AppText
                    widgetId={'VerificationPurpose_Label_YourAccount_Text'}
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      sharedStyles.identityIdcardPhotoLabelVerifyYourIdentityText,
                    ]}
                    accessibilityLabel={
                      STRINGS.VerificationPurpose
                        .VerificationPurpose_Label_YourAccount_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.VerificationPurpose
                        .VerificationPurpose_Label_YourAccount_Text.label
                    }
                  </AppText>
                  <AppProgressBar
                    widgetId={
                      'VerificationPurpose_Container_ProgressBarAsprogr_ProgressBar'
                    }
                    style={
                      sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'VerificationPurpose_Container_Content_Column'}
                  spacing={20}
                  style={sharedStyles.ampContainerContentColumn}
                >
                  <AppColumn
                    widgetId={'VerificationPurpose_Container_Title_Column'}
                    spacing={4}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'VerificationPurpose_Label_AccountOpeningPurpose_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_AccountOpeningPurpose_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_AccountOpeningPurpose_Text
                          .label
                      }
                    </AppText>
                    <AppText
                      widgetId={
                        'VerificationPurpose_Label_WeNeedToKnowThisForRegul_Text'
                      }
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_WeNeedToKnowThisForRegul_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_WeNeedToKnowThisForRegul_Text
                          .label
                      }
                    </AppText>
                  </AppColumn>
                  <ASChoiceChips
                    selectedChipBackgroundColor={color.brand.primary}
                    options={[
                      {
                        label:
                          STRINGS.VerificationPurpose
                            .VerificationPurpose_Chips_TagsAschoiceChips_Chips
                            .options.opt0.label,
                        value: 'salary',
                      },
                      {
                        label:
                          STRINGS.VerificationPurpose
                            .VerificationPurpose_Chips_TagsAschoiceChips_Chips
                            .options.opt1.label,
                        value: 'daily_spending',
                      },
                      {
                        label:
                          STRINGS.VerificationPurpose
                            .VerificationPurpose_Chips_TagsAschoiceChips_Chips
                            .options.opt2.label,
                        value: 'financing',
                      },
                      {
                        label:
                          STRINGS.VerificationPurpose
                            .VerificationPurpose_Chips_TagsAschoiceChips_Chips
                            .options.opt3.label,
                        value: 'investment',
                      },
                      {
                        label:
                          STRINGS.VerificationPurpose
                            .VerificationPurpose_Chips_TagsAschoiceChips_Chips
                            .options.opt4.label,
                        value: 'education',
                      },
                    ]}
                    isSingleChoice={true}
                    selectedChipTextColor={color.brand.onPrimary}
                    spacing={space['2']}
                    contentLayout={'space-between'}
                    name={'VerificationPurpose_Chips_TagsAschoiceChips_Chips'}
                    choiceChipTextStyles={[
                      text.label.medium,
                      styles.verificationPurposeChipsTagsAschoiceChipsChipsChoiceChipTextStyles,
                    ]}
                    choiceChipStyles={
                      styles.verificationPurposeChipsTagsAschoiceChipsChipsChoiceChipStyles
                    }
                    containerStyles={
                      styles.verificationPurposeChipsTagsAschoiceChipsChipsContainerStyles
                    }
                    style={
                      sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
                    }
                    testId={'VerificationPurpose_Chips_TagsAschoiceChips_Chips'}
                  />
                  <AppColumn
                    widgetId={'VerificationPurpose_Container_Column_2'}
                    spacing={16}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'VerificationPurpose_Label_DoYouHaveTaxObligationsOu_Text'
                      }
                      numberOfLines={3}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_DoYouHaveTaxObligationsOu_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_DoYouHaveTaxObligationsOu_Text
                          .label
                      }
                    </AppText>
                    <AppRadioButton
                      widgetId={
                        'VerificationPurpose_Container_RadioButtonVertica_RadioButton'
                      }
                      options={[
                        {
                          label:
                            STRINGS.VerificationPurpose
                              .VerificationPurpose_Container_RadioButtonVertica_RadioButton
                              .options.opt0.label,
                          value: 'Yes',
                        },
                        {
                          label:
                            STRINGS.VerificationPurpose
                              .VerificationPurpose_Container_RadioButtonVertica_RadioButton
                              .options.opt1.label,
                          value: 'No',
                        },
                      ]}
                      labelStyle={[
                        text.label.medium,
                        styles.verificationPurposeContainerRadioButtonVerticaRadioButtonLabelStyle,
                      ]}
                      style={
                        styles.verificationPurposeContainerRadioButtonVerticaRadioButtonStyle
                      }
                    />
                  </AppColumn>
                  <AppRow
                    widgetId={'VerificationPurpose_Container_Field_Row'}
                    spacing={8}
                    style={styles.verificationPurposeContainerFieldRowStyle}
                  >
                    <AppDropDown
                      widgetId={
                        'VerificationPurpose_Container_DropdownFieldAsdropDo_DropDown'
                      }
                      options={[]}
                      containerStyle={
                        styles.verificationPurposeContainerDropdownFieldAsdropDoDropDownContainerStyle
                      }
                      placeholder={
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Container_DropdownFieldAsdropDo_DropDown
                          .placeholder
                      }
                      searchPlaceholder={
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Container_DropdownFieldAsdropDo_DropDown
                          .searchPlaceholder
                      }
                    />
                    <AppColumn
                      widgetId={
                        'VerificationPurpose_Container_IconButtonAsiconButtonV_Column'
                      }
                      spacing={space['2']}
                      style={
                        sharedStyles.homeContainerIconButtonAsiconButtonVisualWrapperColumn
                      }
                    >
                      <AppIconButton
                        widgetId={
                          'VerificationPurpose_Icon_IconButtonAsiconButton_Icon'
                        }
                        icon={
                          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/3a026081-975e-481f-b34c-2301920dc7b7-i3131_1294_38_299.png'
                        }
                        style={sharedStyles.homeIconIconButtonAsiconButtonIcon}
                      />
                    </AppColumn>
                  </AppRow>
                  <AppColumn
                    widgetId={'VerificationPurpose_Container_Column_3'}
                    spacing={16}
                    style={sharedStyles.identityIdcardPhotoContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'VerificationPurpose_Label_DoYouHaveYourTaxNumberWi_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_DoYouHaveYourTaxNumberWi_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_DoYouHaveYourTaxNumberWi_Text
                          .label
                      }
                    </AppText>
                    <AppRadioButton
                      widgetId={
                        'VerificationPurpose_Container_RadioButtonVertica_RadioButt_2'
                      }
                      options={[
                        {
                          label:
                            STRINGS.VerificationPurpose
                              .VerificationPurpose_Container_RadioButtonVertica_RadioButt_2
                              .options.opt0.label,
                          value: 'Yes',
                        },
                        {
                          label:
                            STRINGS.VerificationPurpose
                              .VerificationPurpose_Container_RadioButtonVertica_RadioButt_2
                              .options.opt1.label,
                          value: 'No',
                        },
                      ]}
                      style={
                        styles.verificationPurposeContainerRadioButtonVerticaRadioButt2Style
                      }
                      labelStyle={[
                        text.label.medium,
                        styles.verificationPurposeContainerRadioButtonVerticaRadioButt2LabelStyle,
                      ]}
                    />
                  </AppColumn>
                  <AppColumn
                    widgetId={
                      'VerificationPurpose_Divider_ConnectedLineAsdivider_Divider'
                    }
                    spacing={space['2']}
                    style={
                      styles.verificationPurposeDividerConnectedLineAsdividerDividerStyle
                    }
                  />
                  <AppButton
                    widgetId={'VerificationPurpose_Cta_Action_Button'}
                    style={styles.verificationPurposeCtaActionButtonStyle}
                    textStyle={[
                      text.label.medium,
                      sharedStyles.homeCtaActionButton2Text,
                    ]}
                    label={
                      STRINGS.VerificationPurpose
                        .VerificationPurpose_Cta_Action_Button.label
                    }
                  >
                    <AppImage
                      widgetId={'VerificationPurpose_Image_AddCircle_Image'}
                      source={imageSources.image__qhsq}
                      style={sharedStyles.homeImageVisibilityImage}
                    />
                    <AppText
                      widgetId={'VerificationPurpose_Label_AddMore_Text'}
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        styles.verificationPurposeLabelAddMoreTextStyle,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_AddMore_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_AddMore_Text.label
                      }
                    </AppText>
                  </AppButton>
                </AppColumn>
                <AppColumn
                  widgetId={'VerificationPurpose_Container_Action_Column'}
                  spacing={8}
                  style={sharedStyles.ampContainerTitleColumn}
                >
                  <AppRow
                    widgetId={'VerificationPurpose_Container_Content_Row'}
                    spacing={8}
                    style={sharedStyles.identityIdcardPhotoContainerContentRow}
                  >
                    <AppImage
                      widgetId={'VerificationPurpose_Image_GppGood_Image'}
                      source={imageSources.image__i91lu}
                      style={sharedStyles.homeImageVisibilityImage}
                    />
                    <AppText
                      widgetId={
                        'VerificationPurpose_Label_YourDataIsProtectedAccord_Text'
                      }
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.identityIdcardPhotoLabelYourDataIsProtectedAccordText,
                      ]}
                      accessibilityLabel={
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_YourDataIsProtectedAccord_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.VerificationPurpose
                          .VerificationPurpose_Label_YourDataIsProtectedAccord_Text
                          .label
                      }
                    </AppText>
                  </AppRow>
                  <AppButton
                    widgetId={'VerificationPurpose_Cta_Continue_Button'}
                    onPress={() => {
                      onPressContinueverificationPurposeCtaContinueButton({});
                    }}
                    style={sharedStyles.ampCtaContinueButton}
                    accessibilityLabel={
                      STRINGS.VerificationPurpose
                        .VerificationPurpose_Cta_Continue_Button
                        .accessibilityLabel
                    }
                    label={
                      STRINGS.VerificationPurpose
                        .VerificationPurpose_Cta_Continue_Button.label
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
  verificationPurposeChipsTagsAschoiceChipsChipsChoiceChipTextStyles: {
    color: '#231f20',
    fontWeight: 400,
    fontSize: 12,
    fontFamily: 'Outfit-400-normal',
    textDecorationLine: 'none',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  verificationPurposeChipsTagsAschoiceChipsChipsChoiceChipStyles: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e0e0d3',
    maxWidth: '100%',
    paddingTop: space['2'],
    minWidth: 60,
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: space['2'],
    paddingLeft: space['3'],
    paddingRight: space['3'],
    flexShrink: 1,
    justifyContent: 'center',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  verificationPurposeChipsTagsAschoiceChipsChipsContainerStyles: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  verificationPurposeContainerRadioButtonVerticaRadioButtonLabelStyle: {
    fontFamily: 'Outfit-400-normal',
    color: color.text.primary,
  },
  verificationPurposeContainerRadioButtonVerticaRadioButtonStyle: {
    alignSelf: 'stretch',
  },
  verificationPurposeContainerFieldRowStyle: {
    height: 44,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  verificationPurposeContainerDropdownFieldAsdropDoDropDownContainerStyle: {
    paddingTop: 12,
    paddingLeft: 14,
    paddingRight: 14,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 12,
    borderRadius: 4,
    alignItems: 'center',
    height: component.input.height,
    width: '100%',
    position: 'relative',
    justifyContent: 'space-between',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  verificationPurposeContainerRadioButtonVerticaRadioButt2Style: {
    alignSelf: 'stretch',
  },
  verificationPurposeContainerRadioButtonVerticaRadioButt2LabelStyle: {
    fontFamily: 'Outfit-400-normal',
    color: color.text.primary,
  },
  verificationPurposeDividerConnectedLineAsdividerDividerStyle: {
    backgroundColor: '#e0e0d3',
    height: 1,
    alignSelf: 'stretch',
    borderRadius: 9999,
    borderColor: '#e0e0d3',
    borderWidth: 1,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  verificationPurposeCtaActionButtonStyle: {
    paddingBottom: 0,
    flexDirection: 'column',
    borderRadius: 0,
    width: '24.2%',
    alignSelf: 'stretch',
    paddingRight: 0,
    backgroundColor: 'transparent',
    paddingTop: 0,
    paddingLeft: 0,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  verificationPurposeLabelAddMoreTextStyle: {
    fontFamily: 'Outfit-400-normal',
    fontSize: 12,
    color: '#231f20',
    lineHeight: 16,
    width: 59,
    fontWeight: 400,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
});

export default VerificationPurpose;
