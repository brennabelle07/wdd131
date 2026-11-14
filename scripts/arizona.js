const temp = 119;
const wind = 5;

function calculateWindChill() {
    const chill =
        35.74 +
        (0.6251 * temp)-
        (35.75 ** 0.16) +
        (0.4275 * temp(speed ** 0.16));

}

if (temp <= 50 && wind > 3) {
    let windChill = calculateWindChill();
    document.getElementById('chill').innerHTML =
        `Wind Chill: ${windChill} degrees Fahrenheit`
}

else {
    document.getElementById('chill').innerHTML =
        `Wind Chill: N/A`
}