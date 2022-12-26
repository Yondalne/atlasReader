<template>
    <div>
        <h2 class="text-2xl font-bold">Top Readings</h2>

        <div class="overflow-hidden">
            <!-- Carousel -->
            <div class="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory slides">
                <div class="flex flex-row flex-wrap gap-x-14 mt-8 mr-10 shrink-0 scale-100 snap-start" id="slide-1" tabindex="0">
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap gap-x-14 mt-8 mr-10 shrink-0 scale-100 snap-start" id="slide-2" tabindex="0">
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                    <div class="text-center flex flex-col items-center ">
                        <img src="/solo.png" alt="">
                        <h4 class="font-semibold mt-3">Solo Leveling</h4>
                    </div>
                </div>
            </div>

            <!-- Carousel nav -->
            <div class="mt-5">
                <div class="carousel__nav flex justify-center">
                    <a class="slider-nav mx-2 py-1 px-3 rounded-full bg-neutral-300 hover:bg-black hover:text-white" href="#slide-1" aria-label="Go to slide 1">1</a>
                    <a class="slider-nav mx-2 py-1 px-3 rounded-full bg-neutral-300 hover:bg-black hover:text-white" href="#slide-2" aria-label="Go to slide 2">2</a>
                </div>
                <!-- <div class="carousel__skip-message" id="skip-link" tabindex="0"></div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
    .slides {
        scrollbar-width: none;
    }
    .slides::-webkit-scrollbar {
        display: none;
    }
</style>