<template>
    <div class="h-auto relative">
        <a href="#detail">
            <video class="object-cover sticky top-[5rem] left-[0] translate-x-[-0%] translate-y-[-0%] z-[-1]" src="/testbg.mp4" :autoplay="true" :controls="false" :muted="true"></video>
        </a>
        <div class="bg-gradient-to-b from-white/60 to-white rounded-t-full">
            <div id="detail" class="h-40"></div>
            <div class="h-full flex flex-row grow-1 mx-auto px-16 border-none rounded-t-xl gap-32 ">
                <div class="w-2/3 flex flex-row bg-white gap-16 pr-16">
                    <div class="w-2/5">
                        <img src="/kny.jpg" alt="">
                    </div>
                    <div class="w-[60%]">
                        <h2 class="font-bold text-4xl text-blue-900 mt-8">Kimetsu no Yaiba</h2>
                        <div class="bg-[#faf8f7] mt-6 p-5 rounded-lg drop-shadow-lg">
                            <h3 class="font-bold text-xl mb-5 mx-5 underline">Synopsis</h3>
                            <p class="text-lg leading-loose text-justify">
                                L'histoire se situe au Japon pendant l'ère Taisho (1912-1926). 
                                Kamado Tanjirou est un jeune vendeur de charbon qui vivait dans les montagnes avec sa famille. 
                                Sa vie paisible a été bouleversée quand sa famille a été massacré par un féroce oni, un démon issu du folklore japonais. 
                                Les seuls survivants sont lui et sa soeur Nezuko, transformée en oni par son meurtrier. 
                                Pour guérir sa soeur et venger sa famille, ils doivent faire un long voyage. Une aventure épique remplie de combats sanglants débute !
                            </p>
                        </div>
                        <div class="mt-16">
                            <h3 class="font-bold text-xl my-5 mx-5 underline">Chapters</h3>
                            <ul class="text-lg list-disc">
                                <div class="py-5 px-10 bg-[#faf8f7] drop-shadow-lg rounded-lg mb-5">
                                    <li>
                                         <div class="font-medium flex flex-row justify-between items-center">
                                            <p class="box">Chapter ?  : <span class="ml-8">Title</span></p>
                                            <div class="flex items-center flex-row gap-x-5">
                                                <unicon name="eye"></unicon>
                                                <unicon name="favorite"></unicon>
                                            </div> 
                                        </div>
                                    </li>
                                </div>
                                <div class="py-5 px-10 bg-[#faf8f7] drop-shadow-lg rounded-lg mb-5">
                                    <li>
                                         <div class="font-medium flex flex-row justify-between items-center">
                                            <p class="box">Chapter ?  : <span class="ml-8">Title</span></p>
                                            <div class="flex items-center flex-row gap-x-5">
                                                <unicon name="eye"></unicon>
                                                <unicon name="favorite"></unicon>
                                            </div> 
                                        </div>
                                    </li>
                                </div>
                                <div class="py-5 px-10 bg-[#faf8f7] drop-shadow-lg rounded-lg mb-5">
                                    <li>
                                         <div class="font-medium flex flex-row justify-between items-center">
                                            <p class="box">Chapter ?  : <span class="ml-8">Title</span></p>
                                            <div class="flex items-center flex-row gap-x-5">
                                                <unicon name="eye"></unicon>
                                                <unicon name="favorite"></unicon>
                                            </div> 
                                        </div>
                                    </li>
                                </div>
                                <div class="py-5 px-10 bg-[#faf8f7] drop-shadow-lg rounded-lg mb-5">
                                    <li>
                                         <div class="font-medium flex flex-row justify-between items-center">
                                            <p class="box">Chapter ? : <span class="ml-8">Title</span></p>
                                            <div class="flex items-center flex-row gap-x-5">
                                                <unicon name="eye"></unicon>
                                                <unicon name="favorite"></unicon>
                                            </div> 
                                        </div>
                                    </li>
                                </div>
                                <div class="py-5 px-10 bg-[#faf8f7] drop-shadow-lg rounded-lg mb-5">
                                    <li>
                                         <div class="font-medium flex flex-row justify-between items-center">
                                            <p class="box">Chapter ? : <span class="ml-8">Title</span></p>
                                            <div class="flex items-center flex-row gap-x-5">
                                                <unicon name="eye"></unicon>
                                                <unicon name="favorite"></unicon>
                                            </div> 
                                        </div>
                                    </li>
                                </div>
                                <div class="py-5 px-10 bg-[#faf8f7] drop-shadow-lg rounded-lg mb-5">
                                    <li>
                                         <div class="font-medium flex flex-row justify-between items-center">
                                            <p class="box">Chapter ? : <span class="ml-8">Title</span></p>
                                            <div class="flex items-center flex-row gap-x-5">
                                                <unicon name="eye"></unicon>
                                                <unicon name="favorite"></unicon>
                                            </div> 
                                        </div>
                                    </li>
                                </div>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row grow h-fit bg-white pt-8">
                    <ranks></ranks>
                </div>
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
