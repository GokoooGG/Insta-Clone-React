/* eslint-disable react-native/no-inline-styles */

import Images from "@/assets/images";
import { AppImage } from "@/components";
import React from "react";
import styles from '../../components/Common/Form/partials/AppInput/style';
import { padding } from '../../theme/Config';


export const createNavigationOptions = (props: any) => {


  const { screen } = props;
  const options = {
    headerStyle: {backgroundColor:"white"},
    headerTitle:"",
    // headerBackTitleVisible: false,
    headerTruncatedBackTitle: '',
    headerBackImageStyle: {},
    headerBackTitleStyle: {
      fontSize: 15,
    },
    headerRightContainerStyle: {},
    headerLeftContainerStyle: {},
    headerTitleStyle: {
      fontSize: 15,
    },
  };

  return screen.headerShown ? options : { headerShown: false };
};
