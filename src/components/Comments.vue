<template>
    <div class="comments">
        <div class="content">
            <div class="title4">Comments</div>
            <div v-for="(comment, i) in comments" :key="i" class="voter">
                <div class="details">
                    <img class="avatar" :src="comment.url" :alt="comment.url">
                    <p class="name">{{comment.name}}</p>
                </div>
                <div class="comment">{{comment.comment}}</div>
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
                    comment: 'This is a test comment'
                },
                {
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                    name: 'Dude',
                    comment: 'This is a test comment'
                },
                {
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                    name: 'Dude',
                    comment: 'This is a test comment'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/comments.scss';
    @import '../styles/common.scss';
</style>