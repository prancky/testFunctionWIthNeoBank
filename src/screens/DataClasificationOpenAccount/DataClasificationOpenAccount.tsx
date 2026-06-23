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

const DataClasificationOpenAccount: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressLetSsstartdataClasificationOpenAccountCtaLetSstartButton =
    async () => {
      navigation.navigate(Route.IDENTITY_I_D_CARD_PHOTO, {});
    };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-982331'}
      testID={'aa76eab4-8026-480a-ba2a-91e5336db92c'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={
          'DataClasificationOpenAccount_AppBar_AppBarAsappHeader_AppBar'
        }
        leadingIcon={
          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/f1780618-f1ad-449a-a4f2-cb0882658a22-i3734_1418_917_858.png'
        }
        style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
      />
      <AppColumn
        widgetId={'DataClasificationOpenAccount_Container_Column'}
        spacing={20}
        style={sharedStyles.ampContainerColumn}
      >
        <AppColumn
          widgetId={'DataClasificationOpenAccount_Container_Content_Column'}
          spacing={20}
          style={sharedStyles.ampContainerContentColumn}
        >
          <AppColumn
            widgetId={'DataClasificationOpenAccount_Container_Title_Column'}
            spacing={4}
            style={sharedStyles.ampContainerTitleColumn}
          >
            <AppText
              widgetId={
                'DataClasificationOpenAccount_Label_OpenYourAccountIn8Mi_Text'
              }
              numberOfLines={3}
              style={[
                text.label.medium,
                sharedStyles.ampLabelWelcomeToDigiBankText,
              ]}
              accessibilityLabel={
                STRINGS.DataClasificationOpenAccount
                  .DataClasificationOpenAccount_Label_OpenYourAccountIn8Mi_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.DataClasificationOpenAccount
                  .DataClasificationOpenAccount_Label_OpenYourAccountIn8Mi_Text
                  .label
              }
            </AppText>
            <AppText
              widgetId={
                'DataClasificationOpenAccount_Label_HereSwhatYouNeedToDo_Text'
              }
              numberOfLines={1}
              style={[
                text.label.medium,
                sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
              ]}
              accessibilityLabel={
                STRINGS.DataClasificationOpenAccount
                  .DataClasificationOpenAccount_Label_HereSwhatYouNeedToDo_Text
                  .accessibilityLabel
              }
            >
              {
                STRINGS.DataClasificationOpenAccount
                  .DataClasificationOpenAccount_Label_HereSwhatYouNeedToDo_Text
                  .label
              }
            </AppText>
          </AppColumn>
          <AppColumn
            widgetId={'DataClasificationOpenAccount_Container_List_Column'}
            spacing={8}
            style={sharedStyles.ampContainerContentColumn}
          >
            <AppRow
              widgetId={'DataClasificationOpenAccount_Container_Card_Row'}
              spacing={8}
              style={sharedStyles.dataClasificationOpenAccountContainerCardRow}
            >
              <AppImage
                widgetId={'DataClasificationOpenAccount_Image_Badge_Image'}
                source={imageSources.image__2sui6}
                style={
                  sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
                }
              />
              <AppColumn
                widgetId={
                  'DataClasificationOpenAccount_Container_Content_Column_2'
                }
                spacing={4}
                style={sharedStyles.mainContainer}
              >
                <AppText
                  widgetId={
                    'DataClasificationOpenAccount_Label_VerifyYourIdentity_Text'
                  }
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountLabelAboutYouText,
                  ]}
                  accessibilityLabel={
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_VerifyYourIdentity_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_VerifyYourIdentity_Text
                      .label
                  }
                </AppText>
                <AppText
                  widgetId={
                    'DataClasificationOpenAccount_Label_CheckingToMakeSureYo_Text'
                  }
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountBodyText,
                  ]}
                  accessibilityLabel={
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_CheckingToMakeSureYo_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_CheckingToMakeSureYo_Text
                      .label
                  }
                </AppText>
              </AppColumn>
            </AppRow>
            <AppRow
              widgetId={'DataClasificationOpenAccount_Container_Card_Row_2'}
              spacing={8}
              style={sharedStyles.dataClasificationOpenAccountContainerCardRow}
            >
              <AppImage
                widgetId={
                  'DataClasificationOpenAccount_Image_BusinessCenter_Image'
                }
                source={imageSources.image__o6tx}
                style={
                  sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
                }
              />
              <AppColumn
                widgetId={
                  'DataClasificationOpenAccount_Container_Content_Column_3'
                }
                spacing={4}
                style={sharedStyles.mainContainer}
              >
                <AppText
                  widgetId={'DataClasificationOpenAccount_Label_AboutYou_Text'}
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountLabelAboutYouText,
                  ]}
                  accessibilityLabel={
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_AboutYou_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_AboutYou_Text.label
                  }
                </AppText>
                <AppText
                  widgetId={'DataClasificationOpenAccount_Body_Text'}
                  numberOfLines={3}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountBodyText,
                  ]}
                  accessibilityLabel={
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Body_Text.accessibilityLabel
                  }
                >
                  {
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Body_Text.label
                  }
                </AppText>
              </AppColumn>
            </AppRow>
            <AppRow
              widgetId={'DataClasificationOpenAccount_Container_Card_Row_3'}
              spacing={8}
              style={sharedStyles.dataClasificationOpenAccountContainerCardRow}
            >
              <AppImage
                widgetId={'DataClasificationOpenAccount_Image_AtmCards_Image'}
                source={imageSources.image__ycl1v}
                style={
                  sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
                }
              />
              <AppColumn
                widgetId={
                  'DataClasificationOpenAccount_Container_Content_Column_4'
                }
                spacing={4}
                style={sharedStyles.mainContainer}
              >
                <AppText
                  widgetId={
                    'DataClasificationOpenAccount_Label_YourAccount_Text'
                  }
                  numberOfLines={1}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountLabelAboutYouText,
                  ]}
                  accessibilityLabel={
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_YourAccount_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_YourAccount_Text.label
                  }
                </AppText>
                <AppText
                  widgetId={
                    'DataClasificationOpenAccount_Label_HowYouPlanToUseYourD_Text'
                  }
                  numberOfLines={2}
                  style={[
                    text.label.medium,
                    sharedStyles.dataClasificationOpenAccountBodyText,
                  ]}
                  accessibilityLabel={
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_HowYouPlanToUseYourD_Text
                      .accessibilityLabel
                  }
                >
                  {
                    STRINGS.DataClasificationOpenAccount
                      .DataClasificationOpenAccount_Label_HowYouPlanToUseYourD_Text
                      .label
                  }
                </AppText>
              </AppColumn>
            </AppRow>
          </AppColumn>
        </AppColumn>
        <AppButton
          widgetId={'DataClasificationOpenAccount_Cta_LetSstart_Button'}
          onPress={() => {
            onPressLetSsstartdataClasificationOpenAccountCtaLetSstartButton({});
          }}
          style={sharedStyles.ampCtaContinueButton}
          label={
            STRINGS.DataClasificationOpenAccount
              .DataClasificationOpenAccount_Cta_LetSstart_Button.label
          }
          accessibilityLabel={
            STRINGS.DataClasificationOpenAccount
              .DataClasificationOpenAccount_Cta_LetSstart_Button
              .accessibilityLabel
          }
        />
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({});

export default DataClasificationOpenAccount;
