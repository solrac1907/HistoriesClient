export const formatDate = (date) => {
    let year = date.getFullYear()
    let mounth = date.getMonth() + 1
    let day = date.getDate()
    mounth = mounth.toString().length === 1 ? `0${mounth}` : mounth
    day = day.toString().length === 1 ? `0${day}` : day
    let format = `${year}-${mounth}-${day}`
    return format
}