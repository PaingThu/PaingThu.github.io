<template>
    <div class="page-content cl vu">
        <CodelabBreadcrumb>
            <span>VueUse</span>
        </CodelabBreadcrumb>
        <div class="cl-title">
            <span class="clt-icon" v-html="ICONS.vueuse"></span>
            <h3>VueUse</h3>
            <small>{{ getExperienceInfo('vueuse') }}</small>
        </div>
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
        .functions{
            
        }
    }
</style>