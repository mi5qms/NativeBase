import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './config.json';
const iconSet = createIconSetFromFontello(fontelloConfig);
export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;
