<template>
    <div :class="status">
        <div class="name">
            {{name}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        path: String,
        name: String,
        status: String
    }
}
</script>

<style lang="sass">
    @import '../styles/nav-bar.scss';
</style>