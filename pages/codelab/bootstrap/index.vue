<template>
    <div class="page-content cl vu">
        <CodelabBreadcrumb>
            <span>Bootstrap</span>
        </CodelabBreadcrumb>
        <div class="cl-title">
            <span class="clt-icon" v-html="ICONS.bootstrap"></span>
            <h3>Bootstrap</h3>
            <small>{{ getExperienceInfo('bootstrap') }}</small>
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