<template>
    <div class="candidate-vote">
        <div class="profile">
            <div class="details">
                <div class="name">
                    <div>Chairperson</div>
                    <svg class="more-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"/></svg>
                </div>
                <div class="info">
                    <div class="dot"></div>
                    <div style="margin-left: 10px;">4 candidates</div>
                </div>
            </div>
            <div class="dp">
                <img
                @click="openMenu"
                class="profile-pic"
                src="https://randomuser.me/api/portraits/med/women/31.jpg"
                alt="pic"
                />
            </div>
        </div>
        <div v-for="(candidate, i) in candidates" :key="i" class="candidatevotecard">
            <div class="prof">
                <img
                class="pic"
                src="https://randomuser.me/api/portraits/med/women/31.jpg"
                alt="pic"
                />
                <div class="details">
                <div class="name">{{candidate.name}}</div>
                <div class="more">
                    <div class="my-bubble">
                        view manifesto
                    </div>
                    <div class="votesCount">
                            <div class="dot"></div>
                            <div class="number">
                                {{candidate.votes}} votes
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="vote-btn">
                Vote for me
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CandidateVote',
    data(){
        return {
            candidates: [
                {
                    name: 'Jade Williams',
                    votes: '56'
                },
                {
                    name: 'Jade Williams',
                    votes: '56'
                },
                {
                    name: 'Jade Williams',
                    votes: '56'
                },
                {
                    name: 'Jade Williams',
                    votes: '56'
                }
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '../../styles/mobile/candidate-vote.scss';
</style>