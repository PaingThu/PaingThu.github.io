<template>
    <div class="home-page">
        <div class="banner">
            <div class="pp">
                <img src="/assets/images/pp.png" alt="">
            </div>
            <div class="me">
                <h3>Hi There,</h3>
                <h3>I'm <span class="mpt">MAW PAING THU</span></h3>
                <h4>Full-Stack Developer</h4>
                <h3><span class="nuxt-color">Vue.js <small>&</small> Nuxt.js </span><small>&</small> <span class="php-color">PHP</span></h3>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .home-page{
        @apply container mx-auto;
        .banner{
            @apply py-12 flex flex-col gap-4 items-center;
            .pp{
                @apply bg-slate-300 rounded-full p-3 shadow-lg;
                img{
                    @apply w-40 h-40 rounded-full transform -scale-x-[1];
                }
            }
            .me{
                h3{
                    @apply text-slate-300;
                    .mpt{
                        @apply text-slate-600;
                    }
                    small{
                        @apply text-slate-600;
                    }
                }
            }
        }
    }
</style>