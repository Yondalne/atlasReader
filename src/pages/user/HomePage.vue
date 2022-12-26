<template>
    <div class="h-screen pr-16">
        <top-reads></top-reads>
        <recent-publishes></recent-publishes>
    </div>
</template>

<script>
import TopReads from "../../components/user/TopReads.vue"
import RecentPublishes from "../../components/user/RecentPublishes.vue"

export default {
    components: {
        TopReads,
        RecentPublishes
    }    
}
</script>
