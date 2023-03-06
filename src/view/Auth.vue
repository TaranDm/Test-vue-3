<template>
  <div class="form-auth">
    <h1 class="title">Enter login and password</h1>
    <a-form
      :model="userForm"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="userForm.username" />
      </a-form-item>
      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="userForm.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
    <span class="time">{{ timeNow }}</span>
  </div>
</template>
<script setup>
import { useAuth } from "@/stores/Auth.js";
import moment from "moment";

import { openNotification } from "@/plugins/halpers.js";
import { ref, onMounted } from "vue";
const store = useAuth();
const { userForm, remember } = store;
const timeNow = ref(null);
const onFinish = () => {
  openNotification("success", "Success");
  console.log("userForm", userForm);
};
const getTime = () => {
  setInterval(() => {
    timeNow.value = moment().format("YYYY-MM-DD HH:mm:ss");
  }, 1000);
};
onMounted(() => {
  getTime();
});
const onFinishFailed = (values) => {
  openNotification("warning", "Please, fill in the fields correctly");
  console.log("values", values);
};
</script>
<style scoped lang="scss">
.form-auth {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.time {
  position: absolute;
  bottom: 100px;
  font-size: 24px;
  font-weight: 600;
  color: #0d3599;
}
</style>
