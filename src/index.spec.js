const { addNumbers, subtractNumbers, generateId, makeAjaxCall } = require(".");

describe("Test Suite", () => {
  describe("addNumbers", () => {
    test("adding 2 and 2 results to 4", () => {
      const result = addNumbers(2, 2);
      expect(result).toEqual(4);
    });
  });

  describe("subtractNumbers", () => {
    test("subtract two numbers ", () => {
      const result = subtractNumbers(2, 10);
      expect(result).toBe(-8);
    });
  });

  describe("makeAjaxCall", () => {
    const fetch = require("node-fetch");
    jest.mock("node-fetch", () => jest.fn());
    it("checks fetch mock test", async () => {
      const response = await Promise.resolve({
        ok: true,
        status: 200,
        json: () => {
          return { data: "the quick brown fox jumps over the lazy dog" };
        },
      });
      fetch.mockImplementation(() => response);
      makeAjaxCall()
        .then(function (data) {
          console.log("got data", data);
        })
        .catch((e) => {
          console.log(e.message);
        });
    });
  });

  describe("generateId", () => {
    test("it prefixes 'random-' to the argument passed", () => {
      const result = generateId("user001");
      expect(result).toBe("random-user001");
    });
  });
});
