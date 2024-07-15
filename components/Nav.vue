<template>
    <nav>
        <div class="nav-bar">
            <div class="brand">
                <span>MAW PAING THU</span>
                <span>モーパイントゥー</span>
            </div>
            <div class="nav-items">
                <NuxtLink :class="['nav-item', route.name == 'index' ? 'active' : '']" to="/">Home</NuxtLink>
                <NuxtLink :class="['nav-item', route.name == 'about' ? 'active' : '']" to="/about">About</NuxtLink>
                <NuxtLink :class="['nav-item', route.name == 'skills' ? 'active' : '']" to="/skills">Skills</NuxtLink>
                <NuxtLink :class="['nav-item', route.name == 'education' ? 'active' : '']" to="/education">Education</NuxtLink>
                <NuxtLink :class="['nav-item', route.name == 'work' ? 'active' : '']" to="/work">Work</NuxtLink>
                <NuxtLink :class="['nav-item', route.name == 'experience' ? 'active' : '']" to="/experience">Experience</NuxtLink>
                <NuxtLink :class="['nav-item', route.name == 'contact' ? 'active' : '']" to="/contact">Contact</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
    const route = useRoute()
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
                    @apply p-3;
                }
                .nav-item.active{
                    @apply underline underline-offset-8;
                }
            }
        }
    }
</style>