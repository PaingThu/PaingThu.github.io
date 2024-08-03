<template>
    <div class="page-content cl vueuse">
        <h3>Tailwind CSS Codelab</h3>
        <div class="core-functions">
            <details class="cf group">
                <summary class="cf-title">
                    <h5>
                        Collapse
                    </h5>
                    <div class="s-status">
                        <div class="s-arrow group-open:-rotate-90 group-open:mt-2">

                        </div>
                    </div>
                </summary>
                <div class="d-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ipsa consequatur nisi vel! Animi cum exercitationem distinctio provident vero sunt harum! Provident doloribus dolore aliquid, commodi dolorem illum nobis nihil.
                </div>
            </details>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .vueuse{
        @apply flex flex-col gap-4;
        h3{
            @apply p-4 self-center;
        }
        .core-functions{
            .cf{
                .cf-title{

                }
                .cf-content{
                    
                }
            }
        }
    }
</style>