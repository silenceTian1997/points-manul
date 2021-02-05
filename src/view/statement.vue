<template>
  <div class="load-page">
    <div class="cont-view">
      <div class="th">用户须知</div>
      <div class="text">
      使用本积分商城前，请仔细阅读下述条款；如您对条款内容存在任何疑义，欢迎您垂询人力资源部；您一旦开始使用积分商城，既视为您已完全了解并同意遵守全部下述条款，包括对下述条款所做的任何修改。
      </div>
      <div class="th">内部文件</div>

      <div class="text">
本积分商城中所载述的商标、文字、视像及声音内容、图形及图像均为费列罗食品（杭州）有限公司（“费列罗”）内部文件；未经费列罗书面明确允许，任何企业或个人不得以任何形式复制或传播
      </div>
      <div class="th">版权归属</div>

      <div class="text">
        费列罗独立拥有本积分商城所载述的商标、文字、视像及声音内容、图形及图像等所有资料的版权，或与积分商城资料提供者共同拥有。未经费列罗书面明确允许，任何企业或个人不得以任何形式复制或传播。
      </div>
      <div class="th">免责声明</div>
      <div class="text">
        1）对于本积分商城所发布的信息，费列罗并不声明或保证其正确性或完整性；对于员工通过本积分商城取得之任何产品、信息或服务，由产品、信息或服务的供应商承担质量保证责任，费列罗不承担质量保证责任。
      </div>
      <div class="text">
        2）费列罗对本积分商城提供的产品或服务不提供任何明示或默示的担保或保证，包含但不限于商业适售性、特定目的之适用性及未侵害他人权利等担保或保证。
      </div>
      <div class="text">
        3）员工明确了解并同意，本网站关于商品兑换、配送、退换等相关规定。
      </div>
      <div class="text">
       4）员工明确了解并同意，基于以下原因而造成的，包括但不限于利润、信誉、应用、数据损失或其他无形损失，费列罗不承担任何直接、间接、附带、特别、衍生性或惩罚性赔偿责任（即使费列罗事先已被告知发生此种赔偿之可能性亦然）
        I）本积分商城提供服务之使用或无法使用；
        II）您在不了解商品介绍、商品用途情况下，进行的商品兑换；
        III）您的传输或数据遭到未获授权的存取或篡改；
        IV）任何第三方在本积分商城中之所作声明或行为；
        V）与本积分商城相关的其他事宜，但本服务条款有明确规定的除外。
      </div>
      <div class="th">隐私权保护</div>
      <div class="text">
        1）本积分商城需要员工注册后才能够使用，这样做是为了向员工提供更为有效的管理和服务。本积分商城收集的个人信息包括员工工号、姓名、部门和移动电话号码等。
      </div>
      <div class="text">
        2）员工注册义务。如员工希望使用本积分商城需注册后才能使用，员工进行注册即视为同意以下事项：依本积分商城注册表之提示提供您本人真实、正确、最新及完整的资料，并随时更新登记资料，确保其真实、正确、最新及完整的资料。若您提供任何错误、不实、过时或不完整或具误导性的资料，或者本积分商城怀疑前述资料为错误、不实、过时或不完整或具误导性的，本积分商城有权暂停您的账号。您离职后，本积分商城自离职之日起终止您的账号，并不再提供任何服务，未使用的积分一律作废。
      </div>
      <div class="text">
        3）本积分商城将采取合理的安全手段保护员工提供的个人信息。
      </div>
      <div class="text">
        4）员工应了解：本积分商城可能会根据费列罗的政策及项目需求公开员工积分信息，或者因善意确信这样的作法对于下列事项有其必要性：
        I）符合法律公告或遵守适用于公司规章制度的程序；
        II）保护员工的权力或积分；
        III）在紧急的情况下，为了保护本积分商城及员工个人或公众安全。
      </div>
      <div class="text">
        5）员工可以垂询人力资源部进行员工个人账户信息的变更或注销。
      </div>
      <div class="th">积分对象</div>
      <div class="text">
        积分对象为所有费列罗食品（杭州）有限公司的在职员工。
      </div>
      <div class="th">积分构成</div>
      <div class="text">
        员工积分由个人贡献积分与奖励积分两部分构成。个人贡献积分是员工在日程工作中，对流程发现提交MiCo系统或ICE系统或提交质量/环境发现经审批流程获得，根据审批结果获得相应的1分，3分或5分；奖励积分是根据员工的行为经审批获得，如志愿活动，好人好事，总经理特别奖等而进行相应积分奖励。
      </div>
      <div class="th">积分清零规则</div>
      <div class="text">
        员工的积分按公司规定积分周期以自然年度为单位，每两年清零一次。另，员工离职时，所有未使用积分将于离职日清零。
      </div>

    </div>
    <div class="agree-bar">
      <div class="dot" @click="checkAgree"> <div class="dot-active" v-if="agree"></div></div>
      <div class="agree-text">已阅读完毕且同意此声明</div>
    </div>
    <div class="go" @click="handleToHome()"></div>
  </div>
</template>


<script>
import { toRefs, reactive, onMounted } from "vue";
import { setLocal, getLocal, getInstance } from "../utils/utils";
export default {
  setup() {
    const instance = getInstance();
    const state = reactive({
      agree:false
    });

    onMounted(() => {});

    const handleToHome = () => {
      if (state.agree) {
        instance.$router.push("home");
      }else{
        instance.$toast('请勾选同意')
      }
    };
    const checkAgree = ()=>{
        state.agree = !state.agree
    }
    return {
      ...toRefs(state),
      handleToHome,
      checkAgree
    };
  },
};
</script>

<style  scoped>
.login-page {
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  /* 端屏 .5rem */
}

.cont-view{
  width: 7rem;
  padding: .8rem .4rem;
  margin: 8vh auto 1vh;
  border-radius: .2rem;
  background-color: #3c2a26;
  border: 2px solid #592e23;
}
.th{
  font-size: .4rem;
  color: #e27c2a;
  text-align: center;
}
.text{
  font-size: .24rem;
  color: #bbb6b5;
}
.agree-bar{
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot{
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
  background-color: #632d23;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: .2rem;
}
.dot-active{
  width: .2rem;
  height: .2rem;
  border-radius: 50%;
  background-color: #d19e3e;
}
.agree-text{
  font-size: .24rem;
  color: #eee;
  text-decoration: underline #ccc;
}
.go {
  display: block;
  width: 1.1rem;
  height: 1.1rem;
  border: none !important;
  background-color: transparent !important;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(../static/images/user/go.png);
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 1.2rem auto;
  /* trans; */
  transform: rotate(90deg);
}

</style>
