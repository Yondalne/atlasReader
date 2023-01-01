<template>
    <div class="pl-16 flex flex-row justify-between py-10 sticky top-0 bg-white w-full z-10">
        <div class="flex flex-row grow align-middle text-[#516A90] font-bold">
            <h2 class="py-3 mr-5">Hot : </h2>
            <a href="" class="rounded-full drop-shadow-xl text-black border border-solid border-neutral-300 ml-5 py-3 px-5"># Test</a>
            <a href="" class="rounded-full drop-shadow-xl text-black border border-solid border-neutral-300 ml-5 py-3 px-5"># Test</a>
            <a href="" class="rounded-full drop-shadow-xl text-black border border-solid border-neutral-300 ml-5 py-3 px-5"># Test</a>
            <a href="" class="rounded-full drop-shadow-xl text-black border border-solid border-neutral-300 ml-5 py-3 px-5"># Test</a>
        </div>
        <div class="flex w-1/3 px-16">
            <form class="w-full h-full flex relative">
                <input type="text" placeholder="Type your research here" class="relative border border-solid rounded-full pl-6 w-full bg-neutral-100 outline-none focus:bg-white">
                <div class="absolute top-[50%] -translate-y-[50%] right-2 bg-white w-[40px] h-[40px] rounded-full flex align-middle justify-center items-center">
                    <unicon name="search" fill=""></unicon>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
          hot: [
            {
                category: "Shonen",
                link: "/category/shonen",
            },
            {
                category: "Seinen",
                link: "/category/seinen",
            },
            {
                category: "Shojo",
                link: "/category/shojo",
            },
          ]  
        }
    }
}

</script>
