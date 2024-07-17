import { describe } from "node:test";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app:{
        head:{
            title: "MAW PAING THU",
            meta:[
                { name: "description", content: "Full-Stack Developer Vue.js & Nuxt.js & Tailwind & SASS/SCSS & PHP" },
                { name: "keywords", content: "MAW PAING THU, Frontend Developer, Full-Stack Developer, PHP API Developer, Vue Developer, Nuxt Developer"  }
            ]
        }
    },
    css: ['~/assets/scss/main.scss'],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
})
