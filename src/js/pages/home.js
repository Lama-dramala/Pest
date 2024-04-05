const initMapToggler = () => {
    const toggler = document.getElementById("pest-franchising-toggler")
    
    // Возможно стоит заменить на массив элементов, чтобы сократить запись
    const tab1 = document.getElementById("pest-franchising-tab1")
    const tab2 = document.getElementById("pest-franchising-tab2")
    const map1 = document.getElementById("pest-franchising-map1")
    const map2 = document.getElementById("pest-franchising-map2")

    function toggleMap() {
        tab1 && tab1.classList.toggle("active")
        tab2 && tab2.classList.toggle("active")
        map1 && map1.classList.toggle("active")
        map2 && map2.classList.toggle("active")
    }

    toggler && toggler.addEventListener("click", toggleMap)
} 

export const initHome = () => {
    
    initMapToggler()

}