
const formatDate = (isoString) => {
    const date = new Date(isoString)
    
    return date.toLocaleString("en-GB", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    })

}

export default formatDate

