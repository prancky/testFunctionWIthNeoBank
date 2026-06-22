import React, { useRef } from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppForm,
  AppImage,
  AppProgressBar,
  AppRow,
  AppText,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { space, text } from '@/assets';

import { ASListView, ASSwitch } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  MarketingPreference_Toggle_SwitchAsswitch_Switch?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const MarketingPreference: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  const onPressContinuemarketingPreferenceCtaContinueButton = async () => {
    navigation.navigate(Route.A_M_P, {});
  };

  useClearHeaderActions(navigation);

  const renderItem_MarketingPreference_List =
    (values, setFieldValue) =>
    ({ item }) => (
      <AppColumn
        widgetId={'MarketingPreference_Container_MarketingCard_Column'}
        spacing={8}
        style={styles.marketingPreferenceContainerMarketingCardColumnStyle}
      >
        <AppRow
          widgetId={'MarketingPreference_Container_RowWrapper_Row'}
          spacing={space['2']}
          style={sharedStyles.ampContainerRowWrapperRow}
        >
          <AppImage
            widgetId={'mail'}
            source={item['mail']}
            style={sharedStyles.dataClasificationOpenAccountImageAtmCardsImage}
          />
          <AppText
            widgetId={'iAm18YearsOldAndAbove'}
            numberOfLines={0}
            style={[text.label.medium, styles.iAm18YearsOldAndAboveStyle]}
            accessibilityLabel={
              STRINGS.MarketingPreference.iAm18YearsOldAndAbove
                .accessibilityLabel
            }
          >
            {String(
              item['iAm18YearsOldAndAbove'] ??
                STRINGS.MarketingPreference.iAm18YearsOldAndAbove
                  .accessibilityLabel,
            )}
          </AppText>
          <ASSwitch
            disabledThumbColor={'#ffffff'}
            disabledTrackColor={'#e0e0d3'}
            enableTrackColor={'#e0e0d3'}
            enableThumbColor={'#ffffff'}
            name={'MarketingPreference_Toggle_SwitchAsswitch_Switch'}
            style={styles.marketingPreferenceToggleSwitchAsswitchSwitchStyle}
            backgroundStyle={
              styles.marketingPreferenceToggleSwitchAsswitchSwitchBackgroundStyle
            }
            checkItemStyle={
              styles.marketingPreferenceToggleSwitchAsswitchSwitchCheckItemStyle
            }
            containerStyle={
              styles.marketingPreferenceToggleSwitchAsswitchSwitchContainerStyle
            }
            testId={'MarketingPreference_Toggle_SwitchAsswitch_Switch'}
            value={values.MarketingPreference_Toggle_SwitchAsswitch_Switch}
            onChange={(value) =>
              setFieldValue(
                'MarketingPreference_Toggle_SwitchAsswitch_Switch',
                value,
              )
            }
          />
        </AppRow>
      </AppColumn>
    );

  return (
    <AppContainer
      widgetId={'ASContainer-820146'}
      testID={'545d7da9-c388-4cc7-b33f-894cd2b11370'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-701145'}
        validationSchema={Yup.object().shape({})}
        initialValues={{ MarketingPreference_Toggle_SwitchAsswitch_Switch: '' }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          const { values, setFieldValue } = formikProps;
          return (
            <>
              <AppAppBar
                widgetId={'MarketingPreference_AppBar_AppBarAsappHeader_AppBar'}
                leadingIcon={
                  'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/55c36307-fe4e-478c-b6c4-024089a65f1e-i3734_1482_917_858.png'
                }
                style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
              />
              <AppColumn
                widgetId={'MarketingPreference_Container_Column'}
                spacing={20}
                style={sharedStyles.ampContainerColumn}
              >
                <AppColumn
                  widgetId={'MarketingPreference_Container_ProgressBar_Column'}
                  spacing={8}
                  style={
                    sharedStyles.identityIdcardPhotoContainerProgressBarColumn
                  }
                >
                  <AppText
                    widgetId={
                      'MarketingPreference_Label_MarketingPreferences_Text'
                    }
                    numberOfLines={2}
                    style={[
                      text.label.medium,
                      sharedStyles.identityIdcardPhotoLabelVerifyYourIdentityText,
                    ]}
                    accessibilityLabel={
                      STRINGS.MarketingPreference
                        .MarketingPreference_Label_MarketingPreferences_Text
                        .accessibilityLabel
                    }
                  >
                    {
                      STRINGS.MarketingPreference
                        .MarketingPreference_Label_MarketingPreferences_Text
                        .label
                    }
                  </AppText>
                  <AppProgressBar
                    widgetId={
                      'MarketingPreference_Container_ProgressBarAsprogr_ProgressBar'
                    }
                    style={
                      sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
                    }
                  />
                </AppColumn>
                <AppColumn
                  widgetId={'MarketingPreference_Container_Content_Column'}
                  spacing={20}
                  style={sharedStyles.ampContainerContentColumn}
                >
                  <AppColumn
                    widgetId={'MarketingPreference_Container_Title_Column'}
                    spacing={4}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppText
                      widgetId={
                        'MarketingPreference_Label_LetUsKnowHowToReachYou_Text'
                      }
                      numberOfLines={1}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankText,
                      ]}
                      accessibilityLabel={
                        STRINGS.MarketingPreference
                          .MarketingPreference_Label_LetUsKnowHowToReachYou_Text
                          .accessibilityLabel
                      }
                    >
                      {
                        STRINGS.MarketingPreference
                          .MarketingPreference_Label_LetUsKnowHowToReachYou_Text
                          .label
                      }
                    </AppText>
                    <AppText
                      widgetId={'MarketingPreference_Body_Text'}
                      numberOfLines={2}
                      style={[
                        text.label.medium,
                        sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
                      ]}
                      accessibilityLabel={
                        STRINGS.MarketingPreference
                          .MarketingPreference_Body_Text.accessibilityLabel
                      }
                    >
                      {
                        STRINGS.MarketingPreference
                          .MarketingPreference_Body_Text.label
                      }
                    </AppText>
                  </AppColumn>
                  <ASListView
                    itemSpacing={12}
                    orientation={'vertical'}
                    showsHorizontalScrollIndicator={false}
                    name={'MarketingPreference_List'}
                    style={sharedStyles.ampList}
                    renderItem={renderItem_MarketingPreference_List(
                      values,
                      setFieldValue,
                    )}
                    data={[
                      {
                        mail: 'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/5e66667a-42c8-4bca-a1d9-a708246f494d-i3088_7473_244_4340.svg',
                        iAm18YearsOldAndAbove: 'Email',
                      },
                      {
                        mail: 'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/ecfcfe26-c9ec-4c45-9a2c-36cbf3539784-i3088_7474_244_4340.png',
                        iAm18YearsOldAndAbove: 'SMS',
                      },
                      {
                        mail: 'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/8337486c-f6c6-4cbd-8156-d63dbdccf387-i3088_7475_244_4340.png',
                        iAm18YearsOldAndAbove: 'Phone call',
                      },
                    ]}
                    testId={'MarketingPreference_List'}
                  />
                </AppColumn>
                <AppButton
                  widgetId={'MarketingPreference_Cta_Continue_Button'}
                  onPress={() => {
                    onPressContinuemarketingPreferenceCtaContinueButton({});
                  }}
                  style={sharedStyles.ampCtaContinueButton}
                  accessibilityLabel={
                    STRINGS.MarketingPreference
                      .MarketingPreference_Cta_Continue_Button
                      .accessibilityLabel
                  }
                  label={
                    STRINGS.MarketingPreference
                      .MarketingPreference_Cta_Continue_Button.label
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
  marketingPreferenceContainerMarketingCardColumnStyle: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'stretch',
    borderColor: '#e0e0d3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  iAm18YearsOldAndAboveStyle: {
    fontWeight: 500,
    color: '#231f20',
    fontFamily: 'Outfit-500-normal',
    textAlignVertical: 'center',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  marketingPreferenceToggleSwitchAsswitchSwitchStyle: { height: 18 },
  marketingPreferenceToggleSwitchAsswitchSwitchBackgroundStyle: {
    left: 0,
    width: '100%',
    borderRadius: '10px',
    top: '50%',
    position: 'absolute',
    height: '70%',
    transform: 'translateY(-50%)',
  },
  marketingPreferenceToggleSwitchAsswitchSwitchCheckItemStyle: {
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 3px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
  },
  marketingPreferenceToggleSwitchAsswitchSwitchContainerStyle: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
});

export default MarketingPreference;
