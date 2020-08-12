<template>
    <div class="list">
        <div class="toggles">
            <p class="title">Candidates</p>
            <div class="more">More</div>
        </div>
        <div class="cardsRow">
            <div v-for="(candidate, i) in candidates" :key="i" class="candidate-card">
                <img class="candidate-profile" :src="candidate.url" :alt="candidate.name">
                <p class="title2">{{ candidate.name }} <br> <br> <span class="subtitle">{{ candidate.message }}</span></p>
                <button @click="show" class="candidate-btn">Manifesto</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CandidateList',
    data(){
        return{
            candidates: [
                {
                    name: 'Josanne',
                    message: 'I love leadership and what it entails...',
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg'
                },

                {
                    name: 'William',
                    message: 'I love leadership and what it entails...',
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg'
                },

                {
                    name: 'Jade',
                    message: 'I love leadership and what it entails...',
                    url: 'https://randomuser.me/api/portraits/med/women/31.jpg'
                }
            ]
        }
    },

    methods: {
        show(){
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/candidate-list';
@import '../styles/common';
</style>