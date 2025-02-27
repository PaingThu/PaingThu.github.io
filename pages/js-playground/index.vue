<script setup>
    const js_code = ref("")
    const iframe_src = ref("")
    const runCode = () => {
        try {
            console.log(js_code.value)
            const modifiedConsole = `try{
                ${js_code.value}
            }catch(error){
                console.errorlog("An error occurred: ", error.message)
            }`
            const wrappedCode = `
                <script>
                    try {
                        (function() {
                            const objectToString = (obj) => {
                                const entries = Object.entries(obj).map(([key, value]) => {
                                    const formattedValue = typeof value === 'object' && !Array.isArray(value) ? objectToString(value) : JSON.stringify(value);
                                    return key + ":" + formattedValue
                                });
                                return "{"+entries.join(', ')+"}"
                            }
                            const originalLog = console.log;
                            let logOutput = ""
                            console.log = (...args) => {
                                originalLog.apply(console, args)
                                logOutput += "<span>"
                                args.map(a => {
                                    logOutput += typeof(a) == "object" ? objectToString(a) : a;
                                })
                                logOutput += "</span>"
                                originalLog.apply(console, [...args])
                                const logElement = document.getElementById('log');
                                logElement.innerHTML = logOutput
                            }
                            let errorOutput = ""
                            console.errorlog = (...args) => {
                                originalLog.apply(console, args)
                                errorOutput += "<span>"
                                args.map(a => {
                                    errorOutput += typeof(a) == "object" ? objectToString(a) : a;
                                })
                                errorOutput += "</span>"
                                originalLog.apply(console, [...args])
                                const errorElement = document.getElementById('error');
                                errorElement.innerHTML = errorOutput
                            }
                            document.body.innerHTML += '<pre id="log" style="display:flex; flex-direction: column; gap:1rem; "></pre>';
                            document.body.innerHTML += '<pre id="error" style="display:flex; flex-direction: column; gap:1rem; color: red;"></pre>';
                            ${modifiedConsole}
                        })();
                    } catch (error) {
                        document.body.innerHTML += '<small style="color: red;" id="consoleErrorMsg"></small>'
                        const logElement = document.getElementById('consoleErrorMsg');
                        logElement.textContent = error
                    }
                <\/script>
            `;
            iframe_src.value = `<html><body>${wrappedCode}</body></html>`
        } catch (error) {
            iframe_src.value = `<html><body><small>${error}</small></body></html>`
        }
    }
</script>
<template>
    <div class="page-content js-playground">
        <h5>Welcome to Maw's Javascript Playground!</h5>
        <div class="jsp-wrapper">
            <div class="jsp-editor">
                <button class="run-btn" @click="runCode">Run</button>
                <textarea placeholder="Write your js code here!" v-model="js_code"></textarea>
            </div>
            <div class="console">
                <span class="c-title">Console</span>
                <iframe :srcdoc="iframe_src"></iframe>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .js-playground{
        @apply container mx-auto p-3 flex flex-col gap-2;
        .jsp-wrapper{
            @apply flex flex-col gap-2;
            .jsp-editor{
                @apply flex flex-col gap-2;
                .run-btn {
                    @apply me-auto border px-2 rounded bg-orange-400 text-white;
                }

                textarea{
                    @apply w-full h-[40vh] border p-3;
                }
            }
            .console{
                @apply flex flex-col gap-2 border p-2;
                .c-title{

                }
                iframe{
                    @apply w-full h-[20vh];
                }
            }
        }
    }
</style>