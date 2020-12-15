<template>
  <div class="contacts-page">
    <div class="title">
      <img src="../static/images/login/title.png" alt="" />
    </div>
    <div class="contacts-title">
      <img src="../static/images/login/contacts-s.png" alt="" />
    </div>

    <div class="contacts-list-container">
      <div class="contacts-list-search">
        <van-search v-model="value" placeholder="Search" input-align="center" />
      </div>
      <div class="contacts-list">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item
            v-for="(item, index) in 4"
            :key="index"
            :name="index"
          >
            <template #title>
              <div class="title-menu">
                <div class="i-menu">
                  <img src="../static/images/login/mune.jpg" alt="" />
                </div>
                Department {{ index + 1 }}
              </div>
            </template>

            <div class="panel-item"  v-for="(item, index) in 14" :key="index"
            :name="index">
              <div class="avar">
                <img src="../static/images/login/useravar.png" alt="" />
              </div>
              <div class="uesr-info">
                <div class="user-name">Keith</div>
                <div class="user-tel">1068886</div>
              </div>
              <div class="count-bar">
                <div class="count-reduce" @click="handleCount('reduce')">
                  <span v-show="pointsNum != 0">
                    <van-icon class="count-i" name="minus"
                  /></span>
                </div>
                <div class="count-num">
                  <input type="number" :value="pointsNum" />
                </div>
                <div class="count-plus" @click="handleCount('plus')">
                  <van-icon class="count-i" name="plus" />
                </div>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      adminContacts: "adminContacts",
      activeName: "0",
      value: "",
      pointsNum: 0,
    });
    const handleCount = (type) => {
      // state.pointsNum
      switch (type) {
        case "reduce":
          if (state.pointsNum == 0) return;
          state.pointsNum = state.pointsNum - 1;

          break;
        case "plus":
          state.pointsNum = state.pointsNum + 1;
          break;

        default:
          break;
      }
    };
    return {
      ...toRefs(state),
      handleCount,
    };
  },
};
</script>

<style scoped >
img {
  width: 100%;
  vertical-align: top;
}
.contacts-page {
  width: 100%;
  height: 100%;
  padding-top: 0.8rem;
  /* 端屏 .5rem */
}
.title {
  width: 3.17rem;
  height: 0.4rem;
  margin: 0 auto 0.8rem;
}
.contacts-title {
  width: 2.34rem;
  height: 0.58rem;
  margin: 0 auto 0.2rem;
}
.contacts-list-container {
  border-radius: 0.2rem;
  width: 7.1rem;
  margin: 0 auto;
  background-color: #382623;
}
.user-name{
  font-size: .28rem;
  color: #fff;
  font-weight: bold;
}
.user-tel{
  font-size: .26rem;
  color: #c2bbab;
  font-weight: bold;
}
.contacts-list-container /deep/ .van-hairline--top-bottom {
  /* opacity: 0; */
  border: none !important;
}
.contacts-list-container /deep/.van-search {
  background-color: transparent !important;
}
.contacts-list-container /deep/.van-search__content {
  width: 6.8rem;
  height: 1rem;
  border-radius: 0.2rem;
  background-color: #c2bbab;
  font-size: 0.48rem;
  font-weight: bold;
}
.contacts-list-container /deep/.van-search__content .van-field__body {
  height: 100%;
}
.contacts-list-container /deep/.van-search__content .van-field__body input {
  font-size: 0.48rem;
}
.contacts-list-container /deep/.van-field__left-icon {
  display: flex;
  align-items: center;
}
.contacts-list-container /deep/.van-badge__wrapper.van-icon.van-icon-search {
  width: 0.6rem;
  height: 0.5rem;
  background-size: 100%;
  background-image: url(../static/images/login/search-i.jpg);
}
.contacts-list-container /deep/.van-badge__wrapper.van-icon.van-icon-search::before{
  display: none;
}
.contacts-list-container
  /deep/.van-search__content
  .van-field__body
  input::-webkit-input-placeholder {
  color: #999999;
}
.contacts-list /deep/.van-cell {
  color: #fff;
  background-color: #4a322d !important;
}
.contacts-list /deep/.van-collapse-item--border::after,
.contacts-list /deep/.van-cell::after {
  border: none;
}
.contacts-list /deep/.van-collapse-item__content {
  padding:0 ;
  background-color: transparent !important;
}
.panel-item {
  display: flex;
  align-items: center;
  padding: .15rem .2rem;
  background-color: #3c2a26;
  border-bottom: 1px solid #382623;
}
.avar {
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.3rem;
  border-radius: 50%;
}
.uesr-info {
  /* width: 50%; */
  flex: 1;
}

.count-bar {
  display: flex;
}
.count-num {
  width: 1.4rem;
  height: 0.7rem;
  border-radius: 0.14rem;
  margin: 0 0.2rem;
  overflow: hidden;
  background-color: #ccc;
}
.count-num input {
  font-size: 0.26rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #754739;
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  background-color: transparent;
}
.count-plus,
.count-reduce {
  display: flex;
  justify-content: center;
  align-items: center;
}
.count-i {
  color: #fff;
  font-size: 0.32rem;
}
.title-menu {
  display: flex;
  font-size: 0.28rem;
  font-weight: 600;
}
.i-menu {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.4rem 0 0.1rem;
}
</style>