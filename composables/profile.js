
import { createGlobalState, useStorage } from '@vueuse/core'
export const userProfile = createGlobalState(() =>
    useStorage('vue-use-locale-storage', {
        name: ''
    })
)
export const userProfileWithoutPersitence = createGlobalState(() =>{
    const profile = ref({
        name: ''
    })
    return profile
})

export const searchCount = createGlobalState(() =>
    useStorage('searchCount', {
        count: 5
    })
)