import { AddPage, ProfilePage, ReelsPage, SearchPage } from '@/screens';
import { LoginPage } from '@/screens';
import HomeStack from '../stacks/HomeStack';
import { ICONS } from '../../utils/icon-enums';

export const BottomTabItemList = [
    {
        label: 'Home Page',
        icon: ICONS.homeInsta,
        name: 'HomeScreen',
        component: HomeStack,
        headerShown: false,
    },
    {
        label: 'Search Page',
        icon: ICONS.search,
        name: 'SearchPage',
        component: SearchPage,
        headerShown: true,
    },
    {
        label: 'Add Page',
        icon: ICONS.add,
        name: 'AddPage',
        component: AddPage,
        headerShown: false,
    },
    {
        label: 'Reels Page',
        icon: ICONS.reels,
        name: 'ReelsPage',
        component: ReelsPage,
        headerShown: true,
    },
    {
        label: 'Profile Page',
        icon: ICONS.info,
        name: 'ProfilePage',
        component: ProfilePage,
        headerShown: true,
    },
];
