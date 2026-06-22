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

import { space, text } from '@/assets';

import { ASListView } from '@/components';

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

const AMP: React.FC<ScreenProps> = ({ route }) => {
  const navigation = useNavigation();

  const onPressContinueampCtaContinueButton = async () => {
    navigation.navigate(Route.HOME_LITE_PROCESSING, {});
  };

  useClearHeaderActions(navigation);

  const renderItem_Amp_List = ({ item }) => (
    <AppColumn
      widgetId={'Amp_Container_Card_Column'}
      spacing={8}
      style={styles.ampContainerCardColumnStyle}
    >
      <AppRow
        widgetId={'Amp_Container_RowWrapper_Row'}
        spacing={space['2']}
        style={sharedStyles.ampContainerRowWrapperRow}
      >
        <AppImage
          widgetId={'star'}
          source={item['star']}
          style={sharedStyles.dataClasificationOpenAccountImageAtmCardsImage}
        />
        <AppText
          widgetId={'text3'}
          numberOfLines={0}
          style={[
            text.label.medium,
            sharedStyles.eligibilityRequirementLabelNotAcitizenResidentAndOrText,
          ]}
          accessibilityLabel={STRINGS.AMP.text3.accessibilityLabel}
        >
          {String(item['text3'] ?? STRINGS.AMP.text3.accessibilityLabel)}
        </AppText>
      </AppRow>
    </AppColumn>
  );

  return (
    <AppContainer
      widgetId={'ASContainer-926008'}
      testID={'74a8ae30-c899-48e1-84ce-4a415f4e8998'}
      style={sharedStyles.container}
    >
      <AppAppBar
        widgetId={'Amp_AppBar_AppBarAsappHeader_AppBar'}
        leadingIcon={
          'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/80eb2319-4a47-4969-8a1d-43d3c309514b-i3739_1096_917_858.png'
        }
        style={sharedStyles.ampAppBarAppBarAsappHeaderAppBar}
      />
      <AppColumn
        widgetId={'Amp_Container_Column'}
        spacing={20}
        style={sharedStyles.ampContainerColumn}
      >
        <AppColumn
          widgetId={'Amp_Container_Content_Column'}
          spacing={20}
          style={sharedStyles.ampContainerContentColumn}
        >
          <AppColumn
            widgetId={'Amp_Container_Title_Column'}
            spacing={4}
            style={sharedStyles.ampContainerTitleColumn}
          >
            <AppText
              widgetId={'Amp_Label_WelcomeToDigiBank_Text'}
              numberOfLines={1}
              style={[
                text.label.medium,
                sharedStyles.ampLabelWelcomeToDigiBankText,
              ]}
              accessibilityLabel={
                STRINGS.AMP.Amp_Label_WelcomeToDigiBank_Text.accessibilityLabel
              }
            >
              {STRINGS.AMP.Amp_Label_WelcomeToDigiBank_Text.label}
            </AppText>
            <AppText
              widgetId={'Amp_Label_WelcomeToDigiBankExperienc_Text'}
              numberOfLines={2}
              style={[
                text.label.medium,
                sharedStyles.ampLabelWelcomeToDigiBankExperiencText,
              ]}
              accessibilityLabel={
                STRINGS.AMP.Amp_Label_WelcomeToDigiBankExperienc_Text
                  .accessibilityLabel
              }
            >
              {STRINGS.AMP.Amp_Label_WelcomeToDigiBankExperienc_Text.label}
            </AppText>
          </AppColumn>
          <ASListView
            itemSpacing={8}
            orientation={'vertical'}
            showsHorizontalScrollIndicator={false}
            name={'Amp_List'}
            style={sharedStyles.ampList}
            renderItem={renderItem_Amp_List}
            data={[
              {
                star: 'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/a87c66a9-4edc-403a-92bc-fdae55e4fd39-3088_2331.svg',
                text3: 'Accumulate points as you shop',
              },
              {
                star: 'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/1a8f55d3-f5a1-447d-a4d6-b93768b7519b-3088_2334.png',
                text3: 'Redeem points anywhere anytime ',
              },
              {
                star: 'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/d27f37a4-09f1-4166-8c58-001ca51eeaa1-3088_2337.png',
                text3: 'Enjoy rewards and cashback',
              },
              {
                star: 'https://content.oneapi.world/apps/0e7f0082-37f8-4638-ba43-d00c4116a618/_app/6c688994-1dad-4d80-9cc1-3a35b957b260-3088_2340.png',
                text3: 'Convert points to cash ',
              },
            ]}
            testId={'Amp_List'}
          />
        </AppColumn>
        <AppButton
          widgetId={'Amp_Cta_Continue_Button'}
          onPress={() => {
            onPressContinueampCtaContinueButton({});
          }}
          style={sharedStyles.ampCtaContinueButton}
          accessibilityLabel={
            STRINGS.AMP.Amp_Cta_Continue_Button.accessibilityLabel
          }
          label={STRINGS.AMP.Amp_Cta_Continue_Button.label}
        />
      </AppColumn>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  ampContainerCardColumnStyle: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#faf9f5',
    alignSelf: 'stretch',
    padding: 16,
    borderRadius: 4,
    flexShrink: 1,
    justifyContent: 'flex-start',
  },
});

export default AMP;
