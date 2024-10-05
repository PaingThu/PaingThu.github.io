<template>
    <div class="classroom-layout">
        <HiraganaMenu />
        <div class="flex-auto">
            <!-- <Nav /> -->
            <slot />
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
    .classroom-layout{
        @apply flex flex-col;
        @apply md:flex-row;
    }
</style>