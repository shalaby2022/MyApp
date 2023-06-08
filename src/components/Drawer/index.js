import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
import {IMAGES} from '../../constants/Images';
import {DrawerBtns} from './DrawerBtns';
import styles from './styles';

const CustomDrawer = props => {
  const {navigation} = props;
  const whatsappMsg = 'Hello Can I need help!';
  const whatsappNo = '+2001289903629';
  const phoneNumber = '+2001289903629';

  const renderItem = ({item}) => {
    const {title, icon} = item;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(title)}
        style={styles().iconWrapper}>
        <Image source={icon} style={styles().icon} />
        <Text style={styles().btnName}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles().container}>
      <View style={styles().headerWrapper}>
        <View style={styles().imgWrapper}>
          <Image source={IMAGES.user} style={styles().img} />
        </View>
        <View style={styles().infoWrapper}>
          <Text style={styles().name}>Ahmed Shalaby</Text>
          <Text style={styles().role}>React-Native Developer</Text>
        </View>
      </View>
      <View style={styles().ruler}></View>
      <FlatList
        data={DrawerBtns}
        keyExtractor={(item, ind) => ind.toString()}
        renderItem={renderItem}
      />
      <View style={styles().contactUsWrapper}>
        <View>
          <Text style={styles().contactText}>Contact Us</Text>
        </View>
        <View style={styles().contactIconsWrapper}>
          <TouchableOpacity
            style={styles().contactIconWrapper}
            onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
            <Image style={styles().contactIcons(true)} source={IMAGES.call} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles().contactIconWrapper}
            onPress={() =>
              Linking.openURL(
                `whatsapp://send?text=${whatsappMsg}&phone=${whatsappNo}`,
              )
            }>
            <Image style={styles().contactIcons(false)} source={IMAGES.whats} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
