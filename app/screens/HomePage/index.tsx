import { Images } from '@/assets';
import { AppBottomSheet, AppButton, AppIcon, AppImage, AppScreen, AppSwitch, Block, Col, DateTimePicker, FloatingButton, Row, SegmentedControl, Text } from '@/components';
import { useAppDispatch, useAppSelector, useDialog, useStyledTag, useTag } from '@/hooks';
import Routes from '@/navigation/Routes';
import { settingsRedux } from '@/store';
import { COLORS } from '@/theme';
import { ICONS, PERMISSION_TYPE, Permission, createLocalNotification } from '@/utils';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { padding } from '../../theme/Config';

const HomePage = ({ navigation }: any) => {
    const dispatch = useAppDispatch();
    const dialog = useDialog();



    const theme = useAppSelector(state => state.settings.theme);

    const [isPermission, setIsPermission] = useState(false);

    const [bottomSheetVisibility, setBottomSheetVisibility] = useState(false);


    const [floatMenu, setFloatMenu] = useState<boolean>(false);
    const language = useAppSelector(state => state.settings.language);

    const onChangeLang = (_language: string) => {
        dispatch(settingsRedux.changeLanguage(_language));
    };

    const cameraPermissions = async () => {
        const cameraPermissionsStatus: any = await Permission.checkPermission(PERMISSION_TYPE.camera);
        setIsPermission(cameraPermissionsStatus);
    };

    const isSCameraPermissionsCheck = async () => {
        const isCheckPermission: any = await Permission.checkPermission(PERMISSION_TYPE.camera);
        setIsPermission(isCheckPermission);
    };

    useFocusEffect(
        useCallback(() => {
            isSCameraPermissionsCheck();
        }, []),
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
                <Block row s="pl-10">
                    <AppImage resizeMode="cover" url={Images.InstLogo.light} width={100} height={50} />
                </Block>,
            headerRight: () => (
                <Block row flex center pr-10 >
                    <Block s="pr-10">
                    <AppIcon name={ICONS.likeHeart} size={35} color={"black"} />
                    </Block>
                    <Block>
                        <AppImage resizeMode="contain" url={Images.MessageLogo.light} width={30} height={30} />
                    </Block>
                </Block>
            ),
        });
    }, [navigation, language]);

    return (
        <React.Fragment>
            <AppScreen scroll>
                <Block bg-primary>
                    <Text>asdasd</Text>
                </Block>
            </AppScreen>
        </React.Fragment>
    );
};

export default HomePage;
