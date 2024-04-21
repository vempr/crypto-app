const suffixes = ["", "K", "M", "B", "T"];

export function useFormatNumber(num: number, withCurrency = true) {
    let suffixNum = 0;
    while (num >= 1000) {
        num /= 1000;
        suffixNum++;
    }

    let sign = "";
    if (withCurrency) sign = "$";
    return `${sign}${num.toFixed(1)}${suffixes[suffixNum]}`;
}
