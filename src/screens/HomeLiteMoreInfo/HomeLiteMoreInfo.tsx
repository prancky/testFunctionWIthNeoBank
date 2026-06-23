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

import { imageSources, text, space } from '@/assets';

import { ASSpacer } from '@/components';

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

const HomeLiteMoreInfo: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressContinuehomeLiteMoreInfoCtaContinueButton = async () => {
    navigation.navigate(Route.VERIFICATION_MORE_INFO, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-478496'}
      testID={'bcc590cf-19c2-40be-8e4b-98810b6af202'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'HomeLiteMoreInfo_AppBar_SyntheticAppBar_AppBar'}
        variant={'transparent'}
        leadingShow={false}
        centerMode={'custom'}
        trailingShow={false}
        leadingIconSize={24}
        leadingIcon={'arrow_back'}
        style={sharedStyles.homeLiteAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'HomeLiteMoreInfo_Container_AppBarCustomCentre_Row'}
          spacing={8}
          style={sharedStyles.homeLiteContainerAppBarCustomCentreRow}
        >
          <AppText
            widgetId={'HomeLiteMoreInfo_Title_HiJohnDoe_Text'}
            numberOfLines={0}
            style={[
              text.label.medium,
              sharedStyles.homeLiteMoreInfoTitleHiJohnDoeText,
            ]}
            accessibilityLabel={
              STRINGS.HomeLiteMoreInfo.HomeLiteMoreInfo_Title_HiJohnDoe_Text
                .accessibilityLabel
            }
          >
            {
              STRINGS.HomeLiteMoreInfo.HomeLiteMoreInfo_Title_HiJohnDoe_Text
                .label
            }
          </AppText>
          <AppImage
            widgetId={'HomeLiteMoreInfo_Image_Settings_Image'}
            source={imageSources.image__8gqg6}
            style={sharedStyles.homeImageVisibilityImage}
          />
        </AppRow>
      </AppAppBar>
      <AppColumn
        widgetId={'HomeLiteMoreInfo_Container_Column'}
        spacing={20}
        style={sharedStyles.ampContainerColumn}
      >
        <ASSpacer
          name={'HomeLiteMoreInfo_Container_Spacing_Spacer'}
          style={styles.homeLiteMoreInfoContainerSpacingSpacerStyle}
          testId={'HomeLiteMoreInfo_Container_Spacing_Spacer'}
        />
        <AppColumn
          widgetId={'HomeLiteMoreInfo_Container_Content_Column'}
          spacing={20}
          style={sharedStyles.homeLiteMoreInfoContainerContentColumn}
        >
          <AppImage
            widgetId={'HomeLiteMoreInfo_Background_Image'}
            source={imageSources.image__v5hwz}
            style={sharedStyles.homeLiteMoreInfoBackgroundImage}
          />
          <AppColumn
            widgetId={'HomeLiteMoreInfo_Container_Content_Column_2'}
            spacing={8}
            style={sharedStyles.ampContainerTitleColumn}
          >
            <AppText
              widgetId={'HomeLiteMoreInfo_Label_WeNeedFewMoreInformation_Text'}
              numberOfLines={1}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUserNameText,
              ]}
              accessibilityLabel={
                STRINGS.HomeLiteMoreInfo
                  .HomeLiteMoreInfo_Label_WeNeedFewMoreInformation_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.HomeLiteMoreInfo
                  .HomeLiteMoreInfo_Label_WeNeedFewMoreInformation_Text.label
              }
            </AppText>
            <AppText
              widgetId={'HomeLiteMoreInfo_Body_Text'}
              numberOfLines={3}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUnlockExcitingFeaturesByCoText,
              ]}
              accessibilityLabel={
                STRINGS.HomeLiteMoreInfo.HomeLiteMoreInfo_Body_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.HomeLiteMoreInfo.HomeLiteMoreInfo_Body_Text.label}
            </AppText>
          </AppColumn>
        </AppColumn>
        <AppButton
          widgetId={'HomeLiteMoreInfo_Cta_Continue_Button'}
          onPress={() => {
            onPressContinuehomeLiteMoreInfoCtaContinueButton({});
          }}
          style={sharedStyles.ampCtaContinueButton}
          label={
            STRINGS.HomeLiteMoreInfo.HomeLiteMoreInfo_Cta_Continue_Button.label
          }
          accessibilityLabel={
            STRINGS.HomeLiteMoreInfo.HomeLiteMoreInfo_Cta_Continue_Button
              .accessibilityLabel
          }
        />
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  homeLiteMoreInfoContainerSpacingSpacerStyle: {
    height: 52,
    width: space['2'],
  },
});

export default HomeLiteMoreInfo;
