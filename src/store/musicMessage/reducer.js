import * as type from './type'
const default_music = {
  "m4a": "http://ws.stream.qqmusic.qq.com/105392885.m4a?fromtag=46",
  "media_mid": "000CUTL63LNV46",
  "songid": 105392885,
  "singerid": 1010189,
  "albumname": "谢春花作品选集（2015）",
  "downUrl": "http://dl.stream.qqmusic.qq.com/105392885.m4a?vkey=F971BC4BB1A5E11EA02564E381F1CB8D7D2883013C9C78987B14DEA8023CF3D245A4F215E12C7592170C7E2A04B8791AB984C0AEE22C38CA&guid=2718671044",
  "singername": "谢春花",
  "songname": "一棵会开花的树",
  "strMediaMid": "000CUTL63LNV46",
  "albummid": "001Qp10A3tDOIX",
  "songmid": "000CUTL63LNV46",
  "albumpic_big": "http://i.gtimg.cn/music/photo/mid_album_300/I/X/001Qp10A3tDOIX.jpg",
  "albumpic_small": "http://i.gtimg.cn/music/photo/mid_album_90/I/X/001Qp10A3tDOIX.jpg",
  "albumid": 1258462
}

function currentMusic(state = [default_music], action) {
  switch (action.type) {
    case type.CHANGE_CURRENT_PLAY:
      return [
        state.pop(),
        action.text
      ]
    case type.PLAY_PRE:
      return [
        default_music,
        state.shift()
      ]
    default:
      return state
  }
}

export default currentMusic