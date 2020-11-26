<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
html {
    margin: auto;
    max-width: $maxWidth;
    height: 100%;
    font-size: 10vw;
    background: #ccc;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue,
        PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    @include MaxWidth() {
        font-size: calc((#{$maxWidth} - 17px) / 10);
    }
}
body {
    margin: auto;
    max-width: $maxWidth;
    height: 100%;
    font-size: 16px;
    -webkit-text-size-adjust: none !important;
    /deep/ .van-toast__text {
        font-size: 28px;
    }
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    // // /* 可以通过增加padding-bottom来适配 */
    // padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
    // padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
}
</style>
