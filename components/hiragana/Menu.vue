<template>
    <div class="side-menu">
        <div class="page-title">
            <div class="pt">
                <h4><span class="text-3xl">J</span>apanese</h4>
                <h4>For</h4>
                <h3 class="kids">
                    <span class="text-yellow-300">K</span>
                    <span class="text-green-300">I</span>
                    <span class="text-red-300">D</span>
                    <span class="text-blue-300">S</span>
                </h3>
            </div>
            <span id="humburgerMenu" class="humburger-menu" @click="menuToggle=true">
                <svg class="block h-[35px] w-[35px] fill-current text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
            </span>
        </div>
        <div v-if="menuToggle" class="cover" @click="menuToggle = false"></div>
        <div v-if="menuToggle" class="menus flex flex-col">
            <span class="menu-close" @click="menuToggle=false">
                <svg v-if="menuToggle"  class="h-[35px] w-[35px] text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </span>
            <router-link class="each-menu" v-for="menu in menus" :key="`${menu.id}_menu`" :to="menu.to" @click="clickMenu">
                <span class="jp">{{ menu.jp }}</span>
                <span class="others">
                    <small class="en">{{ menu.en }}</small>
                    <small class="mm">{{ menu.mm }}</small>
                </span>
            </router-link>
        </div>
    </div>
</template>

<script setup>  
    const menus = [
        { id: "hiragana", jp: "ひらがな", mm: "ဟိရဂန", en: "Hiragana", to: "/hiragana" },
        { id: "hiragana_goi", jp: "ごい", mm: "ဝေါဟာရ", en: "Vocabulary" , to: "/hiragana/goi" },
    ]
    const menuToggle = ref(false)
    const spMenu = ref(false)

    const clickMenu = () => {
        if(spMenu.value){
            menuToggle.value = false
        }
    }

    onMounted(() => {
        const menu = document.getElementById("humburgerMenu")
        spMenu.value = menu.checkVisibility()
        menuToggle.value = spMenu.value ? false : true
    })

</script>

<style lang="scss" scoped>
    .side-menu{
        @apply sticky top-0 flex-col shadow w-full bg-white;
        @apply md:h-screen md:w-[223px];
        .page-title{
            @apply flex items-center h-[64px] shadow-sm px-3;
            @apply md:justify-center;
            .pt{
                @apply flex justify-center items-baseline gap-2;
                h4{
                    @apply text-blue-300;
                } 
            }
            .humburger-menu{
                @apply block ms-auto;
                @apply md:hidden;
            }
        }
        .cover{
            @apply absolute top-0 left-0 w-full h-screen bg-slate-700/50 z-10;
            @apply md:hidden;
        }
        .menus{
            @apply absolute z-10 w-3/4 right-0 top-0 bg-white h-screen;
            @apply md:relative md:w-full;
            .menu-close{
                @apply flex h-[64px] items-center px-3 border-b-[1px];
                @apply md:hidden;
                svg{
                    @apply ms-auto;
                }
            }
            .each-menu{
                @apply flex items-center p-3 border-b-[1px];
                @apply hover:bg-blue-100;
                .jp{
                    @apply font-bold;
                }
                .others{
                    @apply flex flex-col ms-auto text-right;
                }
            }
            .each-menu.router-link-active{
                @apply bg-blue-200;
            }
        }
    }
</style>