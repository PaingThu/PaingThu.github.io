<template>
    <div class="page-content cl vu">
        <CodelabBreadcrumb>
            <span>SLIM</span>
        </CodelabBreadcrumb>
        <div class="cl-title">
            <img class="img-icon" src="/assets/images/slim.png" alt="">
            <h3>SLIM</h3>
            <small>{{ getExperienceInfo('slim') }}</small>
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