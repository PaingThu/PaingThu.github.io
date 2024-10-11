import { describe } from "node:test";
const { API_KEY } = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app:{
        head:{
            title: "MAW PAING THU",
            meta:[
                { 
                    name: "description", 
                    content: "I’m a passionate Full Stack developer with expertise in Vue.js, Nuxt.js, and PHP API development. Let’s connect and create something remarkable together! Feel free to reach out—I’m always up for a coding adventure." 
                },
                { 
                    name: "keywords", 
                    content: "MAW PAING THU, Frontend Developer, Full-Stack Developer, PHP API Developer, Vue Developer, Nuxt Developer"  
                }
            ],
        }
    },
    css: ['~/assets/scss/main.scss'],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    modules: ['@vueuse/nuxt', "@nuxt/image", 'nuxt-gtag'],

    gtag: {
        id: process.env.GTAG_ID
    },
    runtimeConfig: {
        apiKey: process.env.API_KEY,
    },
    routeRules: {
        "/server/api/**": { cache: false, swr: false }
    },
})