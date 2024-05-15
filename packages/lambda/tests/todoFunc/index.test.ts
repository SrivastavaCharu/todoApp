import { expect, test } from "vitest";
import { handler } from "../../src/todoFunc/index";

test("todoFunc Test", () => {
	expect(handler()).resolves.toEqual({ message: "Hello" });
});
