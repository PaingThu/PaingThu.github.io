<template>
    <div class="sub-nav">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
    .sub-nav{
        @apply flex;
        .sn-item{
            @apply px-3 py-2;
            @apply hover:bg-slate-400 hover:text-white;
        }
        .sn-item.router-link-active{
            @apply bg-slate-600 text-white;
        }
    }
</style>