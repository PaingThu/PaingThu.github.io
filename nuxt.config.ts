import { describe } from "node:test";

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
            script:[{innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JHCZZRP');`}]
        }
    },
    css: ['~/assets/scss/main.scss'],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    modules: ['@vueuse/nuxt', "@nuxt/image"]
})