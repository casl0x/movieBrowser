export default function convertDate(date) {
    if (!date) {
        return '';
    }

    const splitDate = date.split('-')
    const formatedDate = `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}`

    return formatedDate;
}
