import React, { useLayoutEffect } from 'react';
import { AppButton, AppIcon, AppImage, AppScreen, Block } from '@/components';
import { Images } from '@/assets';
import { ICONS } from '../../utils/icon-enums';
import { COLORS } from '@/theme';



const ReelsPage = ({ navigation }: any) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Reels',
      headerTitleAlign: "left",
      headerTransparent: true,
      headerTitleStyle: {
        fontWeight: '600',
      },
      headerRight: () => (
        <Block center middle pr-10>
          <AppIcon name={ICONS.camera} size={30} color={"black"} />
        </Block>
      ),
    });
  }, [navigation]);

  return (
    <AppScreen>
    </AppScreen>
  );
};

export default ReelsPage;
