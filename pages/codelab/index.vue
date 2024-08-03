<template>
    <div class="page-content codelab">
        <h3>Welcome to my code lab!</h3>
        <div class="cl-items">
            <!-- <NuxtLink class="cl-item" to="/codelab/tailwind">Tailwind</NuxtLink> -->
            <NuxtLink class="cl-item" to="/codelab/vueuse">Vueuse</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .codelab{
        @apply container mx-auto flex flex-col gap-4;   
        .cl-items{
            @apply flex;
            .cl-item{
                @apply p-3 border rounded;
            }
        }
        
    }
</style>