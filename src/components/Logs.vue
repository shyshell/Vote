<template>
  <div class="logs">
    <div class="content">
      <div class="flex">Activity</div>
      <div class="flex">priority</div>
        <div class="flex">ip</div>
        <div class="flex">time</div>
    </div>
    <div v-for="(activity, i) in activities" :key="i" class="activity">
        <div class="action flex">{{activity.activity}}</div>
      <div :class="activity.priority">{{activity.priority}}</div>
        <div class="ip flex">{{activity.ip}}</div>
        <div class="time flex">{{activity.time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logs",
  data(){
      return {
          activities: [
              {
                  activity: 'New login',
                  priority: 'critical',
                  ip: '123.45.6.77',
                  time: '21 minutes ago'
              },
              {
                  activity: 'Completed voting',
                  priority: 'critical',
                  ip: '123.45.6.77',
                  time: '25 minutes ago'
              },
              {
                  activity: 'New comment',
                  priority: 'important',
                  ip: '123.45.6.77',
                  time: '40 minutes ago'
              },
              {
                  activity: 'Logout',
                  priority: 'important',
                  ip: '123.45.6.77',
                  time: '1 hour ago'
              },
              {
                  activity: 'New login',
                  priority: 'critical',
                  ip: '123.45.6.77',
                  time: '1 hour ago'
              }
          ]
      }
  }
};
</script>

<style lang="sass" scoped>
    @import '../styles/common.scss';
    @import '../styles/logs.scss';
</style>