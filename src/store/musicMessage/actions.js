import * as type from './type'

export const changeListData = (text) => {
  return {
    type: type.CHANGE_LIST_DATA,
    text
  }
}