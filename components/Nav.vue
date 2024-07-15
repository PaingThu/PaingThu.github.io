<template>
    <nav>
        <div class="nav-bar">
            <div class="brand">
                <span>MAW PAING THU</span>
                <span>モーパイントゥー</span>
            </div>
            <div class="nav-items">
                <NuxtLink class="nav-item" to="/">Home</NuxtLink>
                <NuxtLink class="nav-item" to="/about">About</NuxtLink>
                <NuxtLink class="nav-item" to="/skills">Skills</NuxtLink>
                <NuxtLink class="nav-item" to="/education">Education</NuxtLink>
                <NuxtLink class="nav-item" to="/work">Work</NuxtLink>
                <NuxtLink class="nav-item" to="/experience">Experience</NuxtLink>
                <NuxtLink class="nav-item" to="/contact">Contact</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    nav{
        @apply shadow;
        .nav-bar{
            @apply flex container mx-auto py-2;
            .brand{
                @apply flex flex-col;
            }
            .nav-items{
                @apply flex ms-auto;
                .nav-item{
                    @apply p-3 underline-offset-8;
                }
    
            }
        }
    }
</style>