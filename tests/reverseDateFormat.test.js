import { reverseDateFormat } from "../website/changesHistory/scripts/functions.js";
import { FormatterFactory } from "../website/changesHistory/scripts/formatterFactory.js";

jest.mock("../website/changesHistory/scripts/formatterFactory.js");

describe("reverseDateFormat function", () => {
    it("should return the reversed date format", () => {
        const mockFormatter = {
            format: jest.fn().mockReturnValue("2025-01-15"),
        };

        FormatterFactory.createFormatter = jest.fn().mockReturnValue(mockFormatter);

        const result = reverseDateFormat();

        expect(FormatterFactory.createFormatter).toHaveBeenCalledWith("reverse-date");

        expect(result).toBe("15-01-2025");
    });
});