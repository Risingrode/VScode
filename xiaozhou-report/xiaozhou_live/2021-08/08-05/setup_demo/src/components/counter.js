export default function(number){
    function increase(){
        number.value++
    }
    function decrease(){
        number.value--
    }
    return {
        increase,
        decrease
    }
}