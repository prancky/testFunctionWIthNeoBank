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

const EligibilityRequirement: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressContinueeligibilityRequirementCtaContinueButton = async () => {
    navigation.navigate(Route.DATA_CLASIFICATION_OPEN_ACCOUNT, {});
  };

  useClearHeaderActions(navigation);

  return (
    <AppContainer
      widgetId={'ASContainer-389163'}
      testID={'a2d65a31-9542-4b7e-9228-c730e6669899'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'EligibilityRequirement_AppBar_AppBarAsappHeader_AppBar'}
        leadingIcon={
          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/f4cc9637-98de-49c3-89af-ed975ebf20fa-i3734_1410_917_858.png'
        }
        style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
      />
      <AppColumn
        widgetId={'EligibilityRequirement_Container_Column'}
        spacing={20}
        style={sharedStyles.ampContainerColumn}
      >
        <AppColumn
          widgetId={'EligibilityRequirement_Container_Content_Column'}
          spacing={20}
          style={sharedStyles.ampContainerContentColumn}
        >
          <AppText
            widgetId={
              'EligibilityRequirement_Label_IconfirmThatImeetTheFoll_Text'
            }
            numberOfLines={3}
            style={[
              text.label.medium,
              sharedStyles.ampLabelWelcomeToDigiBankText,
            ]}
            accessibilityLabel={
              STRINGS.EligibilityRequirement
                .EligibilityRequirement_Label_IconfirmThatImeetTheFoll_Text
                .accessibilityLabel
            }
          >
            {
              STRINGS.EligibilityRequirement
                .EligibilityRequirement_Label_IconfirmThatImeetTheFoll_Text
                .label
            }
          </AppText>
          <AppColumn
            widgetId={'EligibilityRequirement_Container_List_Column'}
            spacing={8}
            style={sharedStyles.ampContainerContentColumn}
          >
            <AppRow
              widgetId={'EligibilityRequirement_Container_Card_Row'}
              spacing={8}
              style={styles.eligibilityRequirementContainerCardRowStyle}
            >
              <AppImage
                widgetId={'EligibilityRequirement_Image_Location_Image'}
                source={imageSources.image__41kn}
                style={
                  sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
                }
              />
              <AppText
                widgetId={
                  'EligibilityRequirement_Label_ResidingInSingapore_Text'
                }
                numberOfLines={1}
                style={[
                  text.label.medium,
                  sharedStyles.eligibilityRequirementLabelNotAcitizenResidentAndOrText,
                ]}
                accessibilityLabel={
                  STRINGS.EligibilityRequirement
                    .EligibilityRequirement_Label_ResidingInSingapore_Text
                    .accessibilityLabel
                }
              >
                {
                  STRINGS.EligibilityRequirement
                    .EligibilityRequirement_Label_ResidingInSingapore_Text.label
                }
              </AppText>
            </AppRow>
            <AppRow
              widgetId={'EligibilityRequirement_Container_Card_Row_2'}
              spacing={8}
              style={styles.eligibilityRequirementContainerCardRow2Style}
            >
              <AppImage
                widgetId={'EligibilityRequirement_Image_Person_Image'}
                source={imageSources.image__6k9f1}
                style={
                  sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
                }
              />
              <AppText
                widgetId={'EligibilityRequirement_Label_YearsOldOrAbove_Text'}
                numberOfLines={1}
                style={[
                  text.label.medium,
                  sharedStyles.eligibilityRequirementLabelNotAcitizenResidentAndOrText,
                ]}
                accessibilityLabel={
                  STRINGS.EligibilityRequirement
                    .EligibilityRequirement_Label_YearsOldOrAbove_Text
                    .accessibilityLabel
                }
              >
                {
                  STRINGS.EligibilityRequirement
                    .EligibilityRequirement_Label_YearsOldOrAbove_Text.label
                }
              </AppText>
            </AppRow>
            <AppRow
              widgetId={'EligibilityRequirement_Container_Card_Row_3'}
              spacing={8}
              style={sharedStyles.dataClasificationOpenAccountContainerCardRow}
            >
              <AppImage
                widgetId={'EligibilityRequirement_Image_Home_Image'}
                source={imageSources.image__2gm6}
                style={
                  sharedStyles.dataClasificationOpenAccountImageAtmCardsImage
                }
              />
              <AppText
                widgetId={
                  'EligibilityRequirement_Label_NotAcitizenResidentAndOr_Text'
                }
                numberOfLines={2}
                style={[
                  text.label.medium,
                  sharedStyles.eligibilityRequirementLabelNotAcitizenResidentAndOrText,
                ]}
                accessibilityLabel={
                  STRINGS.EligibilityRequirement
                    .EligibilityRequirement_Label_NotAcitizenResidentAndOr_Text
                    .accessibilityLabel
                }
              >
                {
                  STRINGS.EligibilityRequirement
                    .EligibilityRequirement_Label_NotAcitizenResidentAndOr_Text
                    .label
                }
              </AppText>
            </AppRow>
          </AppColumn>
        </AppColumn>
        <AppColumn
          widgetId={'EligibilityRequirement_Container_Action_Column'}
          spacing={8}
          style={sharedStyles.ampContainerTitleColumn}
        >
          <AppText
            widgetId={'EligibilityRequirement_Body_Text'}
            numberOfLines={5}
            style={[text.label.medium, sharedStyles.description]}
            accessibilityLabel={
              STRINGS.EligibilityRequirement.EligibilityRequirement_Body_Text
                .accessibilityLabel
            }
          >
            {
              STRINGS.EligibilityRequirement.EligibilityRequirement_Body_Text
                .label
            }
          </AppText>
          <AppButton
            widgetId={'EligibilityRequirement_Cta_Continue_Button'}
            onPress={() => {
              onPressContinueeligibilityRequirementCtaContinueButton({});
            }}
            style={sharedStyles.ampCtaContinueButton}
            accessibilityLabel={
              STRINGS.EligibilityRequirement
                .EligibilityRequirement_Cta_Continue_Button.accessibilityLabel
            }
            label={
              STRINGS.EligibilityRequirement
                .EligibilityRequirement_Cta_Continue_Button.label
            }
          />
        </AppColumn>
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  eligibilityRequirementContainerCardRowStyle: {
    alignItems: 'center',
    borderRadius: 4,
    alignSelf: 'stretch',
    aspectRatio: 5.839285714285714,
    backgroundColor: '#faf9f5',
    padding: 16,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  eligibilityRequirementContainerCardRow2Style: {
    alignSelf: 'stretch',
    padding: 16,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#faf9f5',
    aspectRatio: 5.839285714285714,
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
});

export default EligibilityRequirement;
