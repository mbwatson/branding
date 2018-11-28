export const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.value = text
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
}

export const copyText = (e) => {
    e.preventDefault()
    const text = e.target.innerText
    copyToClipboard(text)
    console.log(`'${text}' copied`)
}

