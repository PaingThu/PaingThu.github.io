<template>
    <div class="page-content cl vu">
        <CodelabBreadcrumb>
            <span>Tailwind</span>
        </CodelabBreadcrumb>
        <div class="cl-title">
            <span class="clt-icon" v-html="ICONS.tailwind"></span>
            <h3>Tailwind</h3>
            <small>{{ getExperienceInfo('tailwind') }}</small>
        </div>
        <SubNav>
            <NuxtLink 
                v-for="sn in TailwindSubNav" :key="sn" 
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
    const TailwindSubNav = []
    
</script>

<style lang="scss" scoped>
    .vu{
        @apply flex flex-col gap-4;
        .functions{
            
        }
    }
</style>