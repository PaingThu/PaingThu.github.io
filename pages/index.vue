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
        </div>
    </div>
</template>

<script setup>
import Banner from '~/components/Banner.vue';
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
            @apply grid grid-cols-2 gap-3 p-4;
            @apply md:grid-cols-3;
            .app{
                @apply bg-orange-300 p-4 rounded;
                h4{
                    @apply text-center text-white font-serif;
                }
                .kids{
                    @apply font-serif text-center;
                }
            }
        }
    }
</style>