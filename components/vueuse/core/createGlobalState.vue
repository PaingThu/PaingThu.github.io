<template>
    <details class="fun group">
        <summary class="fun-title group-open:bg-slate-600">
            <h5 class="group-open:text-white">
                createGlobalState
            </h5>
            <div class="s-status">
                <span class="s-arrow group-open:border-l-white group-open:-rotate-90 group-open:mt-2"></span>
            </div>
        </summary>
        <div class="d-content fun-content">
            <div class="description">
                <p>Keep states in the global scope to be reusable across Vue instances.</p>
                <small>
                    Vue instance တစ်လျှောက်လုံးမှာ မည်သည့် page ကမဆို ပြန်ပြီးအသုံးပြုလို့ရအောင် global scope ထဲမှာ ထိန်းသိမ်းပေးစေချင်တဲ့အခါမှာ အသုံးပြုတယ်။
                </small>
            </div>
            <div class="experiment">
                <div class="store-in-memory">
                    <h5>
                        Without Persistence (Store in Memory)<br>
                        <small>လက်ရှိ run ထားတဲ့ အချိန်အတွင်းမှာပဲ data က ရှိနေမယ်။ browser refresh လုပ်လိုက်တဲ့အခါမှာတော့ မူလ အခြေအနေကို ပြန်ရောက်သွားပါမယ်။</small>
                    </h5>
                    <div class="for-example">
                        <div class="profile-info">
                            <div class="each-pi">
                                <span>Name</span>
                                <span>{{ profileWp.name }}</span>
                            </div>
                        </div>
                        <small>အောက်မှာရှိတဲ့ Form ထဲမှာ နမူနာ data ထည့်ကြည့်ပါ</small>
                        <form>
                            <div class="each-input">
                                <input type="text" v-model="profileWp.name" placeholder="Name">
                            </div>
                        </form>
                        <small class="note">*Browser refresh မလုပ်မချင်း data က ကျန်ရှိနေပြီးတော့ တခြားမည်သည့် page မှာမဆို အသုံးပြုလို့ ရပါမယ်။</small>
                        <div class="code-box">
                            <pre><code>import { ref } from 'vue' //no need to import in nuxt project
    import { createGlobalState } from '@vueuse/core'
    export const userProfileWithoutPersitence = createGlobalState(
    () =>{
    const profile = ref({
    name: ''
    })
    return profile
    })</code></pre>
                        </div>
                    </div>
                </div>
                <div class="store-in-memory">
                    <h5>
                        With Persistence (Store in Localstorage)<br>
                        <small>Dataကို Web browser ရဲ့ localstorage မှာ သွားပြီးသိမ်းထားပါမယ်။ Dataကို အမြဲတမ်း သိမ်းထားချင်တဲ့အခါမှာ သုံးပါတယ်။ browser refresh, browser reopen လုပ်တဲ့အခါမှာလည်း ကျန်ရှိနေပါမယ်။ browserရဲ့ localstorage ကနေ ဖျက်လိုက်ရင်တော့ မူလdata အခြေအနေကို ပြန်ရောက်သွားပါမယ်။</small>
                    </h5>
                    <div class="for-example">
                        <div class="profile-info">
                            <div class="each-pi">
                                <span>Name</span>
                                <span>{{ profile.name }}</span>
                            </div>
                        </div>
                        <small>အောက်မှာရှိတဲ့ Form ထဲမှာ နမူနာ data ထည့်ကြည့်ပါ</small>
                        <form>
                            <div class="each-input">
                                <input type="text" v-model="profile.name" placeholder="Name">
                            </div>
                        </form>
                        <small class="note">*data က အမြဲတမ်းရှိနေပြီးတော့ တခြားမည်သည့် page မှာမဆို အသုံးပြုလို့ ရပါမယ်။</small>
                        <div class="code-box">
                            <pre><code>import { createGlobalState, useStorage } from '@vueuse/core'
export const userProfile = createGlobalState(
    () =>　useStorage('vue-use-locale-storage', {
        name: ''
    })
)</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </details>
</template>

<script setup>
    const profileWp = userProfileWithoutPersitence()
    const profile = userProfile()
</script>

<style lang="scss" scoped>
    .fun{
        .fun-title{

        }
        .fun-content{
            @apply flex flex-col;
            .description{
                @apply border-b-[0.5px] pb-3;
            }
            .experiment{
                @apply grid grid-cols-1;
                .store-in-memory{
                    @apply flex flex-col gap-4 p-3;
                    .for-example{
                        @apply flex flex-col gap-3 mt-auto p-3 border rounded;
                        .profile-info{
                            @apply flex flex-col gap-3;
                            .each-pi{
                                @apply flex flex-wrap gap-3;
                                span:first-child{
                                    @apply flex;
                                }
                                span:nth-child(2){
                                    @apply flex flex-1 border-b-[0.5px];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>