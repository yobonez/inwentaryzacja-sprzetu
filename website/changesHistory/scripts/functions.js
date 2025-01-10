import { FormatterFactory } from "./formatterFactory.js";

export function displayCurrentDate(format) {
    const formatter = FormatterFactory.createFormatter(format);
    const currentDate = new Date();
    return formatter.format(currentDate);
}

export function displayProvidedDate(date, format) {
    const formatter = FormatterFactory.createFormatter(format);
    const providedDate = new Date(date);
    return formatter.format(providedDate);
}

export function reverseDateFormat() {
    const formatter = FormatterFactory.createFormatter("reverse-date");
    const currentDate = new Date();
    return formatter.format(currentDate);
}