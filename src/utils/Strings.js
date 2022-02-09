export function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalize(string) {
    return string.split(" ").map(capitalizeWord).join(" ");
}