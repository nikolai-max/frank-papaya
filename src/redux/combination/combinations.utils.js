export const addPressedKey = (keyPressed, addPressedKey) => {
    keyPressed.push(addPressedKey)
    keyPressed.splice(-4, keyPressed.length - 3)


    console.log(`Keypressed ${keyPressed}`)
    console.log(`Keypressed ${typeof(keyPressed)}`)
    
}