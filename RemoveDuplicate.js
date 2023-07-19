// How would you remove duplicate members from an array without Set?
// we cann use indexOf method and the filter methos
const removeDuplicate = () => {
    let array = ['a', 'd', 'a', 'v', 'a', 'd', 'a', 'v']
    let results = array.filter((element, index) => {
        return array.indexOf(element) === index

    })
    return results
}
console.log(removeDuplicate());
