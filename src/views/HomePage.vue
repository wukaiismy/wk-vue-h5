<template>
    <div>
        <div>dssd</div>
        <van-button class="btn" type="primary">主要按钮</van-button>
        <van-button type="success">成功按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <div class="ss">gggg</div>
        <div class="ssss">asAV撒大声地</div>
        <van-cell-group>
            <van-field
                v-model="value"
                label="文本"
                placeholder="请输入用户名"
            />
        </van-cell-group>
        <div class="maxBox">我是满宽部分</div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    components: {},
    data() {
        return {};
    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.ss {
    width: 100px;
    height: 100px;
    background: rebeccapurple;
    font-size: 26px;
}
.ssss {
    width: 648px;
    height: 62px;
    border: 2px solid #dddddd;
    border-radius: 10px;
    margin: 0 auto;

    font-size: 26px;
    font-family: FZLTXIHK_CDSB;
    font-weight: normal;
    color: #fffefe;
    background: rebeccapurple;
}
.btn {
    width: 300px;
    height: 60px;
    margin-left: 20px;
}
.maxBox {
    width: 100%;
    height: 400px;
    background: palegreen;
}
</style>
