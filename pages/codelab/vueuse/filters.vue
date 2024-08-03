<template>
    <div class="page-content cl vu">
        <h3>VueUse Codelab</h3>
        <SubNav>
            <NuxtLink 
                v-for="sn in VueUseSubNav" :key="sn" 
                class="sn-item" 
                :to="sn.to"
            >
                {{ sn.label }}
            </NuxtLink>    
        </SubNav>
        <div class="core-functions">
            <details class="cf group">
                <summary class="cf-title">
                    <h5>
                        createGlobalState
                    </h5>
                    <div class="s-status">
                        <span class="s-arrow group-open:-rotate-90 group-open:mt-2"></span>
                    </div>
                </summary>
                <div class="d-content">
                    keep states in the global scope to be reusable across Vue instances
                </div>
            </details>
        </div>
    </div>
</template>

<script setup>

    const route = useRoute()
</script>

<style lang="scss" scoped>
    .vu{
        @apply flex flex-col gap-4;
        h3{
            @apply p-4 self-center;
        }
        .core-functions{
            .cf{
                .cf-title{

                }
                .cf-content{
                    
                }
            }
        }
    }
</style>