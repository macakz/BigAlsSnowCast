
const getDayOfWeek = value => {
    const [dd, mm, yyyy] = value.split('/'),
        date = new Date(yyyy, mm - 1, dd)
    return date.toLocaleDateString('en-US', { weekday: 'long' })
}

export default getDayOfWeek