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

const HomeLiteProcessing: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressCheckStatushomeLiteProcessingCtaCheckStatusButton = async () => {
    navigation.navigate(Route.HOME_LITE_MORE_INFO, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-257994'}
      testID={'fb7553ae-71d3-498a-8002-662b82483031'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'HomeLiteProcessing_AppBar_SyntheticAppBar_AppBar'}
        leadingShow={false}
        centerMode={'custom'}
        trailingShow={false}
        variant={'transparent'}
        leadingIconSize={24}
        leadingIcon={'arrow_back'}
        style={sharedStyles.homeLiteAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'HomeLiteProcessing_Container_AppBarCustomCentre_Row'}
          spacing={8}
          style={sharedStyles.homeLiteContainerAppBarCustomCentreRow}
        >
          <AppText
            widgetId={'HomeLiteProcessing_Title_HiJohnDoe_Text'}
            numberOfLines={0}
            style={[
              text.label.medium,
              sharedStyles.homeLiteMoreInfoTitleHiJohnDoeText,
            ]}
            accessibilityLabel={
              STRINGS.HomeLiteProcessing.HomeLiteProcessing_Title_HiJohnDoe_Text
                .accessibilityLabel
            }
          >
            {
              STRINGS.HomeLiteProcessing.HomeLiteProcessing_Title_HiJohnDoe_Text
                .label
            }
          </AppText>
          <AppImage
            widgetId={'HomeLiteProcessing_Image_Settings_Image'}
            source={imageSources.image__j1iv}
            style={sharedStyles.homeImageVisibilityImage}
          />
        </AppRow>
      </AppAppBar>
      <AppColumn
        widgetId={'HomeLiteProcessing_Container_Column'}
        spacing={space['2']}
        style={sharedStyles.homeLiteProcessingContainerColumn}
      >
        <AppColumn
          widgetId={'HomeLiteProcessing_Container_Content_Column'}
          spacing={20}
          style={sharedStyles.homeLiteMoreInfoContainerContentColumn}
        >
          <AppImage
            widgetId={'HomeLiteProcessing_Background_Image'}
            source={imageSources.image__4rh0}
            style={sharedStyles.homeLiteMoreInfoBackgroundImage}
          />
          <AppColumn
            widgetId={'HomeLiteProcessing_Container_Content_Column_2'}
            spacing={8}
            style={sharedStyles.ampContainerTitleColumn}
          >
            <AppText
              widgetId={
                'HomeLiteProcessing_Label_WeAreCurrentlyInTheProces_Text'
              }
              numberOfLines={2}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUserNameText,
              ]}
              accessibilityLabel={
                STRINGS.HomeLiteProcessing
                  .HomeLiteProcessing_Label_WeAreCurrentlyInTheProces_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.HomeLiteProcessing
                  .HomeLiteProcessing_Label_WeAreCurrentlyInTheProces_Text.label
              }
            </AppText>
            <AppText
              widgetId={'HomeLiteProcessing_Body_Text'}
              numberOfLines={3}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUnlockExcitingFeaturesByCoText,
              ]}
              accessibilityLabel={
                STRINGS.HomeLiteProcessing.HomeLiteProcessing_Body_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.HomeLiteProcessing.HomeLiteProcessing_Body_Text.label}
            </AppText>
          </AppColumn>
        </AppColumn>
        <AppButton
          widgetId={'HomeLiteProcessing_Cta_CheckStatus_Button'}
          onPress={() => {
            onPressCheckStatushomeLiteProcessingCtaCheckStatusButton({});
          }}
          style={sharedStyles.ampCtaContinueButton}
          accessibilityLabel={
            STRINGS.HomeLiteProcessing.HomeLiteProcessing_Cta_CheckStatus_Button
              .accessibilityLabel
          }
          label={
            STRINGS.HomeLiteProcessing.HomeLiteProcessing_Cta_CheckStatus_Button
              .label
          }
        />
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({});

export default HomeLiteProcessing;
