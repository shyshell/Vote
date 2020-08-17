<template>
  <div class="mobile-login">
    <div class="profile">
      <div class="details">
        <div class="name">Login</div>
        <div class="info">elections end in 2 days</div>
      </div>
      <div class="dp">
          <div class="ballot">
              <svg class="ballot-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.399 2H1.6c-.332 0-.6.267-.6.6V5h18V2.6a.6.6 0 00-.601-.6zM2 16.6c0 .77.629 1.4 1.399 1.4h13.2c.77 0 1.4-.631 1.4-1.4V6H2v10.6zM7 8h6v2H7V8z"/></svg>
          </div>
      </div>
    </div>
    <form class="form" @submit.prevent>
        <div class="input">
            <div class="label">Email</div>
            <input type="text" class="form-input" placeholder="Your Email">
        </div>

        <div class="input">
            <div class="label">Password</div>
            <input type="password" class="form-input" placeholder="Password">
        </div>
        <div class="info">
            <div class="icon">
                <svg class="icon-tag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0010 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm-.001 17.2a7.6 7.6 0 110-15.2 7.6 7.6 0 110 15.2zM11 9.33V4H9v6.245l-3.546 2.048 1 1.732 4.115-2.377A.955.955 0 0011 10.9v-.168l4.24-4.166a6.584 6.584 0 00-.647-.766L11 9.33z"/></svg>
            </div>
            <div class="info-message">
                Use your credentials from the main app to login.
            </div>
        </div>
        <div class="submit">
            <button class="login-btn">Login</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MobileLogin",
};
</script>

<style lang="sass" scoped>
    @import '../../styles/mobile/mobile-login.scss';
</style>