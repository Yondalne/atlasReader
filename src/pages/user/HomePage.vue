<template>
    <div class="h-auto pr-16">
        <top-reads></top-reads>
        <div class="flex flex-row gap-x-32 mt-16">
            <recent-publishes></recent-publishes>
            <ranks></ranks>
        </div>
    </div>
</template>

<script>
import TopReads from "../../components/user/TopReads.vue"
import RecentPublishes from "../../components/user/RecentPublishes.vue"
import Ranks from "../../components/user/Ranks.vue"

export default {
    components: {
        TopReads,
        RecentPublishes,
        Ranks
    }    
}
</script>
