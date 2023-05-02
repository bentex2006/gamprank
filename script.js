
let a = [
    "Initialising SERVER FILE process...",
    "Connecting to your System...",
    "Request Failed",
    "Trying Again...",
    "Connecting to server 1...",
    "Connected Succesfully",
    " ",
    "System Entry as Admin",
    "Failed...",
    "Attempt Unsuccesfull",
    " ",
    "Another kali-lunix.exe tried...",
    "User file Hacked.......",
    "trying beta.exe",
    "Failed...!",
    "Failed...!",
    " ",
    "trying kota.exe",
    "Succes",
    "Succes",
    "Succes",
    " ",
    " ",
    "BEnTex-PC TO TRAGET-PC",
    "Connected Succesfully",
    "Connected Succesfully",
    "DATA TRANSFER ON GO.........",
    " ",
    "DATA transfered Succesfully",
    " ",  
    "HAVE A NICE DAY by MrBEnTEx#6720  :)", 
]



const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(true) }, seconds * 100)
    })
}
const showHack = async (message) => {
    await sleep(2)
    text.innerHTML = text.innerHTML + message + "<br>" 
}
(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i]);
    }
})()
