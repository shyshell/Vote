<template>
    <div class="all">
        <div>
            <div class="profile-info">
                <img class="profile-pic" src="https://picsum.photos/200" alt="pic">
                <p class="title3">Bifa Elections</p>
            </div>
        </div>
        <div class="horizontal-line"></div>
        <div class="stats">
            <!-- <div class="stats-details">
                <p class="candidates-number">{{ candidatesCount }} <br> <span class="subtitle">Candidates</span></p>
            </div>

            <div class="stats-details">
                <p class="voters-number">{{ votersCount }} <br> <span class="subtitle">Voters</span></p>
            </div> -->
            <div class="slot">
                candidates {{candidatesCount}}
            </div>
            <div class="slot">
                voters {{votersCount}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: {
        votersCount: String,
        candidatesCount: String,
    }
}
</script>

<style lang="sass" scoped>
    @import "../styles/profile.scss";
    @import "../styles/common.scss";
</style>