const phrase1 = "СКИДКИ!!!"
const phrase2 = "БЫСТРЕЕ!!!"
let counter = 0
setInterval(_ => {
    if (counter) {
        document.title = phrase1
        counter = 0
    } else {
      document.title = phrase2
        counter = 1
    }
}, 500)