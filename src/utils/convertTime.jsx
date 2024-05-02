export function convertDate(date) {
    if (!date) {
        return '';
    }

    const splitDate = date.split('-')
    const formatedDate = `${splitDate[0]}`

    return formatedDate;
}

export function convertTime(runtime) {
    if (!runtime) {
        return '';
    }
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return <span>{hours}h {minutes}min</span>;
}
