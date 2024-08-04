<template>
    <div class="page-content cl vu">
        <CodelabBreadcrumb>
            <span>Laravel</span>
        </CodelabBreadcrumb>
        <div class="cl-title">
            <span class="clt-icon" v-html="ICONS.laravel"></span>
            <h3>Laravel</h3>
            <small>{{ getExperienceInfo('laravel') }}</small>
        </div>
        <SubNav>
            <NuxtLink 
                v-for="sn in subNav" :key="sn" 
                class="sn-item" 
                :to="sn.to"
            >
                {{ sn.label }}
            </NuxtLink>
        </SubNav>
        <div class="functions">
            <!-- <VueuseCoreCreateGlobalState /> -->

        </div>
    </div>
</template>

<script setup>

    const route = useRoute()
    const subNav = []
    
</script>

<style lang="scss" scoped>
    .vu{
        @apply flex flex-col gap-4;
        .functions{
            
        }
    }
</style>