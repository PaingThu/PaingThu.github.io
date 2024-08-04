<template>
    <div class="page-content codelab">
        <div class="cl-title">
            <h3>Welcome to my codelab!</h3>
            <p class="description">
                Code consistently to reinforce your learning. <br class="hidden md:block">
                Solve problems, write small programs, and experiment with different language features.
            </p>
        </div>
        <div class="cl-categories">
            <div class="frontend">
                <h4>Frontend Development</h4>
                <div class="clf-items">
                    <NuxtLink class="cl-item" v-for="(fItem, fIndex) in FRONTEND" :key="fIndex" :to="`/codelab/${fItem.to}`">
                        <div class="cli-brand">
                            <span class="clib-icon" v-html="fItem.icon"></span>
                            <span>{{ fItem.title }}</span>
                        </div>
                        <small>{{ getExperienceInfo(fItem.id) }}</small>
                    </NuxtLink>
                </div>
            </div>
            <div class="backend">
                <h4>Backend Development</h4>
                <div class="clf-items">
                    <NuxtLink class="cl-item" v-for="(bItem, fIndex) in BACKEND" :key="fIndex" :to="`/codelab/${bItem.to}`">
                        <div class="cli-brand">
                            <span v-if="bItem.icon" class="clib-icon" v-html="bItem.icon"></span>
                            <img class="img-icon" v-if="bItem.img" :src="bItem.img" alt="">
                            <span>{{ bItem.title }}</span>
                        </div>
                        <small>{{ getExperienceInfo(bItem.id) }}</small>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import slim from "@/assets/images/slim.png"
    import composer from "@/assets/images/composer.svg"
    import postgresql from "@/assets/images/postgresql.svg"
    import aws from "@/assets/images/aws-2.svg"
    const FRONTEND = [
        { id: "nuxt", title: "Nuxt", to: "nuxt", icon: ICONS.nuxt },
        { id: "vue", title: "Vue", to: "vue", icon: ICONS.vue },
        { id: "vueuse", title: "VueUse", to: "vueuse", icon: ICONS.vueuse },
        { id: "javascript", title: "Javascript", to: "javascript", icon: ICONS.js },
        { id: "typescript", title: "Typescript", to: "typescript", icon: ICONS.ts },
        { id: "tailwind", title: "Tailwind", to: "tailwind", icon: ICONS.tailwind },
        { id: "bootstrap", title: "Bootstrap", to: "bootstrap", icon: ICONS.bootstrap },
        { id: "sass", title: "SASS", to: "sass", icon: ICONS.sass },
    ]
    const BACKEND = [
        { id: "laravel", title: "laravel", to: "laravel", icon: ICONS.laravel },
        { id: "php", title: "PHP", to: "php", icon: ICONS.php },
        { id: "slim", title: "SLIM", to: "slim", img: slim },
        { id: "mysql", title: "MySQL", to: "mysql", icon: ICONS.mysql },
        { id: "composer", title: "Composer", to: "composer", img: composer },
        { id: "aws", title: "aws", to: "aws", img: aws },
        { id: "postgresql", title: "PostgreSQL", to: "postgresql", img: postgresql },
    ]
</script>

<style scoped lang="scss">
    .codelab{
        @apply container mx-auto flex flex-col gap-12 py-8 px-4;   
        .cl-title{
            @apply flex flex-col gap-3 items-center;
            .description{
                @apply font-mono;
                @apply md:text-center;
            }
        }
        .cl-categories{
            @apply flex flex-col gap-8;
            .frontend, .backend{
                @apply flex flex-col gap-3;
                h4{
                    @apply bg-slate-100 px-3 py-2 rounded;
                }
                .clf-items{
                    @apply grid grid-cols-1 gap-3;
                    @apply md:grid-cols-3;
                    .cl-item{
                        @apply flex flex-col gap-1 items-center p-3 border rounded cursor-pointer;
                        @apply hover:shadow;
                        .cli-brand{
                            @apply flex flex-col items-center font-bold;
                            .clib-icon{
                                @apply flex items-center justify-center w-8 h-8 mb-1;
                            }
                        }
                        .cli-description{

                        }
                    }
                }
            }
        }
        
    }
</style>