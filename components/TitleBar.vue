<template>
    <div class="title-bar">
        <h3>
            <slot name="title" />
        </h3>
        <div class="level">
            <span>Level: </span>
            <span class="level-btn">
                <slot name="levels" />
            </span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    .title-bar{
        @apply flex items-center w-full p-3 border-b-[3px] border-b-blue-300 shadow;
        .level{
            @apply flex ms-auto items-center gap-4;
            .level-btn{
                @apply flex gap-3;
                button{
                    @apply flex items-center justify-center w-10 h-10 rounded-full bg-white border;
                }
                button.current-level{
                    @apply bg-orange-300;
                }
            }
        }
    }
</style>