## react music app.

接口必须参数


    showapi_sign: 8a31cc27032f4356bedc2d53950d43dd,
    showapi_appid: 34383

1. 已有接口1
> 根据关键字查询歌曲
```
  url: 'https://route.showapi.com/213-1'，
  query: {
    keyword: 'xxx',
    page: 1
  }
```

2. 已有接口2
> 根据musicid 获取歌词  lyric
```
  url: 'https://route.showapi.com/213-2',
  method: 'POST',
  query: {
    musicid: xxx
  }
```


3. 已有接口3
> 获取热门榜单

```
  url: 'https://route.showapi.com/213-4'
  query: {
    topid: 5
  }
```

榜行榜id
3=欧美
4=流行榜
5=内地
6=港台
16=韩国
17=日本
26=热歌
27=新歌
28=网络歌曲
32=音乐人
36=K歌金曲


- [x] request  使用 axios
- [ ] 首次进入，展示选择要展示在首页的推荐类
- [ ] 主页，展示热歌榜， top榜单
- [ ] 搜索页  搜索结果页
- [ ] 播放页   歌词展示页

##### 路由 

index   search    player

##### store


##### theme 

main #8bc34a

color #424242

color_light #757575   #bdbdbd

dot_color #9e9e9e

blue #7986cb