<template>
    <div>
    <div v-for="(comment, i) in comments" :key="i" class="message">
            <div class="content">
              <div class="message-title">
                <img class="message-pic" src="https://randomuser.me/api/portraits/med/women/31.jpg" alt="M">
                <div class="name">{{ comment.name }}</div>
              </div>
              <div class="message-info">
                {{ comment.comment }}
              </div>
              <div class="message-footer">
                <hr class="line">
                <div class="message-time">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9h2v2H9V7h2v2zm-5.82 6.08a6.98 6.98 0 010-10.16L6 0h8l.82 4.92a6.98 6.98 0 010 10.16L14 20H6l-.82-4.92zM10 15a5 5 0 100-10 5 5 0 000 10z"/></svg>
                  <div class="time">
                    {{ comment.time }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
</template>

<script>
export default {
    name: 'Comments',
    data(){
        return{
            comments: [
                {
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                    name: 'Dude',
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic natus voluptate est',
                    time: '30 minutes ago'
                },
                {
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                    name: 'Dude',
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic natus voluptate est',
                    time: '30 minutes ago'
                },
                {
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                    name: 'Dude',
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic natus voluptate est',
                    time: '30 minutes ago'
                },
                {
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                    name: 'Dude',
                    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic natus voluptate est',
                    time: '30 minutes ago'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/comments.scss';
    @import '../styles/common.scss';
</style>