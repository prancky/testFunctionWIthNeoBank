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

const LiteHomeVerifying: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressCheckStatusliteHomeVerifyingCtaCheckStatusButton = async () => {
    navigation.navigate(Route.VERIFICATION_VERIFIED, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-196233'}
      testID={'9354e3dd-261a-47a6-9592-e8c4fae4fa5d'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'LiteHomeVerifying_AppBar_SyntheticAppBar_AppBar'}
        centerMode={'custom'}
        variant={'transparent'}
        leadingShow={false}
        trailingShow={false}
        leadingIconSize={24}
        leadingIcon={'arrow_back'}
        style={sharedStyles.homeLiteAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'LiteHomeVerifying_Container_AppBarCustomCentre_Row'}
          spacing={8}
          style={sharedStyles.homeLiteContainerAppBarCustomCentreRow}
        >
          <AppText
            widgetId={'LiteHomeVerifying_Title_HiJohnDoe_Text'}
            numberOfLines={0}
            style={[
              text.label.medium,
              sharedStyles.homeLiteMoreInfoTitleHiJohnDoeText,
            ]}
            accessibilityLabel={
              STRINGS.LiteHomeVerifying.LiteHomeVerifying_Title_HiJohnDoe_Text
                .accessibilityLabel
            }
          >
            {
              STRINGS.LiteHomeVerifying.LiteHomeVerifying_Title_HiJohnDoe_Text
                .label
            }
          </AppText>
          <AppImage
            widgetId={'LiteHomeVerifying_Image_Settings_Image'}
            source={imageSources.image__yfe9t}
            style={sharedStyles.homeImageVisibilityImage}
          />
        </AppRow>
      </AppAppBar>
      <AppColumn
        widgetId={'LiteHomeVerifying_Container_Column'}
        spacing={space['2']}
        style={sharedStyles.homeLiteProcessingContainerColumn}
      >
        <AppColumn
          widgetId={'LiteHomeVerifying_Container_Content_Column'}
          spacing={20}
          style={sharedStyles.homeLiteMoreInfoContainerContentColumn}
        >
          <AppImage
            widgetId={'LiteHomeVerifying_Background_Image'}
            source={imageSources.image__xkied}
            style={sharedStyles.homeLiteMoreInfoBackgroundImage}
          />
          <AppColumn
            widgetId={'LiteHomeVerifying_Container_Content_Column_2'}
            spacing={8}
            style={sharedStyles.ampContainerTitleColumn}
          >
            <AppText
              widgetId={
                'LiteHomeVerifying_Label_WeAreCurrentlyInTheProces_Text'
              }
              numberOfLines={2}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUserNameText,
              ]}
              accessibilityLabel={
                STRINGS.LiteHomeVerifying
                  .LiteHomeVerifying_Label_WeAreCurrentlyInTheProces_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.LiteHomeVerifying
                  .LiteHomeVerifying_Label_WeAreCurrentlyInTheProces_Text.label
              }
            </AppText>
            <AppText
              widgetId={'LiteHomeVerifying_Body_Text'}
              numberOfLines={3}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUnlockExcitingFeaturesByCoText,
              ]}
              accessibilityLabel={
                STRINGS.LiteHomeVerifying.LiteHomeVerifying_Body_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.LiteHomeVerifying.LiteHomeVerifying_Body_Text.label}
            </AppText>
          </AppColumn>
        </AppColumn>
        <AppButton
          widgetId={'LiteHomeVerifying_Cta_CheckStatus_Button'}
          onPress={() => {
            onPressCheckStatusliteHomeVerifyingCtaCheckStatusButton({});
          }}
          style={sharedStyles.ampCtaContinueButton}
          accessibilityLabel={
            STRINGS.LiteHomeVerifying.LiteHomeVerifying_Cta_CheckStatus_Button
              .accessibilityLabel
          }
          label={
            STRINGS.LiteHomeVerifying.LiteHomeVerifying_Cta_CheckStatus_Button
              .label
          }
        />
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({});

export default LiteHomeVerifying;
