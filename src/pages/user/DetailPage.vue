<template>
    <div class="">
        <div class="w-[99vw] h-full absolute top-0 right-0 z-[-1] overflow-hidden">
            <video src="/testbg.mp4" :autoplay="true" :controls="false" :muted="true"></video>
        </div>
        <div class="flex flex-row grow-1 mx-auto px-16 bg-gradient-to-b from-white/80 to-white absolute bottom-0 border-none rounded-t-xl">
            <div class="flex flex-row mt-16">
                <div class="w-1/4 pr-16">
                    <img src="/kny.jpg" alt="">
                </div>
                <div>
                    <h2 class="font-bold text-lg text-blue-900">Solo leveling</h2>
                    <p>Synopsis</p>
                    <div>

                    </div>
                </div>
            </div>
            <div class="mt-16">
                <ranks></ranks>
            </div>
        </div>
    </div>
</template>

<script>
import Ranks from "../../components/user/Ranks.vue"
export default {
    components: {
        Ranks
    }
}
</script>
