<template>
    <div class="page-content container mx-auto">
        <div class="page-title">
            <h4><span class="text-3xl">J</span>apanese</h4>
            <h4>For</h4>
            <h3 class="kids">
                <span class="text-yellow-300">K</span>
                <span class="text-green-300">I</span>
                <span class="text-red-300">D</span>
                <span class="text-blue-300">S</span>
            </h3>
        </div>
        <div class="hiragana">
            <h3>ひらがな</h3>
            <table>
                <tr>
                    <td v-for="word in a_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in ka_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in sa_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in ta_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in na_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in ha_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in ma_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in ya_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in ra_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in wa_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td v-for="word in n_line" :key="word.romaji">
                        <span class="each-word">
                            <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                            <small class="romaji">{{ word.romaji }}</small>
                        </span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
    const a_line = [
        { romaji: "a", hiragana: "あ" },
        { romaji: "i", hiragana: "い" },
        { romaji: "u", hiragana: "う" },
        { romaji: "e", hiragana: "え" },
        { romaji: "o", hiragana: "お" },
    ]
    const ka_line = [
        { romaji: "ka", hiragana: "か" },
        { romaji: "ki", hiragana: "き" },
        { romaji: "ku", hiragana: "く" },
        { romaji: "ke", hiragana: "け" },
        { romaji: "ko", hiragana: "こ" },
    ]
    const sa_line = [
        { romaji: "sa", hiragana: "さ" },
        { romaji: "si", hiragana: "し" },
        { romaji: "su", hiragana: "す" },
        { romaji: "se", hiragana: "せ" },
        { romaji: "so", hiragana: "そ" },
    ]
    const ta_line = [
        { romaji: "ta", hiragana: "た" },
        { romaji: "chi", hiragana: "ち" },
        { romaji: "tu", hiragana: "つ" },
        { romaji: "te", hiragana: "て" },
        { romaji: "to", hiragana: "と" },
    ]
    const na_line = [
        { romaji: "na", hiragana: "な" },
        { romaji: "ni", hiragana: "に" },
        { romaji: "nu", hiragana: "ぬ" },
        { romaji: "ne", hiragana: "ね" },
        { romaji: "no", hiragana: "の" },
    ]
    const ha_line = [
        { romaji: "ha", hiragana: "は" },
        { romaji: "hi", hiragana: "ひ" },
        { romaji: "fu", hiragana: "ふ" },
        { romaji: "he", hiragana: "へ" },
        { romaji: "ho", hiragana: "ほ" },
    ]
    const ma_line = [
        { romaji: "ma", hiragana: "ま" },
        { romaji: "mi", hiragana: "み" },
        { romaji: "mu", hiragana: "む" },
        { romaji: "me", hiragana: "め" },
        { romaji: "mo", hiragana: "も" },
    ]
    const ya_line = [
        { romaji: "ya", hiragana: "や" },
        { romaji: "", hiragana: "" },
        { romaji: "yu", hiragana: "ゆ" },
        { romaji: "", hiragana: "" },
        { romaji: "yo", hiragana: "よ" },
    ]
    const ra_line = [
        { romaji: "ra", hiragana: "ら" },
        { romaji: "ri", hiragana: "り" },
        { romaji: "ru", hiragana: "る" },
        { romaji: "re", hiragana: "れ" },
        { romaji: "ro", hiragana: "ろ" },
    ]
    const wa_line = [
        { romaji: "wa", hiragana: "わ" },
        { romaji: "", hiragana: "" },
        { romaji: "", hiragana: "" },
        { romaji: "", hiragana: "" },
        { romaji: "wo", hiragana: "を" },
    ]
    const n_line = [
        { romaji: "n", hiragana: "ん" }
    ]
    const selectedWord = ref("")
</script>

<style lang="scss" scoped>
    .page-title{
        @apply flex items-baseline gap-2 p-3 justify-center border-b-[1px];
        h4{
            @apply text-blue-300;
        } 
    }
    .hiragana{
        @apply flex flex-col gap-4 items-center justify-center p-4;
        table{
            @apply rounded-lg bg-green-300 max-w-full;
            tr{
                td{
                    @apply px-3 py-2;
                    @apply md:px-9 md:py-4;
                    .each-word{
                        @apply flex flex-col items-center;
                        span.hiragana{
                            @apply text-3xl font-bold p-2 cursor-pointer;
                            @apply md:text-6xl;
                        }
                        span.hiragana.selected{
                            @apply text-orange-300 shadow;
                        }
                        small.romaji{
                        }
                    }
                }
            }
        }
    }
</style>