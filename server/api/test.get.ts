export default defineEventHandler(async(event) => {
    const { apiKey } = useRuntimeConfig()
    console.log("api key ", apiKey)
    return apiKey
})