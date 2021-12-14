import { getObjectPropertyValueByKey } from "./_getObjectPropertyValueByKey";

describe("getObjectPropertyValueByKey", () => {
  it("should return value or undefined", () => {
    const obj = {
      prop1: "Lorem Ipsum",
      prop2: 2,
      prop3: {
        deepProp: 3,
      },
    };
    expect(getObjectPropertyValueByKey(obj, "prop1")).toEqual("Lorem Ipsum");
    expect(getObjectPropertyValueByKey(obj, "prop2")).toEqual(2);
    expect(JSON.stringify(getObjectPropertyValueByKey(obj, "prop3"))).toEqual(
      JSON.stringify({ deepProp: 3 })
    );
    expect(getObjectPropertyValueByKey(obj, "prop4")).toBeUndefined()
  });
});
