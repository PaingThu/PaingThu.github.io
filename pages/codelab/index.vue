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
                            <small>{{ getExperienceInfo(fItem.id) }}</small>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="backend">
                <h4>Backend Development</h4>
                <div class="clf-items">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const FRONTEND = [
        { id: "tailwind", title: "Tailwind", to: "tailwind", icon: ICONS.tailwind },
        { id: "vueuse", title: "VueUse", to: "vueuse", icon: ICONS.vueuse },
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
                        @apply flex flex-col items-center p-3 border rounded cursor-pointer;
                        .cli-brand{
                            @apply flex flex-col items-center font-bold;
                            .clib-icon{
                                @apply flex items-center justify-center w-8;
                                svg{
                                    @apply w-full;
                                }
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