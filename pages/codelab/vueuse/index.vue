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
        <div class="functions">
            <VueuseCoreCreateGlobalState />

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
        .functions{
            
        }
    }
</style>