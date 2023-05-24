import USERS from '../data/Users.json';
import { useTheme } from '@/hooks';
import React, { FC, memo } from 'react';
import { Image, Pressable, ScrollView, View, StyleSheet } from 'react-native';
import { AppIcon } from './Common';
import { ICONS } from '@/utils';
import styles from './Common/Form/partials/AppInput/style';

type Props = {
  loading?: boolean;
  preloader?: boolean;
};

const Stories: FC<Props | any> = ({ children, ...props }) => {
  const { styles } = useTheme(props);
  return (
    <View style={[styles, props.style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles2.story}>
          <View style={styles2.addStory}>
            <AppIcon name={ICONS.add} size={25} color={"#00C0E6"}></AppIcon>
          </View>
        </View>
        {USERS.results.map((story, index) => (
          <Image source={{ uri: story.picture.medium }}
            style={styles2.story}
          />))}

      </ScrollView>
    </View>
  )
};

const styles2 = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  addStory: {
    marginLeft:50,
    marginTop:40,
    borderRadius: 50,
    backgroundColor:"white"
  }
})

export default memo(Stories);
