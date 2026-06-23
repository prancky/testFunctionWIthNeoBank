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

const HomeLite: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressOpenaccounthomeLiteCtaOpenButton = async () => {
    navigation.navigate(Route.ELIGIBILITY_REQUIREMENT, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-567335'}
      testID={'68526003-8aad-4122-8991-06771f332513'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'HomeLite_AppBar_SyntheticAppBar_AppBar'}
        centerMode={'custom'}
        trailingShow={false}
        variant={'transparent'}
        leadingShow={false}
        leadingIconSize={24}
        leadingIcon={'arrow_back'}
        style={sharedStyles.homeLiteAppBarSyntheticAppBarAppBar}
      >
        <AppRow
          widgetId={'HomeLite_Container_AppBarCustomCentre_Row'}
          spacing={8}
          style={sharedStyles.homeLiteContainerAppBarCustomCentreRow}
        >
          <AppText
            widgetId={'HomeLite_Title_HiJohnDoe_Text'}
            numberOfLines={0}
            style={[
              text.label.medium,
              sharedStyles.homeLiteMoreInfoTitleHiJohnDoeText,
            ]}
            accessibilityLabel={
              STRINGS.HomeLite.HomeLite_Title_HiJohnDoe_Text.accessibilityLabel
            }
          >
            {STRINGS.HomeLite.HomeLite_Title_HiJohnDoe_Text.label}
          </AppText>
          <AppImage
            widgetId={'HomeLite_Image_Settings_Image'}
            source={imageSources.image__ms2ln}
            style={sharedStyles.homeImageVisibilityImage}
          />
        </AppRow>
      </AppAppBar>
      <AppColumn
        widgetId={'HomeLite_Container_Column'}
        spacing={20}
        style={sharedStyles.ampContainerColumn}
      >
        <AppColumn
          widgetId={'HomeLite_Container_Content_Column'}
          spacing={20}
          style={styles.homeLiteContainerContentColumnStyle}
        >
          <AppImage
            widgetId={'HomeLite_Background_ImageAsimage_Image'}
            source={imageSources.image__18t8}
            style={sharedStyles.homeLiteBackgroundImageAsimageImage}
          />
          <AppColumn
            widgetId={'HomeLite_Container_Content_Column_2'}
            spacing={8}
            style={sharedStyles.ampContainerContentColumn}
          >
            <AppText
              widgetId={'HomeLite_Label_UserName_Text'}
              numberOfLines={1}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUserNameText,
              ]}
              accessibilityLabel={
                STRINGS.HomeLite.HomeLite_Label_UserName_Text.accessibilityLabel
              }
            >
              {STRINGS.HomeLite.HomeLite_Label_UserName_Text.label}
            </AppText>
            <AppText
              widgetId={'HomeLite_Label_UnlockExcitingFeaturesByCo_Text'}
              numberOfLines={2}
              style={[
                text.label.medium,
                sharedStyles.homeLiteLabelUnlockExcitingFeaturesByCoText,
              ]}
              accessibilityLabel={
                STRINGS.HomeLite.HomeLite_Label_UnlockExcitingFeaturesByCo_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.HomeLite.HomeLite_Label_UnlockExcitingFeaturesByCo_Text
                  .label
              }
            </AppText>
          </AppColumn>
        </AppColumn>
        <AppButton
          widgetId={'HomeLite_Cta_Open_Button'}
          onPress={() => {
            onPressOpenaccounthomeLiteCtaOpenButton({});
          }}
          style={sharedStyles.ampCtaContinueButton}
          accessibilityLabel={
            STRINGS.HomeLite.HomeLite_Cta_Open_Button.accessibilityLabel
          }
          label={STRINGS.HomeLite.HomeLite_Cta_Open_Button.label}
        />
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  homeLiteContainerContentColumnStyle: {
    flex: 1,
    paddingTop: 20,
    alignSelf: 'stretch',
    flexShrink: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default HomeLite;
