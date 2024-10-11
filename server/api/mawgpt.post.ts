import OpenAI from 'openai';
export default defineEventHandler(async (event) => { 
    const body = await readBody(event)
    const config = useRuntimeConfig()
    const openai = new OpenAI({
        apiKey: config.apiKey
    })
    let contents:any= [ 
    ]
    if(body.question){
        contents.push({ type: 'text', text: body.question})
    }
    if(body.image){
        contents.push({ type: 'image_url', image_url: {url: body.image} })
    }

    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            {
                role: 'user',
                content: contents
            }
        ]
    })
    let retResult :any = response.choices[0].message.content
    let result = null
    if(retResult.includes("json")){
        result = JSON.parse(retResult.split('```')[1].replace("json", ""))
    }else{
        result = retResult
    }
    return result
})