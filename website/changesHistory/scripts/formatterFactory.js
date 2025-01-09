import { DateFormatter } from "./DateFormatter.js";
import { TimeFormatter } from "./TimeFormatter.js";
import { ReverseDateFormatter } from "./reverseDateFormatter.js";

export class FormatterFactory {
    static createFormatter(format) {
        switch (format) {
            case "date":
                return new DateFormatter();
            case "time":
                return new TimeFormatter();
            case "reverse-date":
                return new ReverseDateFormatter();
            default:
                throw new Error("Invalid format. Use 'date', 'time', or 'reverse-date'.");
        }
    }
}