// Handler (обработчик), listener (слушатель), subscriber (подисчик) =>
// Function
// Событие => вызывает обработчик (слушатель, подписчик) => function()
// Объект event (ev, e) => сведение о произошедшем событии => function(e)


function onClickHandler1(xxxl) {  // onClickHandler({.....})
    xxxl.stopPropagation()
    alert("yo")
}

function onClickHandler2(e) {  // onClickHandler({.....})
    e.stopPropagation()
    console.log("yo")
}

function onClickHandler3(e) {  // onClickHandler({.....})
    e.stopPropagation()
    console.log("hey")


    const sm = document.getElementById("small")
    const md = document.getElementById("medium")
    const bg = document.getElementById("big")
    sm.onclick = () => alert("too")
    sm.onclick = onClickHandler2


    const listener = () => alert("too")


    sm.addEventListener("click", listener) // #345
    sm.addEventListener("click", onClickHandler2)
    sm.addEventListener("click", listener) // #456
    md.addEventListener("click", onClickHandler1) // #456
    bg.addEventListener("click", onClickHandler3)
}

const a = document.getElementById("a")

e.addEventListener("click", (e) =>

// {} === {}