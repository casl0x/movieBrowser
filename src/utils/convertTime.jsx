export default function convertTime(runtime) {
    if (!runtime) {
        return '';
    }
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return <span>{hours} : {minutes}</span>;
}
