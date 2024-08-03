export const SNS = {
    linkedin: `https://www.linkedin.com/in/mawpaingthu/`,
    github: `https://github.com/PaingThu`,
    teams: `https://teams.live.com/l/invite/FEAFnUA9gmLB_MC1AM`
}

export const VueUseSubNav = [
    { name: "codelab-vueuse", to: "/codelab/vueuse", label: "Core" },
    { name: "codelab-vueuse-add-ons", to: "/codelab/vueuse/add-ons", label: "Add-ons" },
    { name: "codelab-vueuse-sort-by", to: "/codelab/vueuse/sort-by", label: "Sort by" },
    { name: "codelab-vueuse-filters", to: "/codelab/vueuse/filters", label: "Filters" },
]


export const expYear: {[key: string]: number} = {
    nuxt: 1,
    vue: 3,
    sass: 3,
    tailwind: 2,
    vueuse: 1.5,
    javascript: 10,
    typescript: 2,
    bootstrap: 4,
    laravel: 1,
    php: 3,
    slim: 2,
    mysql: 5,
    composer: 2,
    aws: 3,
    postgresql: 1
}

export const getExperienceInfo = (sub: string) => {
    const year = expYear[sub] > 1 ? 'years' : 'year'
    return `${expYear[sub]} ${year} of experience`
}