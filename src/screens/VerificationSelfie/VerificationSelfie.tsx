import React from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppIconButton,
  AppImage,
  AppProgressBar,
  AppRow,
  AppText,
} from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { imageSources, space, text } from '@/assets';

import { StyleSheet } from 'react-native';
import { sharedStyles } from '@/components/shared/sharedStyles';

import Route from '@/navigation/routes';
import { useClearHeaderActions } from '@/utils/screen.effects';

import { STRINGS } from '@/strings';

type ScreenRouteParams = {};

type ScreenProps = {
  route: {
    params: ScreenRouteParams;
  };
};

const VerificationSelfie: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressContinueverificationSelfieCtaContinueButton = async () => {
    navigation.navigate(Route.VERIFICATION_DETAILS, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-210171'}
      testID={'4c82546c-8aaf-4f78-8200-069e6ed2a930'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'VerificationSelfie_AppBar_AppBarAsappHeader_AppBar'}
        leadingIcon={
          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/04e7788e-b8e6-48a8-9c08-bd16a2f719b8-i3734_1442_917_858.png'
        }
        style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
      />
      <AppColumn
        widgetId={'VerificationSelfie_Container_Column'}
        spacing={20}
        style={sharedStyles.ampContainerColumn}
      >
        <AppColumn
          widgetId={'VerificationSelfie_Container_ProgressBar_Column'}
          spacing={8}
          style={sharedStyles.identityIdcardPhotoContainerProgressBarColumn}
        >
          <AppText
            widgetId={'VerificationSelfie_Label_VerifyYourIdentity_Text'}
            numberOfLines={1}
            style={[
              text.label.medium,
              sharedStyles.identityIdcardPhotoLabelVerifyYourIdentityText,
            ]}
            accessibilityLabel={
              STRINGS.VerificationSelfie
                .VerificationSelfie_Label_VerifyYourIdentity_Text
                .accessibilityLabel
            }
          >
            {
              STRINGS.VerificationSelfie
                .VerificationSelfie_Label_VerifyYourIdentity_Text.label
            }
          </AppText>
          <AppProgressBar
            widgetId={
              'VerificationSelfie_Container_ProgressBarAsprogre_ProgressBar'
            }
            style={
              sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
            }
          />
        </AppColumn>
        <AppColumn
          widgetId={'VerificationSelfie_Container_Content_Column'}
          spacing={20}
          style={sharedStyles.ampContainerContentColumn}
        >
          <AppColumn
            widgetId={'VerificationSelfie_Container_Title_Column'}
            spacing={4}
            style={sharedStyles.identityIdcardPhotoContainerTitleColumn}
          >
            <AppText
              widgetId={'VerificationSelfie_Label_TakeAselfie_Text'}
              numberOfLines={1}
              style={[
                text.label.medium,
                sharedStyles.ampLabelWelcomeToDigiBankText,
              ]}
              accessibilityLabel={
                STRINGS.VerificationSelfie
                  .VerificationSelfie_Label_TakeAselfie_Text.accessibilityLabel
              }
            >
              {
                STRINGS.VerificationSelfie
                  .VerificationSelfie_Label_TakeAselfie_Text.label
              }
            </AppText>
            <AppText
              widgetId={
                'VerificationSelfie_Label_WeLlCompareThisWithYourD_Text'
              }
              numberOfLines={1}
              style={[
                text.label.medium,
                sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
              ]}
              accessibilityLabel={
                STRINGS.VerificationSelfie
                  .VerificationSelfie_Label_WeLlCompareThisWithYourD_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.VerificationSelfie
                  .VerificationSelfie_Label_WeLlCompareThisWithYourD_Text.label
              }
            </AppText>
          </AppColumn>
          <AppColumn
            widgetId={'VerificationSelfie_Container_List_Column'}
            spacing={8}
            style={sharedStyles.ampContainerContentColumn}
          >
            <AppRow
              widgetId={'VerificationSelfie_Container_Card_Row'}
              spacing={8}
              style={sharedStyles.dataClasificationOpenAccountContainerCardRow}
            >
              <AppImage
                widgetId={'VerificationSelfie_Image_Lightbulb_Image'}
                source={imageSources.image__hzd1}
                style={
                  sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
                }
              />
              <AppColumn
                widgetId={'VerificationSelfie_Container_Content_Column_2'}
                spacing={4}
                style={
                  sharedStyles.dataClasificationOpenAccountContainerContentColumn2
                }
              >
                <AppText
                  widgetId={'VerificationSelfie_Label_PostureAndLights_Text'}
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountLabelAboutYouText,
                  ]}
                  accessibilityLabel={
                    STRINGS.VerificationSelfie
                      .VerificationSelfie_Label_PostureAndLights_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.VerificationSelfie
                      .VerificationSelfie_Label_PostureAndLights_Text.label
                  }
                </AppText>
                <AppText
                  widgetId={
                    'VerificationSelfie_Label_FaceForwardAndMakeSureYou_Text'
                  }
                  numberOfLines={2}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountBodyText,
                  ]}
                  accessibilityLabel={
                    STRINGS.VerificationSelfie
                      .VerificationSelfie_Label_FaceForwardAndMakeSureYou_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.VerificationSelfie
                      .VerificationSelfie_Label_FaceForwardAndMakeSureYou_Text
                      .label
                  }
                </AppText>
              </AppColumn>
            </AppRow>
            <AppRow
              widgetId={'VerificationSelfie_Container_Card_Row_2'}
              spacing={8}
              style={sharedStyles.dataClasificationOpenAccountContainerCardRow}
            >
              <AppColumn
                widgetId={
                  'VerificationSelfie_Container_SelfieIconVisualWrapper_Column'
                }
                spacing={space['2']}
                style={
                  styles.verificationSelfieContainerSelfieIconVisualWrapperColumnStyle
                }
              >
                <AppIconButton
                  widgetId={'VerificationSelfie_Icon_SelfieIcon_Icon'}
                  size={24}
                  icon={
                    'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/873b7f69-ac1e-480b-9f1c-3f4722d36578-3221_2548.svg'
                  }
                  style={styles.verificationSelfieIconSelfieIconIconStyle}
                />
              </AppColumn>
              <AppColumn
                widgetId={'VerificationSelfie_Container_Content_Column_3'}
                spacing={4}
                style={
                  sharedStyles.dataClasificationOpenAccountContainerContentColumn2
                }
              >
                <AppText
                  widgetId={'VerificationSelfie_Label_ClearFace_Text'}
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountLabelAboutYouText,
                  ]}
                  accessibilityLabel={
                    STRINGS.VerificationSelfie
                      .VerificationSelfie_Label_ClearFace_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.VerificationSelfie
                      .VerificationSelfie_Label_ClearFace_Text.label
                  }
                </AppText>
                <AppText
                  widgetId={
                    'VerificationSelfie_Label_RemoveAnythingThatCoversYo_Text'
                  }
                  numberOfLines={2}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountBodyText,
                  ]}
                  accessibilityLabel={
                    STRINGS.VerificationSelfie
                      .VerificationSelfie_Label_RemoveAnythingThatCoversYo_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.VerificationSelfie
                      .VerificationSelfie_Label_RemoveAnythingThatCoversYo_Text
                      .label
                  }
                </AppText>
              </AppColumn>
            </AppRow>
          </AppColumn>
        </AppColumn>
        <AppColumn
          widgetId={'VerificationSelfie_Container_Action_Column'}
          spacing={8}
          style={sharedStyles.ampContainerTitleColumn}
        >
          <AppRow
            widgetId={'VerificationSelfie_Container_Content_Row'}
            spacing={8}
            style={sharedStyles.identityIdcardPhotoContainerContentRow}
          >
            <AppImage
              widgetId={'VerificationSelfie_Image_GppGood_Image'}
              source={imageSources.image__v531k}
              style={sharedStyles.homeImageVisibilityImage}
            />
            <AppText
              widgetId={
                'VerificationSelfie_Label_YourDataIsProtectedAccord_Text'
              }
              numberOfLines={2}
              style={[
                text.label.medium,
                sharedStyles.identityIdcardPhotoLabelYourDataIsProtectedAccordText,
              ]}
              accessibilityLabel={
                STRINGS.VerificationSelfie
                  .VerificationSelfie_Label_YourDataIsProtectedAccord_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.VerificationSelfie
                  .VerificationSelfie_Label_YourDataIsProtectedAccord_Text.label
              }
            </AppText>
          </AppRow>
          <AppButton
            widgetId={'VerificationSelfie_Cta_Continue_Button'}
            onPress={() => {
              onPressContinueverificationSelfieCtaContinueButton({});
            }}
            style={sharedStyles.ampCtaContinueButton}
            label={
              STRINGS.VerificationSelfie.VerificationSelfie_Cta_Continue_Button
                .label
            }
            accessibilityLabel={
              STRINGS.VerificationSelfie.VerificationSelfie_Cta_Continue_Button
                .accessibilityLabel
            }
          />
        </AppColumn>
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  verificationSelfieContainerSelfieIconVisualWrapperColumnStyle: {
    backgroundColor: 'transparent',
    height: 24,
    alignItems: 'center',
    width: 24,
    justifyContent: 'center',
    borderRadius: 0,
    flexShrink: 1,
  },
  verificationSelfieIconSelfieIconIconStyle: {
    width: '100%',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
});

export default VerificationSelfie;
