<template>
    <nav>
        <div class="nav-bar" >
            <NuxtLink class="brand" to="/">
                <span>MAW PAING THU</span>
                <span>モーパイントゥー</span>
            </NuxtLink>
            <span class="mobile-menu" @click="menuStatus = true">
                <svg class="block h-[35px] w-[35px] fill-current text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
            </span>
            <div :class="['nav-items-wrapper', menuStatus ? 'menu-show' : '']">
                <div class="cover" @click="menuStatus = false"></div>
                <div class="nav-items">
                    <div class="nav-item menu-close" >
                        <span @click="menuStatus = false">
                            <svg class="h-[35px] w-[35px] text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </span>
                    </div>
                    <NuxtLink class="nav-item" @click="menuStatus = false" to="/">It's me</NuxtLink>
                    <!-- <NuxtLink class="nav-item" @click="menuStatus = false" to="/about">About</NuxtLink> -->
                    <!-- <NuxtLink class="nav-item" @click="menuStatus = false" to="/skills">Skills</NuxtLink> -->
                    <!-- <NuxtLink class="nav-item" @click="menuStatus = false" to="/education">Education</NuxtLink> -->
                    <!-- <NuxtLink class="nav-item" @click="menuStatus = false" to="/work-experience">Work Experience</NuxtLink> -->
                    <!-- <NuxtLink class="nav-item" @click="menuStatus = false" to="/contact">Contact</NuxtLink> -->
                    <NuxtLink :class="['nav-item', route.name.includes('codelab') ? 'active' : '']" @click="menuStatus = false" to="/codelab">Codelab</NuxtLink>
                    <NuxtLink class="nav-item" @click="menuStatus = false" to="/js-playground">MAW's JS Playgound</NuxtLink>
                    <NuxtLink class="nav-item" @click="menuStatus = false" to="/hiragana">Japanese For KIDS</NuxtLink>
                    <!-- <NuxtLink class="nav-item" @click="menuStatus = false" to="/maw-gpt">MAW-GPT</NuxtLink> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    const route = useRoute()
    const menuStatus = ref(false)
    const { x,y } = useMouse()
</script>

<style lang="scss" scoped>
    //md: means from ≥768px
    nav{
        @apply sticky top-0 shadow px-4 z-50 bg-white;
        .cover{
            @apply absolute top-0 left-0 w-full h-screen bg-slate-700/50 z-10;
            @apply md:hidden;
        }
        .nav-bar{
            @apply flex container mx-auto py-2;
            .brand{
                @apply flex flex-col font-bold;
            }
            .mobile-menu{
                @apply flex items-center ms-auto;
                @apply md:hidden;
            }
            .nav-items-wrapper{
                @apply ms-auto;
                .nav-items{
                    @apply absolute top-0 right-0 flex flex-col bg-white w-3/4 h-screen shadow z-20; 
                    @apply md:flex-row md:static md:shadow-none md:w-auto md:h-auto;
                    .nav-item{
                        @apply p-3 transition delay-150 duration-300 border-b-[0.5px]; 
                        @apply active:bg-slate-300;
                        @apply md:hover:underline md:hover:underline-offset-8 md:border-b-0;
                    }
                    .nav-item.active, .nav-item.router-link-active{
                        @apply no-underline;
                        @apply md:underline md:underline-offset-8;
                    }
                    .menu-close{
                        @apply flex justify-end; 
                        @apply md:hidden h-[64px];
                    }
                }
            }
            .nav-items-wrapper:not(.menu-show){
                @apply hidden;
                @apply md:flex;
            }
        }
    }
</style>