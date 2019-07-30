<template>
    <div class="msg">
        msg{{$route.query.title}}
    </div>
</template>
<style lang="sass" scoped>

</style>
<script>
export default {
    mounted() {
        console.log(this.$route.params.id)
    },
}
</script>
