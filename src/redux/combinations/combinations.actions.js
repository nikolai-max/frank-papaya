export const pressedKeys = keys => ({
    type: 'PRESSEDKEYS',
    payload: keys
})

export const prompt = sentence => ({
    type: 'PROMPT',
    payload: sentence
})