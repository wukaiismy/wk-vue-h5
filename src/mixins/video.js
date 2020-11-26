
const mixin = {
    data() {
        return {
            isPlayVideo: false,
            isVNum: 0,
        }
    },
    mounted() {
        document.body.scrollTop = 0;
    
        //监听视频是否可以播放
        this.$nextTick(() => {
          this.videoPregress();
        });
      
      },
    methods: {
        //初始化page项
    initPage() {
        var pages = {
          size: 20,
          page: 1,
          direction: 'desc',
          sortKey: 'threeYearChange',
          totall: 0,
        };
        this.pages = pages;
      },
        videoPregress() {
            this.isVNum = this.$refs.myVideo.readyState;
            console.log(this.$refs.myVideo.readyState);
            setTimeout(() => {
              if (this.isVNum < 4) {
                this.videoPregress();
              } else {
                this.isPlayVideo = true;
              }
            }, 500);
          },
          videoErrorCallback(e) {
            console.log('播放错误');
          },
          playVideo() {
            this.isPlayVideo = false;
            this.$refs.myVideo.play();
          },
    }
}

export default mixin
