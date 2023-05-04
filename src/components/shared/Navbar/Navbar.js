import * as React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  Color,
  FontSize,
  Padding,
} from '../../../constants/GlobalStyles.js';

const Navbar = (props) => {
  const navigate = props.navigation.navigate;
  return (
    <View style={[styles.mobileNavbar, styles.btnsFlexBox]}>
      <View style={[styles.ellipseParent, styles.groupPosition]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require('../../../../assets/ellipse-38.png')}
        />
        <View style={[styles.groupItem, styles.groupPosition]} />
      </View>
      <View style={[styles.btns, styles.groupPosition]}>
        <TouchableOpacity
          onPress={() => navigate('Home')}
          style={[styles.homeLightParent, styles.lightParentSpaceBlock]}
        >
          <Image
            style={styles.homeLightIcon}
            resizeMode="cover"
            source={require('../../../../assets/home-light.png')}
          />
          <Text style={styles.home}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Switches')}
          style={styles.filterBigAltParent}
        >
          <Image
            style={styles.homeLightIcon}
            resizeMode="cover"
            source={require('../../../../assets/filter-big-alt.png')}
          />
          <Text style={styles.home}>Switches</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Settings')}
          style={[styles.settingLineLightParent, styles.lightParentSpaceBlock]}
        >
          <Image
            style={styles.homeLightIcon}
            resizeMode="cover"
            source={require('../../../../assets/setting-line-light.png')}
          />
          <Text style={styles.home}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnsFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 0,
  },
  groupPosition: {
    top: '50%',
    position: 'absolute',
  },
  lightParentSpaceBlock: {
    paddingVertical: 0,
    alignItems: 'center',
  },
  groupChild: {
    maxWidth: '100%',
    width: '100%',
    height: 48,
    marginTop: -42,
    top: '50%',
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  groupItem: {
    marginTop: -24,
    backgroundColor: Color.darkslategray,
    height: 66,
    left: 0,
    right: 0,
  },
  ellipseParent: {
    zIndex: 0,
    marginTop: -42,
    top: '50%',
    left: 0,
    right: 0,
    height: 84,
  },
  homeLightIcon: {
    width: 24,
    height: 24,
  },
  home: {
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: 'left',
    marginTop: 4,
  },
  homeLightParent: {
    paddingHorizontal: Padding.p_7xs,
    alignItems: 'center',
  },
  filterBigAltParent: {
    alignItems: 'center',
  },
  settingLineLightParent: {
    paddingHorizontal: Padding.p_12xs,
    alignItems: 'center',
  },
  btns: {
    marginTop: -15,
    right: 24,
    left: 25,
    paddingHorizontal: Padding.p_5xs,
    zIndex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 0,
  },
  mobileNavbar: {
    bottom: 0,
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    overflow: 'hidden',
    height: 84,
    left: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
  },
});

export default Navbar;
