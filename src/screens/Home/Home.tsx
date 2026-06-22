import React, { useRef } from 'react';
import {
  AppButton,
  AppColumn,
  AppContainer,
  AppForm,
  AppIconButton,
  AppImage,
  AppRow,
  AppText,
  AppTextField,
} from '@/components/shared';

import { useNavigation } from '@react-navigation/native';

import { color, imageSources, space, text } from '@/assets';

import { ASListView } from '@/components';

import { Platform, StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import { FormikProps } from 'formik';
import * as Yup from 'yup';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type FormValues = {
  Home_Input_ActivateYourVirtualCardNow_Input?: string;
};

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const Home: React.FC<ScreenProps> = ({ route }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  const navigation = useNavigation();

  useClearHeaderActions(navigation);

  const renderItem_Home_List = ({ item }) => (
    <AppColumn
      widgetId={'Home_Container_FinanceServices_Column'}
      spacing={8}
      style={styles.homeContainerFinanceServicesColumnStyle}
    >
      <AppRow
        widgetId={'Home_Container_RowWrapper_Row'}
        spacing={space['2']}
        style={sharedStyles.ampContainerRowWrapperRow}
      >
        <AppColumn
          widgetId={'Home_Container_Content_Column_3'}
          spacing={6}
          style={styles.homeContainerContentColumn3Style}
        >
          <AppButton
            widgetId={'Home_Cta_Finance_Button'}
            textStyle={[
              text.label.medium,
              styles.homeCtaFinanceButtonTextStyle,
            ]}
            style={styles.homeCtaFinanceButtonStyle}
            label={STRINGS.Home.Home_Cta_Finance_Button.label}
            accessibilityLabel={
              STRINGS.Home.Home_Cta_Finance_Button.accessibilityLabel
            }
          />
          <AppColumn
            widgetId={'Home_Container_Content_Column_4'}
            spacing={2}
            style={sharedStyles.ampContainerTitleColumn}
          >
            <AppText
              widgetId={'title22'}
              numberOfLines={0}
              style={[text.label.medium, styles.title22Style]}
              accessibilityLabel={STRINGS.Home.title22.accessibilityLabel}
            >
              {String(
                item['title22'] ?? STRINGS.Home.title22.accessibilityLabel,
              )}
            </AppText>
            <AppText
              widgetId={'description'}
              numberOfLines={2}
              style={[text.label.medium, sharedStyles.description]}
              accessibilityLabel={STRINGS.Home.description.accessibilityLabel}
            >
              {String(
                item['description'] ??
                  STRINGS.Home.description.accessibilityLabel,
              )}
            </AppText>
          </AppColumn>
        </AppColumn>
        <AppImage
          widgetId={'financeServicesIllustrations'}
          source={item['financeServicesIllustrations']}
          style={styles.financeServicesIllustrationsStyle}
        />
      </AppRow>
    </AppColumn>
  );

  return (
    <AppContainer
      widgetId={'ASContainer-550999'}
      testID={'3fc03036-ef8d-4428-9c4b-48f09dd3a127'}
      style={sharedStyles.container}
    >
      <AppForm
        widgetId={'ASForm-853644'}
        validationSchema={Yup.object().shape({})}
        initialValues={{ Home_Input_ActivateYourVirtualCardNow_Input: '' }}
        innerRef={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => {
          return (
            <>
              <AppColumn
                widgetId={'Home_Container_Column'}
                spacing={space['2']}
                style={styles.homeContainerColumnStyle}
              >
                <AppRow
                  widgetId={'Home_Container_Tab_Row'}
                  spacing={12}
                  style={styles.homeContainerTabRowStyle}
                >
                  <AppButton
                    widgetId={'Home_Cta_Action_Button'}
                    accessibilityLabel={''}
                    icon={
                      'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/b037e385-dd6d-4a61-a66b-67eafbbc2842-i3740_1105_38_295.png'
                    }
                    style={styles.homeCtaActionButtonStyle}
                    textStyle={[
                      text.label.medium,
                      sharedStyles.homeCtaActionButton2Text,
                    ]}
                    iconStyles={styles.homeCtaActionButtonIconStyles}
                    label={''}
                  />
                  <AppText
                    widgetId={'Home_Label_HiJohnDoe_Text'}
                    numberOfLines={1}
                    style={[
                      text.label.medium,
                      styles.homeLabelHiJohnDoeTextStyle,
                    ]}
                    accessibilityLabel={
                      STRINGS.Home.Home_Label_HiJohnDoe_Text.accessibilityLabel
                    }
                  >
                    {STRINGS.Home.Home_Label_HiJohnDoe_Text.label}
                  </AppText>
                  <AppColumn
                    widgetId={
                      'Home_Container_IconButtonAsiconButtonVisualWrapper_Column'
                    }
                    spacing={space['2']}
                    style={
                      sharedStyles.homeContainerIconButtonAsiconButtonVisualWrapperColumn
                    }
                  >
                    <AppIconButton
                      widgetId={'Home_Icon_IconButtonAsiconButton_Icon'}
                      icon={
                        'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/2c819a37-5a44-4290-8380-3f38e712cb6a-i3740_1107_38_299.png'
                      }
                      style={sharedStyles.homeIconIconButtonAsiconButtonIcon}
                    />
                  </AppColumn>
                </AppRow>
              </AppColumn>
              <AppColumn
                widgetId={'Home_Container_Column_2'}
                spacing={20}
                style={styles.homeContainerColumn2Style}
              >
                <AppColumn
                  widgetId={'Home_Container_Content_Column'}
                  spacing={20}
                  style={sharedStyles.ampContainerTitleColumn}
                >
                  <AppTextField
                    widgetId={'Home_Input_ActivateYourVirtualCardNow_Input'}
                    suffixIcon={
                      'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/1c375810-900c-49ce-8ce5-9d27bad41ea2-3131_1309.png'
                    }
                    prefixIcon={
                      'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/97b0770d-c677-442c-85a6-a2f75cebf2bc-3141_2961.png'
                    }
                    style={styles.homeInputActivateYourVirtualCardNowInputStyle}
                    containerStyle={
                      styles.homeInputActivateYourVirtualCardNowInputContainerStyle
                    }
                    placeholder={
                      STRINGS.Home.Home_Input_ActivateYourVirtualCardNow_Input
                        .placeholder
                    }
                  />
                  <AppRow
                    widgetId={'Home_Container_CardContainer_Row'}
                    scrollable={true}
                    spacing={16}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppColumn
                      widgetId={'Home_Container_AtmCard_Column'}
                      backgroundImage={imageSources.image__bdvs}
                      spacing={8}
                      style={styles.homeContainerAtmCardColumnStyle}
                    >
                      <AppColumn
                        widgetId={'Home_Container_Content_Column_2'}
                        spacing={16}
                        style={styles.homeContainerContentColumn2Style}
                      >
                        <AppRow
                          widgetId={'Home_Container_LogoContainer_Row'}
                          spacing={space['2']}
                          style={styles.homeContainerLogoContainerRowStyle}
                        >
                          <AppImage
                            widgetId={'Home_Image_LogoAsimage_Image'}
                            source={imageSources.image__zdvwb}
                            style={styles.homeImageLogoAsimageImageStyle}
                          />
                          <AppImage
                            widgetId={'Home_Image_Visibility_Image'}
                            source={imageSources.image__g9z4}
                            style={sharedStyles.homeImageVisibilityImage}
                          />
                        </AppRow>
                        <AppColumn
                          widgetId={'Home_Container_InputItemDetail_Column'}
                          spacing={space['2']}
                          style={styles.homeContainerInputItemDetailColumnStyle}
                        >
                          <AppRow
                            widgetId={'Home_Container_Content_Row'}
                            spacing={4}
                            style={styles.homeContainerContentRowStyle}
                          >
                            <AppText
                              widgetId={'Home_Label_TotalBalance_Text'}
                              numberOfLines={1}
                              style={[
                                text.label.medium,
                                styles.homeLabelTotalBalanceTextStyle,
                              ]}
                              accessibilityLabel={
                                STRINGS.Home.Home_Label_TotalBalance_Text
                                  .accessibilityLabel
                              }
                            >
                              {STRINGS.Home.Home_Label_TotalBalance_Text.label}
                            </AppText>
                          </AppRow>
                          <AppRow
                            widgetId={'Home_Container_Content_Row_2'}
                            spacing={6}
                            style={styles.homeContainerContentRow2Style}
                          >
                            <AppText
                              widgetId={'Home_Label_Sgd_Text'}
                              numberOfLines={1}
                              style={[
                                text.label.medium,
                                styles.homeLabelSgdTextStyle,
                              ]}
                              accessibilityLabel={
                                STRINGS.Home.Home_Label_Sgd_Text
                                  .accessibilityLabel
                              }
                            >
                              {STRINGS.Home.Home_Label_Sgd_Text.label}
                            </AppText>
                            <AppText
                              widgetId={'Home_Label_Text'}
                              numberOfLines={1}
                              style={[
                                text.label.medium,
                                styles.homeLabelTextStyle,
                              ]}
                              accessibilityLabel={
                                STRINGS.Home.Home_Label_Text.accessibilityLabel
                              }
                            >
                              {STRINGS.Home.Home_Label_Text.label}
                            </AppText>
                          </AppRow>
                        </AppColumn>
                        <AppButton
                          widgetId={'Home_Cta_View_Button'}
                          style={styles.homeCtaViewButtonStyle}
                          textStyle={[
                            text.label.medium,
                            styles.homeCtaViewButtonTextStyle,
                          ]}
                          label={STRINGS.Home.Home_Cta_View_Button.label}
                          accessibilityLabel={
                            STRINGS.Home.Home_Cta_View_Button.accessibilityLabel
                          }
                        />
                      </AppColumn>
                    </AppColumn>
                    <AppColumn
                      widgetId={'Home_Container_AtmCard_Column_2'}
                      backgroundImage={imageSources.image__6tijp}
                      spacing={26}
                      style={styles.homeContainerAtmCardColumn2Style}
                    >
                      <AppImage
                        widgetId={'Home_Background_Lines_Image'}
                        resizeMode={'cover'}
                        source={imageSources.image__c953g}
                        style={styles.homeBackgroundLinesImageStyle}
                      />
                      <AppColumn
                        widgetId={'Home_Container_Column_3'}
                        spacing={space['2']}
                        style={styles.homeContainerColumn3Style}
                      >
                        <AppText
                          widgetId={'Home_Label_MyPoints_Text'}
                          numberOfLines={1}
                          style={[
                            text.label.medium,
                            styles.homeLabelMyPointsTextStyle,
                          ]}
                          accessibilityLabel={
                            STRINGS.Home.Home_Label_MyPoints_Text
                              .accessibilityLabel
                          }
                        >
                          {STRINGS.Home.Home_Label_MyPoints_Text.label}
                        </AppText>
                        <AppRow
                          widgetId={'Home_Container_Content_Row_3'}
                          spacing={8}
                          style={styles.homeContainerContentRow3Style}
                        >
                          <AppImage
                            widgetId={'Home_Image_RatingImageAsimage_Image'}
                            source={imageSources.image__k8et}
                            style={styles.homeImageRatingImageAsimageImageStyle}
                          />
                          <AppRow
                            widgetId={'Home_Container_Text_Row'}
                            spacing={4}
                            style={styles.homeContainerTextRowStyle}
                          >
                            <AppText
                              widgetId={'Home_Label_Rm_Text'}
                              numberOfLines={1}
                              style={[
                                text.label.medium,
                                styles.homeLabelRmTextStyle,
                              ]}
                              accessibilityLabel={
                                STRINGS.Home.Home_Label_Rm_Text
                                  .accessibilityLabel
                              }
                            >
                              {STRINGS.Home.Home_Label_Rm_Text.label}
                            </AppText>
                            <AppText
                              widgetId={'Home_Label_Text_2'}
                              numberOfLines={1}
                              style={[
                                text.label.medium,
                                styles.homeLabelText2Style,
                              ]}
                              accessibilityLabel={
                                STRINGS.Home.Home_Label_Text_2
                                  .accessibilityLabel
                              }
                            >
                              {STRINGS.Home.Home_Label_Text_2.label}
                            </AppText>
                          </AppRow>
                        </AppRow>
                      </AppColumn>
                      <AppColumn
                        widgetId={'Home_Container_BarCode_Column'}
                        spacing={4}
                        style={sharedStyles.ampContainerTitleColumn}
                      >
                        <AppRow
                          widgetId={'Home_Container_BarcodeOfSquareShape_Row'}
                          spacing={10}
                          style={
                            styles.homeContainerBarcodeOfSquareShapeRowStyle
                          }
                        >
                          <AppImage
                            widgetId={'Home_Image'}
                            source={imageSources.image__iw0k2}
                            style={styles.homeImageStyle}
                          />
                        </AppRow>
                        <AppRow
                          widgetId={'Home_Container_Content_Row_4'}
                          spacing={space['2']}
                          style={styles.homeContainerContentRow4Style}
                        >
                          <AppText
                            widgetId={'Home_Label_Id2022030219921120_Text'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.homeLabelId2022030219921120TextStyle,
                            ]}
                            accessibilityLabel={
                              STRINGS.Home.Home_Label_Id2022030219921120_Text
                                .accessibilityLabel
                            }
                          >
                            {
                              STRINGS.Home.Home_Label_Id2022030219921120_Text
                                .label
                            }
                          </AppText>
                          <AppText
                            widgetId={'Home_Label_Expiry1026_Text'}
                            numberOfLines={1}
                            style={[
                              text.label.medium,
                              styles.homeLabelExpiry1026TextStyle,
                            ]}
                            accessibilityLabel={
                              STRINGS.Home.Home_Label_Expiry1026_Text
                                .accessibilityLabel
                            }
                          >
                            {STRINGS.Home.Home_Label_Expiry1026_Text.label}
                          </AppText>
                        </AppRow>
                      </AppColumn>
                    </AppColumn>
                  </AppRow>
                  <AppRow
                    widgetId={'Home_Container_List_Row'}
                    spacing={12}
                    style={sharedStyles.ampContainerTitleColumn}
                  >
                    <AppButton
                      widgetId={'Home_Cta_Action_Button_2'}
                      style={styles.homeCtaActionButton2Style}
                      textStyle={[
                        text.label.medium,
                        sharedStyles.homeCtaActionButton2Text,
                      ]}
                      label={STRINGS.Home.Home_Cta_Action_Button_2.label}
                    >
                      <AppImage
                        widgetId={'Home_Image_ActionIcons_Image'}
                        source={imageSources.image__zq47b}
                        style={styles.homeImageActionIconsImageStyle}
                      />
                      <AppText
                        widgetId={'Home_Label_UserName_Text'}
                        numberOfLines={1}
                        style={[
                          text.label.medium,
                          styles.homeLabelUserNameTextStyle,
                        ]}
                        accessibilityLabel={
                          STRINGS.Home.Home_Label_UserName_Text
                            .accessibilityLabel
                        }
                      >
                        {STRINGS.Home.Home_Label_UserName_Text.label}
                      </AppText>
                    </AppButton>
                    <AppColumn
                      widgetId={'Home_Container_ActionCard_Column'}
                      spacing={8}
                      style={styles.homeContainerActionCardColumnStyle}
                    >
                      <AppImage
                        widgetId={'Home_Image_ActionIcons_Image_2'}
                        source={imageSources.image__fqkc}
                        style={styles.homeImageActionIconsImage2Style}
                      />
                      <AppText
                        widgetId={'Home_Label_UserName_Text_2'}
                        numberOfLines={1}
                        style={[
                          text.label.medium,
                          styles.homeLabelUserNameText2Style,
                        ]}
                        accessibilityLabel={
                          STRINGS.Home.Home_Label_UserName_Text_2
                            .accessibilityLabel
                        }
                      >
                        {STRINGS.Home.Home_Label_UserName_Text_2.label}
                      </AppText>
                    </AppColumn>
                    <AppColumn
                      widgetId={'Home_Container_ActionCard_Column_2'}
                      spacing={8}
                      style={styles.homeContainerActionCardColumn2Style}
                    >
                      <AppImage
                        widgetId={'Home_Image_ActionIcons_Image_3'}
                        source={imageSources.image__9ess}
                        style={styles.homeImageActionIconsImage3Style}
                      />
                      <AppText
                        widgetId={'Home_Label_UserName_Text_3'}
                        numberOfLines={1}
                        style={[
                          text.label.medium,
                          styles.homeLabelUserNameText3Style,
                        ]}
                        accessibilityLabel={
                          STRINGS.Home.Home_Label_UserName_Text_3
                            .accessibilityLabel
                        }
                      >
                        {STRINGS.Home.Home_Label_UserName_Text_3.label}
                      </AppText>
                    </AppColumn>
                  </AppRow>
                  <ASListView
                    itemSpacing={12}
                    orientation={'vertical'}
                    showsHorizontalScrollIndicator={false}
                    name={'Home_List'}
                    style={styles.homeListStyle}
                    renderItem={renderItem_Home_List}
                    data={[
                      {
                        title22: 'Quick Loans',
                        description:
                          'Instant personal loans anytime, anywhere – no collateral required.',
                        financeServicesIllustrations:
                          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/da08901a-8473-4e70-bca2-1db01cfa6353-i3088_7697_162_2713.svg',
                      },
                      {
                        title22: 'Cash Advance ',
                        description:
                          'Instant cash up to SGD 500 when you need it most. Quick and hassle-free!',
                        financeServicesIllustrations:
                          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/5f3bdbd8-2dda-4ba0-99dd-efe4b535d483-i3088_7698_162_2713.png',
                      },
                      {
                        title22: 'Easy Pay',
                        description:
                          'Make shopping a breeze! Divide your online purchases into 3 easy monthly payments.',
                        financeServicesIllustrations:
                          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/bb09dc81-ddc8-4ab6-9a26-2415fef51104-i3088_7699_162_2713.png',
                      },
                      {
                        title22: 'Envelop Savings',
                        description:
                          'Set goals, achieve dreams with Envelop Savings – One deposit at a time!',
                        financeServicesIllustrations:
                          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/8874c8f3-c936-42ff-8319-6d94ae3412af-i3088_7700_162_2713.png',
                      },
                    ]}
                    testId={'Home_List'}
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
  homeContainerColumnStyle: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    overflow: 'hidden',
    minHeight: 56,
    flexShrink: 1,
    alignItems: 'stretch',
  },
  homeContainerTabRowStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 8,
    paddingRight: 24,
    paddingBottom: 8,
    height: 56,
    paddingLeft: 24,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  homeCtaActionButtonStyle: {
    borderWidth: 1,
    borderRadius: 4,
    paddingRight: 0,
    borderColor: '#e0e0d3',
    backgroundColor: 'transparent',
    paddingTop: 0,
    paddingBottom: 0,
    height: 40,
    padding: 8,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  homeCtaActionButtonIconStyles: {
    iconSize: 24.001209405076224,
    color: color.brand.onPrimary,
  },
  homeLabelHiJohnDoeTextStyle: {
    fontWeight: 600,
    fontFamily: 'Outfit-600-normal',
    lineHeight: 20,
    color: '#231f20',
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeContainerColumn2Style: {
    paddingTop: 16,
    paddingBottom: 16,
    alignSelf: 'stretch',
    flex: 1,
    paddingRight: 24,
    paddingLeft: 24,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  homeInputActivateYourVirtualCardNowInputStyle: {
    alignSelf: 'stretch',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    height: 48,
    paddingLeft: space['3'],
    width: '100%',
    paddingRight: space['3'],
  },
  homeInputActivateYourVirtualCardNowInputContainerStyle: { padding: 12 },
  homeContainerAtmCardColumnStyle: {
    backgroundColor: '#fbbf2d',
    shadowRadius: 10,
    paddingBottom: 22,
    shadowColor: 'rgba(51,51,51,0.15)',
    overflow: 'hidden',
    width: '80.7%',
    paddingTop: 12,
    borderRadius: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 2 },
  },
  homeContainerContentColumn2Style: {
    paddingRight: 12,
    alignSelf: 'stretch',
    paddingLeft: 12,
    alignItems: 'flex-end',
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
  homeContainerLogoContainerRowStyle: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    aspectRatio: 12,
    alignItems: 'center',
    flexShrink: 1,
  },
  homeImageLogoAsimageImageStyle: {
    aspectRatio: 6.7188,
    height: 17,
    width: '47.5%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  homeContainerInputItemDetailColumnStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 48,
    flexShrink: 1,
    alignItems: 'stretch',
  },
  homeContainerContentRowStyle: {
    height: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  homeLabelTotalBalanceTextStyle: {
    alignSelf: 'flex-start',
    lineHeight: 16,
    color: '#231f20',
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Outfit-400-normal',
    width: 78,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeContainerContentRow2Style: {
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 32,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  homeLabelSgdTextStyle: {
    fontFamily: 'Outfit-600-normal',
    color: '#231f20',
    fontSize: 16,
    lineHeight: 20,
    width: 42,
    fontWeight: 600,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeLabelTextStyle: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 32,
    width: 106,
    color: '#231f20',
    fontFamily: 'Outfit-600-normal',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeCtaViewButtonStyle: {
    paddingRight: 12,
    lineHeight: 16,
    paddingTop: 0,
    width: '38.8%',
    shadowRadius: 10,
    borderColor: '#fbbf2d',
    height: 32,
    paddingLeft: 12,
    paddingBottom: 0,
    textAlign: 'left',
    shadowColor: 'rgba(51,51,51,0.15)',
    backgroundColor: '#faf9f5',
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 2 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  homeCtaViewButtonTextStyle: {
    fontWeight: 600,
    color: '#231f20',
    fontFamily: 'Outfit-600-normal',
    fontSize: 12,
  },
  homeContainerAtmCardColumn2Style: {
    height: 166,
    gradientType: 'linear',
    borderRadius: 8,
    shadowColor: 'rgba(51,51,51,0.15)',
    overflow: 'hidden',
    gradientColors: ['#ffffff', 'rgba(255,253,196,0.84)'],
    gradientStops: [0, 1],
    padding: 12,
    shadowRadius: 10,
    gradientStart: { x: 0.5284090703675828, y: -0.130952374846201 },
    width: '80.7%',
    gradientEnd: { x: 0.5284090703675828, y: 2.9017856622887708 },
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    shadowOffset: { width: 0, height: 2 },
  },
  homeBackgroundLinesImageStyle: {
    height: '100%',
    left: '0%',
    top: '0%',
    objectFit: 'cover',
    width: '100%',
    position: 'absolute',
    flexBasis: 'auto',
  },
  homeContainerColumn3Style: {
    aspectRatio: 5.217391304347826,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  homeLabelMyPointsTextStyle: {
    position: 'absolute',
    lineHeight: 16,
    color: '#231f20',
    fontWeight: 400,
    alignSelf: 'center',
    fontSize: 12,
    top: '0%',
    left: '0%',
    fontFamily: 'Outfit-400-normal',
    width: '93.2%',
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeContainerContentRow3Style: {
    alignSelf: 'stretch',
    left: '0%',
    position: 'absolute',
    height: '69.6%',
    alignItems: 'center',
    top: '30.4%',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  homeImageRatingImageAsimageImageStyle: {
    height: 18,
    width: 18,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  homeContainerTextRowStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  homeLabelRmTextStyle: {
    fontSize: 16,
    width: 32,
    color: '#231f20',
    fontFamily: 'Outfit-600-normal',
    fontWeight: 600,
    lineHeight: 20,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeLabelText2Style: {
    color: '#231f20',
    lineHeight: 32,
    fontSize: 24,
    fontFamily: 'Outfit-600-normal',
    width: 73,
    fontWeight: 600,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeContainerBarcodeOfSquareShapeRowStyle: {
    alignSelf: 'stretch',
    aspectRatio: 4.615384615384615,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  homeImageStyle: {
    width: '100%',
    aspectRatio: 4.6154,
    height: 52,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  homeContainerContentRow4Style: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 14,
    flexShrink: 1,
  },
  homeLabelId2022030219921120TextStyle: {
    width: '50%',
    fontFamily: 'Outfit-400-normal',
    color: '#4d4d4d',
    fontSize: 10,
    lineHeight: 14,
    flex: 1,
    fontWeight: 400,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeLabelExpiry1026TextStyle: {
    fontWeight: 400,
    color: '#4d4d4d',
    width: '50%',
    flex: 1,
    lineHeight: 14,
    fontSize: 10,
    textAlign: 'right',
    fontFamily: 'Outfit-400-normal',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeCtaActionButton2Style: {
    overflow: 'hidden',
    flex: 1,
    height: 80,
    paddingRight: 8,
    borderRadius: 4,
    flexDirection: 'column',
    paddingBottom: 12,
    backgroundColor: '#ffffff',
    paddingLeft: 8,
    shadowRadius: 10,
    shadowColor: 'rgba(51,51,51,0.15)',
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  homeImageActionIconsImageStyle: {
    aspectRatio: 1,
    width: '31.7%',
    height: 32,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  homeLabelUserNameTextStyle: {
    fontWeight: 400,
    alignSelf: 'stretch',
    fontSize: 12,
    lineHeight: 16,
    color: '#231f20',
    fontFamily: 'Outfit-400-normal',
    textAlign: 'center',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeContainerActionCardColumnStyle: {
    alignItems: 'center',
    borderRadius: 4,
    flex: 1,
    paddingLeft: 8,
    backgroundColor: '#ffffff',
    shadowRadius: 10,
    overflow: 'hidden',
    paddingBottom: 12,
    paddingTop: 12,
    shadowColor: 'rgba(51,51,51,0.15)',
    paddingRight: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    shadowOffset: { width: 0, height: 2 },
  },
  homeImageActionIconsImage2Style: {
    width: '31.7%',
    height: 32,
    aspectRatio: 1,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  homeLabelUserNameText2Style: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    color: '#231f20',
    fontFamily: 'Outfit-400-normal',
    fontWeight: 400,
    alignSelf: 'stretch',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeContainerActionCardColumn2Style: {
    shadowColor: 'rgba(51,51,51,0.15)',
    paddingRight: 8,
    overflow: 'hidden',
    paddingTop: 12,
    paddingBottom: 12,
    shadowRadius: 10,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 4,
    paddingLeft: 8,
    flexShrink: 1,
    justifyContent: 'flex-start',
    shadowOffset: { width: 0, height: 2 },
  },
  homeImageActionIconsImage3Style: {
    height: 32,
    aspectRatio: 1,
    width: '31.7%',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
  homeLabelUserNameText3Style: {
    lineHeight: 16,
    fontFamily: 'Outfit-400-normal',
    fontWeight: 400,
    textAlign: 'center',
    color: '#231f20',
    fontSize: 12,
    alignSelf: 'stretch',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  homeListStyle: { alignSelf: 'stretch', flexGrow: 0 },
  homeContainerFinanceServicesColumnStyle: {
    padding: 12,
    shadowRadius: 10,
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0,0,0,0.15)',
    borderRadius: 6,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    shadowOffset: { width: 0, height: 2 },
  },
  homeContainerContentColumn3Style: {
    flex: 1,
    justifyContent: 'center',
    flexShrink: 1,
    alignItems: 'stretch',
  },
  homeCtaFinanceButtonTextStyle: {
    color: '#231f20',
    fontSize: 10,
    fontWeight: 400,
    fontFamily: 'Outfit-400-normal',
  },
  homeCtaFinanceButtonStyle: {
    paddingLeft: 6,
    borderRadius: 4,
    textAlign: 'center',
    lineHeight: 14,
    paddingBottom: 4,
    backgroundColor: '#ffffff',
    height: 22,
    borderColor: '#fbbf2d',
    paddingRight: 6,
    paddingTop: 4,
    borderWidth: 1,
    width: '21.7%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({ web: { display: 'flex' }, default: {} }),
  },
  title22Style: {
    fontSize: 16,
    color: '#231f20',
    alignSelf: 'stretch',
    lineHeight: 20,
    fontFamily: 'Outfit-600-normal',
    fontWeight: 600,
    textAlign: 'left',
    ...Platform.select({ web: { whiteSpace: 'pre-wrap' }, default: {} }),
  },
  financeServicesIllustrationsStyle: {
    backgroundColor: '#f8f2da',
    overflow: 'hidden',
    borderRadius: 4,
    padding: 10,
    height: 78,
    minHeight: 78,
    width: 78,
    objectFit: 'contain',
    flexBasis: 'auto',
  },
});

export default Home;
