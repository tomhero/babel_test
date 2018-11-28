const hello = "Hello Babel!!"
const elSpinner = document.querySelector('#loading-icon')
const elTitle = document.querySelector('#title')

// setTimeout(() => callback, timeout);

function mySetTimeout (num) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), num)
    })
}

function simulateLoadingContent (num = 500) {
    try {
        if (num <= 100) {
            throw new Error('Too low num value')
        }

        return mySetTimeout(num)

        // elTitle.innerHTML = `BABEL async await @ ${num}ms`
        // console.log(`YaH!! wait for ${num} miliseconds`)

        // return 'success ja'
    } catch (error) {
        return `fail ja | reason : ${error}`
    }
}

simulateLoadingContent(2500)
    .then(() => console.log('success ja'))

// elSpinner.style.display = 'block'
// elTitle.innerHTML = `BABEL async await @ ${num}ms`
// elTitle.classList.remove('fade-in')
// elTitle.classList.add('scale-up-center')
// elSpinner.style.display = 'none'