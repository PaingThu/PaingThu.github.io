<template>
    <div class="page-content home-page">
        <div class="banner">
            <div class="banner-info">
                <div class="me">
                    <h3>Hi There, </h3>
                    <h3>I'm <span class="mpt">MAW PAING THU</span></h3>
                    <h4>Full-Stack Developer</h4>
                    <h3><span class="nuxt-color">Vue.js <small>&</small> Nuxt.js </span><small>&</small> <span class="php-color">PHP</span></h3>
                    <div class="sns">
                        <NuxtLink class="sns-icon" :to="SNS.linkedin" title="Welcome to my LinkedIn!" target="_blank">
                            <span class="svg-icon" v-html="ICONS.linkedin"></span>
                        </NuxtLink>
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
            <div class="skills">
                <div class="frontend">
                    <span :class="['floating-logo', 'nuxt-js', hoverEffect]" v-html="ICONS.nuxt"></span>
                    <span :class="['floating-logo', 'vue-js', hoverEffect]" v-html="ICONS.vue"></span>
                    <span :class="['floating-logo', 'sass', hoverEffect]" v-html="ICONS.sass"></span>
                    <span :class="['floating-logo', 'tailwind', hoverEffect]" v-html="ICONS.tailwind"></span>
                    <span :class="['floating-logo', 'ts', hoverEffect]" v-html="ICONS.ts"></span>
                    <span :class="['floating-logo', 'js', hoverEffect]" v-html="ICONS.js"></span>
                    <span :class="['floating-logo', 'bootstrap', hoverEffect]" v-html="ICONS.bootstrap"></span>
                </div>
            </div>
        </div>
        <div class="whoami">
            <span @mouseenter="hoverEffect = 'hover'" @mouseleave="hoverEffect = ''">
                Let’s connect and create something remarkable together! <br> 
                Feel free to reach out—I’m always up for a coding adventure.
            </span>
        </div>
        
    </div>
</template>

<script setup>
    const hoverEffect = ref("")
</script>

<style lang="scss" scoped>
    .home-page{
        .banner{
            @apply relative flex flex-col items-center px-4;
            .banner-info{
                @apply py-8 flex flex-col-reverse gap-4 items-center;
                @apply md:py-20 md:flex-row gap-4;
                .pp{
                    @apply bg-slate-300 rounded-full p-3 shadow-lg;
                    img{
                        @apply w-40 h-40 rounded-full transform -scale-x-[1];
                        @apply hover:-scale-x-[-1]
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
            .skills{
                .frontend{
                    @apply flex gap-2 p-4;
                    .floating-logo{
                        @apply flex transition-opacity duration-1000;
                        @apply md:absolute md:opacity-10;
                        @apply md:hover:opacity-100 ;
                    }
                    .floating-logo.hover{
                        @apply opacity-100 ;
                    }
                    .floating-logo.js{
                        @apply top-5 left-16;
                    }
                    .floating-logo.vue-js{
                        @apply top-40 left-52;
                    }
                    .floating-logo.sass{
                        @apply top-56 left-24;
                    }
                    .floating-logo.tailwind{
                        @apply top-14 left-[250px];
                    }
                    .floating-logo.ts{
                        @apply bottom-6 left-[350px];
                    }
                    .floating-logo.nuxt-js{
                        @apply top-5 left-[400px];
                    }
                    .floating-logo.bootstrap{
                        @apply top-32 left-[400px];
                    }
                }
            }
        }
        .whoami{
            @apply font-mono flex items-center justify-center p-4 bg-slate-100;
            span{
                @apply md:text-center cursor-progress;
            }
        }
    }
</style>