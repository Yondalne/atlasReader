<template>
    <div class="h-screen bg-[#faf8f7] py-6 px-1 flex flex-col text-center text-xs drop-shadow-2xl sticky top-0 z-20">
        <div class="my-8 ">
            <span class="rounded-full p-4 bg-white">Logo</span>
        </div>
        <div class="m-6 flex flex-col justify-around">
            <div v-for="element in elements" :key="element.name" class="p-3 my-3 rounded-md flex justify-center align-middle hover:bg-[#5a6cd8]" :class="element.class">
                <a :href="element.link" class="m-auto"><unicon :name="element.name" :fill="element.fill"></unicon></a> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            elements : [
                {
                    name: "apps",
                    fill: "",
                    link: "/dashboard",
                    class: "bg-white",                   
                },
                {
                    name: "clock-eight",
                    fill: "",
                    link: "/history",                   
                    class: "",                   
                },
                {
                    name: "favorite",
                    fill: "",
                    link: "/favorites",                   
                    class: "",                   
                },
                {
                    name: "layer-group",
                    fill: "",
                    link: "/categories",                   
                    class: "",                   
                },
                {
                    name: "bookmark",
                    fill: "",
                    link: "/bookmark",                   
                    class: "",                   
                },
                {
                    name: "user",
                    fill: "",
                    link: "/profile",                   
                    class: "",                   
                },
                {
                    name: "signout",
                    fill: "",
                    link: "/singout",                   
                    class: "",                   
                },
            ]
        }
    }
}
</script>