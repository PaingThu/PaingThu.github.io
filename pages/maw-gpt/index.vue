<template>
    <div class="page-content maw-gpt container mx-auto py-4">
        <div class="title">
            <div class="maw-gpt-logo">
                <img :class="isLoading ? 'animate-bounce' : ''" src="/assets/images/pp.png" alt="" @click="clickImg">
                <h3>MAW-GPT</h3> 
            </div>
            <p class="p-3">Welcome to MAW-GPT. First, I would like to say thank you for visiting MAW-GPT. You can use MAW-GPT five times to search for text only, images only, or both.</p>
        </div>
        <div class="search-engin">
            <div class="ms-auto">
                <small v-if="sCount.count > 1"> You can ask more {{ sCount.count }} times.</small>
                <small v-if="sCount.count == 1"> This is the last time.</small>
                <small v-if="!sCount.count"> Thank you for your using MAW-GPT. </small>
            </div>
            <div class="each-input">
                <div class="checkbox">
                    <input type="checkbox" value = "1" v-model="withImage" >
                    <label for="">I will search with image.</label>
                </div>
                <input v-if="withImage" type="file" id="file" ref="file" @input="onChangeFileUpload"/>
                <textarea type="text" class="" v-model="question" placeholder="What do you want to know from this image."></textarea>
            </div>
            <button @click="getTextFromImg()" :disabled="limit <= 0" :class="sCount.count <= 0 ? 'disabled': ''">Execute</button>
            <span v-if="isLoading" class="animate-bounce">MAW is searching ....</span>
            <small class="text-red-400" v-if="error">{{ error }}</small>
            <div v-if="answer" class="answer">
                <span>{{ answer }}</span>
            </div>
        </div>

    </div>
</template>

<script setup>
    
    import { useBase64 } from '@vueuse/core'
    const clickImgCount = ref(0)
    const image = ref("")
    const withImage = ref(null)
    const question = ref("")
    const answer = ref("")
    const isLoading = ref(false)
    const error = ref("")
    const defaultQue = 'What is this image.'
    const limit = ref(5)

    const sCount = searchCount()

    const onChangeFileUpload = (e) => {
        const file = e.target.files[0]
        const {base64} = useBase64(file)
        console.log("File ", base64)
        image.value = base64
        console.log("Image ", image.value._value)
    }

    const getTextFromImg = async () => {
        if(sCount.value.count <= 0){
            return
        }
        answer.value = ""
        error.value = ""
        let payload = {}
        if(withImage.value){
            if(image.value){
                payload.image = image.value._value
            }else{
                error.value = "If you want to search with image, please upload image or uncheck 'I will search with image.'"
                return
            }
        }
        if(!question.value){
            error.value = "Please ask some question."
            return
        }else{
            console.log(question.value)
            payload.question = question.value
        }
        
        
        limit.value = sCount.value.count
        isLoading.value = true
        const responseData = await useFetch("/api/mawgpt/",{
            method: 'post',
            body: payload
        })
        console.log(responseData.status.value)
        isLoading.value = false
        if(responseData.status.value === "success"){
            sCount.value.count--
            answer.value = responseData.data
        }
        
    }

    const clickImg = () => {
        clickImgCount.value++
        console.log("clickImgCount ", clickImgCount.value)
        if(clickImgCount.value == 10){
            sCount.value.count = 5
            limit.value = sCount.value
            alert("Reset")
            clickImgCount.value = 0
        }
    }
    onMounted(() => {
        limit.value = sCount.value.count
    })
</script>

<style lang="scss" scoped>
    .maw-gpt{
        @apply flex flex-col gap-3;
        .title{
            @apply flex flex-col gap-2 items-center p-2 border-b-2 border-blue-300;
        }
        .search-engin{
            @apply flex flex-col gap-3 px-3;
            .checkbox{
                @apply flex gap-2;
            }
            .each-input{
                @apply flex flex-col gap-2;
            }
            input[type=file]{
                @apply block w-fit text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400;
            }
            button{
                @apply w-fit rounded bg-orange-300 p-3;
            }
            button[disabled]{
                @apply bg-gray-500 text-gray-400;
            }
            .answer{
                @apply border border-blue-300 rounded p-3;
            }
        }
    }
</style>