describe("filterNumbers", function () {
  it("should use arrow functions", function () {
    expect(filterNumbers.toString().includes("=>")).toBe(true);
  });
});

describe("returnFirstTwoDrivers", function () {
  it("should use arrow functions", function () {
    expect(returnFirstTwoDrivers.toString().includes("=>")).toBe(true);
  });
});

describe("person greet", () => {
  it("should greet should use arrow functions", function () {
    person.greet();
    expect(person.greet.toString().includes("=>")).toBe(true);
  });
});

describe("add", function () {
  it("should use default parameters", function () {
    expect(add.toString().includes("= 1")).toBe(true);
  });
});

describe("createGrid", function () {
  it("should use destructuring", function () {
    expect(createGrid.toString().includes("[width, height]")).toBe(true);
  });
});

describe("sum", function () {
  it("should use rest parameters", function () {
    expect(sum.toString().includes("...args")).toBe(true);
  });
});

describe("addNumbers", function () {
  it("should use spread operator", function () {
    expect(addNumbers.toString().includes("...numbers")).toBe(true);
  });
});

describe("calculate", function () {
  it("should use spread operator", function () {
    expect(calculate.toString().includes("...numbers")).toBe(true);
  });
});

describe("join", function () {
  it("should use spread operator", function () {
    expect(join.toString().includes("...array2")).toBe(true);
  });
});

describe("fileSummary", function () {
  it("should use template literals", function () {
    expect(fileSummary.toString().includes("`")).toBe(true);
  });
});

describe("addressMaker", function () {
  it("should use object literal shorthand", function () {
    expect(addressMaker.toString().includes("city, state")).toBe(true);
  });
});

describe("classes", function () {
  const ninja = new Ninja({ name: "Yoshi", weapon: "katana" });

  it("ninja should has a method", function () {
    expect(ninja.drinkSake).toBeDefined();
  });
});
