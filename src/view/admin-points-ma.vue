<template>
  <div class="points-ma">
    <div class="title">
        <img src="../static/images/login/title.png" alt="">
    </div>
    <div class="management-title">
        <img src="../static/images/login/points-title.png" alt="">
    </div>
    <div class="main">
            <div class="main-item" >
              <van-uploader :after-read="afterRead"  accept="files/*" :max-count="1" status>
                  <img style="width:2.54rem;" src="../static/images/login/import-i.png" alt="">
              </van-uploader>
            </div>
        <div class="main-item" @click="toContacts">
          <img style="width:1.41rem;" src="../static/images/login/contacts-i.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import { reactive , toRef, toRefs } from 'vue'
import { getInstance } from  "../utils/utils"
export default {
  setup(){
    const instance  = getInstance()
    const state = reactive({
          fileList: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败',
        },
      ],
    })
    const afterRead = (file) =>{
      // 此时可以自行将文件上传至服务器
      file.status = 'uploading';
      file.message = '上传中...';

      setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
      }, 1000);
      console.log(file)
    }
    const toContacts = () =>{
      instance.$router.push('adminContacts')
    }
    return {
      ...toRef(state),
      afterRead,
      toContacts
    }
  }
}
</script>

<style scoped>
.points-ma{
   width: 100%;
   height: 100%;
   padding-top: 1.4rem;
   /* 端屏 .5rem */
 }
 .title{
   width: 3.17rem;
   height: .4rem;
   margin: 0 auto .6rem;
   /* background-color: #fff; */
 }
 img{
  width: 100%;
  vertical-align: top;
}
 .management-title{
   width: 3.34rem;
   margin: 0 auto;
 }
  .main{
    width: 7.1rem;
    height: 8.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
  }
  .main-item{
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(236, 176, 6, 0.42);
  }
</style>