<template>
  <div class="screens">
      <div class="mobile-login">
          <MobileLogin/>
      </div>
    <div class="login">
      <div class="entire">
        <div class="my-form">
          <div class="brand">BIFA ELECTIONS</div>
          <div class="title">LOGIN TO VOTE</div>
          <div class="subtitle">Use your credentials from the main app to login</div>

          <div class="form">
            <div class="input">
              <div class="label">Email</div>
              <input type="text" placeholder="someone@gmail.com" class="form-input" />

              <div class="label">Password</div>
              <input type="password" placeholder="password@123" class="form-input" />

              <!-- <div class="feedback">Incorrect password</div> -->

              <button class="login-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileLogin from "../components/mobile/MobileLogin";

export default {
  name: "Login",
  components: {
    MobileLogin,
  },
};
</script>

<style lang="sass" scoped>
    @import '../styles/login.scss';
</style>