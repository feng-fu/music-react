import * as type from './type'

export const playOther = (text) => {
  return {
    type: type.CHANGE_CURRENT_PLAY,
    text
  }
}

export const playPre = () => {
  return {
    type: type.PLAY_PRE
  }
}