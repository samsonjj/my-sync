<template>
    <div>
        <div>
            <input v-model="update.url" id="url-input" placeholder="youtube-url">
            <button @click="loadVideo" id="url-button">Go</button>
        </div>
        <youtube height="390" width="640" video-id="cpSu652_4Nk" ref="youtube" @playing="playing"></youtube>
    </div>
</template>
<script>
// import querystring from 'querystring'
import url from 'url'

export default {
    name: 'YoutubeSyncPage',
    data() {
        return {
            update: {
                url: ''
            },
            message: 'Hello'
        }
    },
    computed: {
        player() {
          return this.$refs.youtube.player
        }
    },
    mounted() {
        this.window.player = this.player
        this.player.loadVideoById('M7lc1UVf-VE')
        // this.player.playVideo()
        this.player.pauseVideo()
    },
    methods: {
        loadVideo() {
            console.log(this.update.url)
            const id = url.parse(this.update.url, true).query['v']
            console.log('video id', id, typeof(id))
            this.player.loadVideoById(id)
        },
        playing() {
            console.log('playing')
        }
    }
}
</script>
<style lang="scss" scoped>
#url-input {
    margin: 10px;
    width: 450px;
}
</style>


