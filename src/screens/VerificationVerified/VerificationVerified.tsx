import React from 'react';
import {
  AppAppBar,
  AppButton,
  AppColumn,
  AppContainer,
  AppImage,
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

const VerificationVerified: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressTransfernowverificationVerifiedCtaTransferNowButton =
    async () => {
      navigation.navigate(Route.VERIFICATION_INITIAL_TRANSFER, {});
    };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-280908'}
      testID={'08f013bb-1552-4ee1-8d11-351fe5a2f6d5'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'VerificationVerified_AppBar_SyntheticAppBar_AppBar'}
        leadingShow={false}
        centerMode={'custom'}
        trailingShow={false}
        variant={'transparent'}
        leadingIconSize={24}
        leadingIcon={'arrow_back'}
        style={sharedStyles.homeLiteAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'VerificationVerified_Container_AppBarCustomCentre_Row'}
          spacing={8}
          style={sharedStyles.homeLiteContainerAppBarCustomCentreRow}
        >
          <AppText
            widgetId={'VerificationVerified_Title_HiJohnDoe_Text'}
            numberOfLines={0}
            style={[
              text.label.medium,
              sharedStyles.homeLiteMoreInfoTitleHiJohnDoeText,
            ]}
            accessibilityLabel={
              STRINGS.VerificationVerified
                .VerificationVerified_Title_HiJohnDoe_Text.accessibilityLabel
            }
          >
            {
              STRINGS.VerificationVerified
                .VerificationVerified_Title_HiJohnDoe_Text.label
            }
          </AppText>
          <AppImage
            widgetId={'VerificationVerified_Image_Settings_Image'}
            source={imageSources.image__m60b}
            style={sharedStyles.homeImageVisibilityImage}
          />
        </AppRow>
      </AppAppBar>
      <AppColumn
        widgetId={'VerificationVerified_Container_Column'}
        spacing={20}
        style={sharedStyles.ampContainerColumn}
      >
        <AppColumn
          widgetId={'VerificationVerified_Container_Content_Column'}
          spacing={20}
          style={sharedStyles.homeLiteMoreInfoContainerContentColumn}
        >
          <AppImage
            widgetId={'VerificationVerified_Background_ImageAsimage_Image'}
            source={imageSources.image__goegi}
            style={styles.verificationVerifiedBackgroundImageAsimageImageStyle}
          />
          <AppColumn
            widgetId={'VerificationVerified_Container_Content_Column_2'}
            spacing={8}
            style={sharedStyles.ampContainerTitleColumn}
          >
            <AppText
              widgetId={
                'VerificationVerified_Label_HoorayYourAccountIsNowVe_Text'
              }
              numberOfLines={2}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUserNameText,
              ]}
              accessibilityLabel={
                STRINGS.VerificationVerified
                  .VerificationVerified_Label_HoorayYourAccountIsNowVe_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.VerificationVerified
                  .VerificationVerified_Label_HoorayYourAccountIsNowVe_Text
                  .label
              }
            </AppText>
            <AppText
              widgetId={'VerificationVerified_Body_Text'}
              numberOfLines={2}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUnlockExcitingFeaturesByCoText,
              ]}
              accessibilityLabel={
                STRINGS.VerificationVerified.VerificationVerified_Body_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.VerificationVerified.VerificationVerified_Body_Text
                  .label
              }
            </AppText>
          </AppColumn>
        </AppColumn>
        <AppButton
          widgetId={'VerificationVerified_Cta_TransferNow_Button'}
          onPress={() => {
            onPressTransfernowverificationVerifiedCtaTransferNowButton({});
          }}
          style={sharedStyles.ampCtaContinueButton}
          accessibilityLabel={
            STRINGS.VerificationVerified
              .VerificationVerified_Cta_TransferNow_Button.accessibilityLabel
          }
          label={
            STRINGS.VerificationVerified
              .VerificationVerified_Cta_TransferNow_Button.label
          }
        />
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  verificationVerifiedBackgroundImageAsimageImageStyle: {
    height: 300,
    alignSelf: 'stretch',
    objectFit: 'contain',
    flexBasis: 'auto',
  },
});

export default VerificationVerified;
