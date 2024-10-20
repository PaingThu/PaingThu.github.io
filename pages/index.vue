<template>
    <div class="page-content home-page">
        <Banner />
        <div class="let-connect">
            <span @mouseenter="hoverEffect = 'hover'" @mouseleave="hoverEffect = ''">
                Let’s connect and create something remarkable together! <br> 
                Feel free to reach out—I’m always up for a coding adventure.
            </span>
        </div>
        <div class="container mx-auto my-apps">
            <router-link to="/hiragana" class="app">
                <h4>Japanese</h4>
                <h4>For</h4>
                <h1 class="kids">
                    <span class="text-yellow-300">K</span>
                    <span class="text-green-300">I</span>
                    <span class="text-red-300">D</span>
                    <span class="text-blue-300">S</span>
                    
                </h1>
                <img src="/assets/images/kids.svg" class="pt-4" alt="Image By Freepik">
            </router-link>
            <!-- <router-link to="/maw-gpt" class="maw-gpt-app">
                <div class="maw-gpt-logo">
                    <img src="/assets/images/pp.png" alt="" @click="clickImg">
                    <h3>MAW-GPT</h3> 
                </div>
                <div class="description">
                    <span>Welcome to MAW-GPT. You can use MAW-GPT five times to search for text only, images only, or both.</span>
                    <span class="sec">SEARCH</span>
                </div>
            </router-link> -->
        </div>
    </div>
</template>

<script setup>
    import Banner from '~/components/Banner.vue';
    useHead({
        title: 'MAW PAING THU',
        meta: [
            { name: 'description', content: 'I’m a passionate Full Stack developer with expertise in Vue.js, Nuxt.js, and PHP API development. Let’s connect and create something remarkable together! Feel free to reach out—I’m always up for a coding adventure.' }
        ],
    })
    const hoverEffect = ref("")
</script>

<style lang="scss" scoped>
    .home-page{
        .let-connect{
            @apply font-mono flex items-center justify-center p-4 bg-slate-100;
            span{
                @apply md:text-center cursor-progress;
            }
        }
        .my-apps{
            @apply grid grid-cols-2 gap-3 px-4 py-10;
            @apply md:grid-cols-4;
            .app{
                @apply bg-orange-300 p-4 rounded;
                h4{
                    @apply text-center text-white font-serif;
                }
                .kids{
                    @apply font-serif text-center;
                }
            }
            .maw-gpt-app{
                @apply flex flex-col items-center rounded border border-blue-300 pt-6;
                .maw-gpt-logo{
                    @apply mb-5;
                    @apply md:mb-10;
                }
                .description{
                    @apply flex w-full text-center bg-blue-300 p-3 items-center;
                    @apply flex-auto md:mt-auto  md:flex-col text-center bg-blue-300 p-3;
                    span:first-child{
                        @apply hidden;
                        @apply  md:block;
                    }
                    span.sec{
                        @apply flex items-center justify-center w-full italic text-white;
                        @apply md:flex-auto text-lg;
                    }
                }
            }
        }
    }
</style>