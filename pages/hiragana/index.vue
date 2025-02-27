<template>
    <div class="page-content flex-auto">
        <div class="learn-hiragana">
            <TitleBar>
                <template #title>
                    ひらがな
                </template>
                <template #levels>
                    <button @click="selectedLevel=1" :class="selectedLevel==1 ? 'current-level' : ''">1</button>
                    <button @click="selectedLevel=2" :class="selectedLevel==2 ? 'current-level' : ''">2</button>
                </template>
            </TitleBar>
            <table>
                <tbody>

                    <tr>
                        <td v-for="word in a_line" :key="word.romaji">
                            <span class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in ka_line" :key="word.romaji">
                            <span class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in sa_line" :key="word.romaji">
                            <span class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in ta_line" :key="word.romaji">
                            <span class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in na_line" :key="word.romaji">
                            <span class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in ha_line" :key="word.romaji">
                            <span class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in ma_line" :key="word.romaji">
                            <span class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in ya_line" :key="word.romaji">
                            <span v-if="word.hiragana" class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in ra_line" :key="word.romaji">
                            <span class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in wa_line" :key="word.romaji">
                            <span v-if="word.hiragana" class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="word in n_line" :key="word.romaji">
                            <span class="each-word">
                                <span class="hiragana" :class="selectedWord==word.romaji?'selected':''" @click="selectedWord=word.romaji">{{ word.hiragana }}</span>
                                <small v-if="selectedLevel == 1" class="romaji">{{ word.romaji }}</small>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="learn-others">

        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Japanese For KIDS: HIRAGANA',
        meta: [
            { name: 'description', content: 'Japanese For KIDS: HIRAGANA' }
        ],
    })
    const selectedWord = ref("")
    const selectedLevel = ref(1)
    definePageMeta({
        layout: 'classroom'
    })
</script>

<style lang="scss" scoped>
    .learn-hiragana{
        @apply flex flex-col gap-4 items-center justify-center p-4;
        table{
            @apply rounded-lg bg-green-300 max-w-full my-3;
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
    .learn-others{
        @apply p-4;
    }
</style>