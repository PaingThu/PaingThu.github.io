<template>
    <div class="goi">
        <h3>ごい</h3>
        <div class="goi-list">
            <div v-for="goi in goi_list" :key="`${goi.id}_goi`" class="each-goi" :class="selectedGoi==goi.romaji ? 'selected' : ''" @click="selectedGoi=goi.romaji">
                <img :src="goi.img" alt="">
                <span class="jp mt-3">{{ goi.jp }}</span>
                <span class="others">
                    <small class="en">{{ goi.en }}</small>
                    <small class="mm">{{ goi.mm }}</small>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Japanese For KIDS: HIRAGANA-GOI',
        meta: [
            { name: 'description', content: 'Japanese For KIDS: HIRAGANA GOI' }
        ],
    })
    import ie from "../../../assets/images/ie.jpg"
    import ue from "../../../assets/images/ue.jpg"
    import iku from "../../../assets/images/iku.jpg"
    import ike from "../../../assets/images/ike.jpg"
    import eki from "../../../assets/images/eki.jpg"
    import kau from "../../../assets/images/kau.jpg"
    import kao from "../../../assets/images/kao.jpg"
    import asa from "../../../assets/images/asa.jpg"
    import ashi from "../../../assets/images/ashi.jpg"
    import ase from "../../../assets/images/ase.jpg"
    definePageMeta({
        layout: 'classroom'
    })
    const goi_list = [
        { romaji: "ie", jp: "いえ", mm: "အိမ်", en: "house", img: ie },
        { romaji: "ue", jp: "うえ", mm: "အပေါ်", en: "up", img: ue },
        { romaji: "iku", jp: "いく", mm: "သွားသည်", en: "go", img: iku },
        { romaji: "ike", jp: "いけ", mm: "ရေကန်", en: "pong", img: ike },
        { romaji: "eki", jp: "えき", mm: "ဘူတာ", en: "train", img: eki },
        { romaji: "kau", jp: "かう", mm: "ဝယ်သည်", en: "buy", img: kau },
        { romaji: "kao", jp: "かお", mm: "မျက်နှာ", en: "face", img: kao },
        { romaji: "asa", jp: "あさ", mm: "မနက်ခင်း", en: "morning", img: asa },
        { romaji: "ashi", jp: "あし", mm: "ခြေထောက်", en: "leg", img: ashi },
        { romaji: "ase", jp: "あせ", mm: "ချွေး", en: "sweat", img: ase },
        { romaji: "ishi", jp: "いし", mm: "ကျောက်တုန်း", en: "stone", img:"" },
        { romaji: "osu", jp: "おす", mm: "နှိပ်သည်", en: "push", img:"" },
        { romaji: "suki", jp: "すき", mm: "ကြိုက်သည်", en: "like", img:"" },
        { romaji: "suhi", jp: "すし", mm: "ဆူရှီ", en: "suhi", img:"" },
        { romaji: "seki", jp: "せき", mm: "ချောင်းဆိုး", en: "cough", img:"" },
        { romaji: "ichi", jp: "いち", mm: "တစ်", en: "one", img:"" },
        { romaji: "itsu", jp: "いつ", mm: "ဘယ်တော့လဲ", en: "when", img:"" },
        { romaji: "uta", jp: "うた", mm: "သီချင်း", en: "song", img:"" },
        { romaji: "uchi", jp: "うち", mm: "အိမ်", en: "home", img:"" },
        { romaji: "kutsu", jp: "くつ", mm: "ဖိနပ်", en: "shoe", img:"" },
        { romaji: "shita", jp: "した", mm: "အောက်", en: "under", img:"" },
        { romaji: "shichi", jp: "しち", mm: "ခုနှစ်", en: "seven", img:"" },
        { romaji: "soto", jp: "そと", mm: "အပြင်", en: "outside", img:"" },
    ]
    const selectedGoi = ref("")
</script>

<style lang="scss" scoped>
    .goi{
        @apply flex flex-col gap-4 items-center justify-center p-4;
        @apply md:mt-0;
        .goi-list{
            @apply grid grid-cols-2 gap-3 p-3 w-full;
            @apply md:grid-cols-5;
            .each-goi{
                @apply flex flex-col items-center bg-green-300 rounded p-3 cursor-pointer;
                img{
                    @apply max-w-full w-[129.5px] h-[129.5px];
                    @apply md:w-[198px] md:h-[198px];
                }
                .jp{
                    @apply text-3xl font-bold;
                }
                .others{
                    @apply flex mt-auto w-full;
                    .en{
                        @apply me-auto;
                    }
                    .mm{
                        @apply ms-auto;
                    }
                }
            }
            .each-goi.selected{
                @apply bg-orange-300 text-white;
            }
        }
    }
</style>