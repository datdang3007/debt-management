import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ColorPallette } from '../../../constants'

export const CustomBottomNavBar = ({children}) => {
  return (
    <View style={styles.TouchAble}>
      <View style={styles.TouchAble.Icon}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  TouchAble: {
    Icon: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      color: ColorPallette.White,
      backgroundColor: ColorPallette.Primary,
      transition: '0.3s',
      '&:active': {
        backgroundColor: ColorPallette.White,
      }
    },
    alignItems: 'center',
    justifyContent: 'center',
    top: -15
  },
});