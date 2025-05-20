{
  // mapped type
  const arrOfNum: number[] = [1, 3, 6];
  const arrOfStr: string[] = ["1", "3", "6"];

  const arrOfString: string[] = arrOfNum.map((number) => number.toString());

  console.log(arrOfString);

  type AreaNum = {
    height: number;
    width: number;
    dev: number;
  };
  type AreaStr = {
    height: string;
    width: string;
  };

  type AreaConvertedStr<T> = {
    [key in "height" | "width"]: string;
  };

  type AreaConvertedStr2<T> = {
    [key in keyof T]: T[key];
  };

  //

  type height = AreaNum["height"]; // look up type

  const area1: AreaConvertedStr2<{ height: string; width: number }> = {
    height: "1000",
    width: 100,
  };

  //
}
