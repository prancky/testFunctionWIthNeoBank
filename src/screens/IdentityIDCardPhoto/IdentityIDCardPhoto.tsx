import React from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppImage,
  AppProgressBar,
  AppRow,
  AppText,
} from '@/components/shared';
import { useNavigation } from '@react-navigation/native';

import { imageSources, text } from '@/assets';

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

const IdentityIDCardPhoto: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressContinueidentityIdcardPhotoCtaContinueButton = async () => {
    navigation.navigate(Route.VERIFICATION_ADDRESS, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-108466'}
      testID={'2fa9b715-f553-440b-bf7d-519f8a12e053'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'IdentityIdcardPhoto_AppBar_AppBarAsappHeader_AppBar'}
        leadingIcon={
          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/e8a101dd-b55e-4897-98e7-7c20a70df603-i3734_1426_917_858.png'
        }
        style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
      />
      <AppColumn
        widgetId={'IdentityIdcardPhoto_Container_Column'}
        spacing={20}
        style={sharedStyles.ampContainerColumn}
      >
        <AppColumn
          widgetId={'IdentityIdcardPhoto_Container_ProgressBar_Column'}
          spacing={8}
          style={sharedStyles.identityIdcardPhotoContainerProgressBarColumn}
        >
          <AppText
            widgetId={'IdentityIdcardPhoto_Label_VerifyYourIdentity_Text'}
            numberOfLines={1}
            style={[
              text.label.medium,
              sharedStyles.identityIdcardPhotoLabelVerifyYourIdentityText,
            ]}
            accessibilityLabel={
              STRINGS.IdentityIDCardPhoto
                .IdentityIdcardPhoto_Label_VerifyYourIdentity_Text
                .accessibilityLabel
            }
          >
            {
              STRINGS.IdentityIDCardPhoto
                .IdentityIdcardPhoto_Label_VerifyYourIdentity_Text.label
            }
          </AppText>
          <AppProgressBar
            widgetId={
              'IdentityIdcardPhoto_Container_ProgressBarAsprogr_ProgressBar'
            }
            style={
              sharedStyles.identityIdcardPhotoContainerProgressBarAsprogrProgressBar
            }
          />
        </AppColumn>
        <AppColumn
          widgetId={'IdentityIdcardPhoto_Container_Content_Column'}
          spacing={20}
          style={sharedStyles.ampContainerContentColumn}
        >
          <AppColumn
            widgetId={'IdentityIdcardPhoto_Container_Title_Column'}
            spacing={4}
            style={sharedStyles.identityIdcardPhotoContainerTitleColumn}
          >
            <AppText
              widgetId={'IdentityIdcardPhoto_Label_PhotoOfYourIdCard_Text'}
              numberOfLines={1}
              style={[
                text.label.medium,
                sharedStyles.ampLabelWelcomeToDigiBankText,
              ]}
              accessibilityLabel={
                STRINGS.IdentityIDCardPhoto
                  .IdentityIdcardPhoto_Label_PhotoOfYourIdCard_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.IdentityIDCardPhoto
                  .IdentityIdcardPhoto_Label_PhotoOfYourIdCard_Text.label
              }
            </AppText>
            <AppText
              widgetId={
                'IdentityIdcardPhoto_Label_PhotoOfYourNricOrFinDocu_Text'
              }
              numberOfLines={1}
              style={[
                text.label.medium,
                sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
              ]}
              accessibilityLabel={
                STRINGS.IdentityIDCardPhoto
                  .IdentityIdcardPhoto_Label_PhotoOfYourNricOrFinDocu_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.IdentityIDCardPhoto
                  .IdentityIdcardPhoto_Label_PhotoOfYourNricOrFinDocu_Text.label
              }
            </AppText>
          </AppColumn>
          <AppRow
            widgetId={'IdentityIdcardPhoto_Container_Card_Row'}
            spacing={8}
            style={sharedStyles.dataClasificationOpenAccountContainerCardRow}
          >
            <AppImage
              widgetId={'IdentityIdcardPhoto_Image_Badge_Image'}
              source={imageSources.image__aghec}
              style={
                sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
              }
            />
            <AppColumn
              widgetId={'IdentityIdcardPhoto_Container_Content_Column_2'}
              spacing={4}
              style={sharedStyles.mainContainer}
            >
              <AppText
                widgetId={
                  'IdentityIdcardPhoto_Label_ClearPhotoOfYourIdCard_Text'
                }
                numberOfLines={1}
                style={[
                  text.label.medium,
                  sharedStyles.dataClasificationOpenAccountLabelAboutYouText,
                ]}
                accessibilityLabel={
                  STRINGS.IdentityIDCardPhoto
                    .IdentityIdcardPhoto_Label_ClearPhotoOfYourIdCard_Text
                    .accessibilityLabel
                }
              >
                {
                  STRINGS.IdentityIDCardPhoto
                    .IdentityIdcardPhoto_Label_ClearPhotoOfYourIdCard_Text.label
                }
              </AppText>
              <AppText
                widgetId={
                  'IdentityIdcardPhoto_Label_EnsureDetailsAreFocusedAnd_Text'
                }
                numberOfLines={2}
                style={[
                  text.label.medium,
                  sharedStyles.dataClasificationOpenAccountBodyText,
                ]}
                accessibilityLabel={
                  STRINGS.IdentityIDCardPhoto
                    .IdentityIdcardPhoto_Label_EnsureDetailsAreFocusedAnd_Text
                    .accessibilityLabel
                }
              >
                {
                  STRINGS.IdentityIDCardPhoto
                    .IdentityIdcardPhoto_Label_EnsureDetailsAreFocusedAnd_Text
                    .label
                }
              </AppText>
            </AppColumn>
          </AppRow>
        </AppColumn>
        <AppColumn
          widgetId={'IdentityIdcardPhoto_Container_Action_Column'}
          spacing={8}
          style={sharedStyles.ampContainerTitleColumn}
        >
          <AppRow
            widgetId={'IdentityIdcardPhoto_Container_Content_Row'}
            spacing={8}
            style={sharedStyles.identityIdcardPhotoContainerContentRow}
          >
            <AppImage
              widgetId={'IdentityIdcardPhoto_Image_GppGood_Image'}
              source={imageSources.image__rdeob}
              style={sharedStyles.homeImageVisibilityImage}
            />
            <AppText
              widgetId={
                'IdentityIdcardPhoto_Label_YourDataIsProtectedAccord_Text'
              }
              numberOfLines={2}
              style={[
                text.label.medium,
                sharedStyles.identityIdcardPhotoLabelYourDataIsProtectedAccordText,
              ]}
              accessibilityLabel={
                STRINGS.IdentityIDCardPhoto
                  .IdentityIdcardPhoto_Label_YourDataIsProtectedAccord_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.IdentityIDCardPhoto
                  .IdentityIdcardPhoto_Label_YourDataIsProtectedAccord_Text
                  .label
              }
            </AppText>
          </AppRow>
          <AppButton
            widgetId={'IdentityIdcardPhoto_Cta_Continue_Button'}
            onPress={() => {
              onPressContinueidentityIdcardPhotoCtaContinueButton({});
            }}
            style={sharedStyles.ampCtaContinueButton}
            accessibilityLabel={
              STRINGS.IdentityIDCardPhoto
                .IdentityIdcardPhoto_Cta_Continue_Button.accessibilityLabel
            }
            label={
              STRINGS.IdentityIDCardPhoto
                .IdentityIdcardPhoto_Cta_Continue_Button.label
            }
          />
        </AppColumn>
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({});

export default IdentityIDCardPhoto;
