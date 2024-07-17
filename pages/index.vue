<template>
    <div class="home-page">
        <div class="banner">
            <div class="banner-info">
                <div class="me">
                    <h3>Hi There,</h3>
                    <h3>I'm <span class="mpt">MAW PAING THU</span></h3>
                    <h4>Full-Stack Developer</h4>
                    <h3><span class="nuxt-color">Vue.js <small>&</small> Nuxt.js </span><small>&</small> <span class="php-color">PHP</span></h3>
                    <div class="sns">
                        <NuxtLink class="sns-icon" :to="SNS.github" title="Welcome to my Github!" target="_blank">
                            <span class="svg-icon" v-html="ICONS.github"></span>
                        </NuxtLink>
                        <NuxtLink class="sns-icon" :to="SNS.teams" title="Please don't hesitate to contact me." target="_blank">
                            <span class="svg-icon" v-html="ICONS.teams"></span>
                        </NuxtLink>
                    </div>
                </div>
                <div class="pp">
                    <img src="/assets/images/pp.png" alt="">
                </div>
            </div>
            <div class="favourite-quote">
                <span>
                    Everybody should learn to program a computer because it teaches you how to think. 
                </span>
                <span class="by">– Steve Jobs</span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .home-page{
        .banner{
            @apply flex flex-col items-center px-4;
            .banner-info{
                @apply py-8 flex flex-col-reverse gap-4 items-center;
                @apply md:py-12 md:flex-row gap-4;
                .pp{
                    @apply bg-slate-300 rounded-full p-3 shadow-lg;
                    img{
                        @apply w-40 h-40 rounded-full transform -scale-x-[1];
                    }
                }
                .me{
                    @apply text-center;
                    @apply md:text-right;
                    h3{
                        @apply text-slate-300;
                        .mpt{
                            @apply text-slate-600;
                        }
                        small{
                            @apply text-slate-600;
                        }
                    }
                    .sns{
                        @apply inline-flex items-center gap-3 ms-auto;
                        .sns-icon{
                            @apply shadow p-1 rounded-full border border-white;
                            @apply hover:border-slate-300 hover:shadow-none hover:bg-slate-100 ;
                        }
                    }
                }
            }
            .favourite-quote{
                @apply font-mono flex flex-col;
                .by{
                    @apply ms-auto text-sm;
                }
            }
        }
    }
</style>