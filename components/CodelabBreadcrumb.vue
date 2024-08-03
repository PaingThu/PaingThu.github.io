<template>
    <div class="cl-breadcrumbs">
        <NuxtLink to="/codelab">Codelab</NuxtLink>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        <slot />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .cl-breadcrumbs{
        @apply flex items-center gap-2 border-b-[0.5px] pb-2;
    }
</style>