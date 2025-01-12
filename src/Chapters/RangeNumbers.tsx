import React, { FC } from "react";
import Code from "../Shared/Code";
import { Var } from "../Layout";
import { Anchor } from "../Shared/Links";

const code2 = `
interface Foo {
  age: number;
  name: string;
}

type Alias1 = Foo["age"]; // number
type Alias2 = Foo["name"]; // stirng
type Alias3 = Foo["age" | "name"]; // string | number

type Check = keyof Foo; // 'age'|'name
`;

const code3 = `
type Arr = [1, 2, 3];
type Val1 = Arr[0]; // 1
type Val2 = Arr[1]; // 2
type Val3 = Arr[0 | 1]; // 1|2
type Val4 = Arr[0 | 1 | 2]; // 3 | 1 | 1
type Val5 = Arr[number]; // 3 | 1 | 1
`;

const code4 = `type Assert<T, U extends T> = T extends U ? true : false;

type Values<T> = T[keyof T];

{
  type Test1 = Values<{ age: 42; name: "John" }>; //  42 | "John"
  type Test2 = Assert<Test1, "John" | 42>;
}

type LiteralDigits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type NumberString<T extends number> = \`${"${T}"}\`

{
  type Test1 = Assert<NumberString<6>, "6">; // true
  type Test2 = Assert<NumberString<42>, "42">; // true
  type Test3 = Assert<NumberString<6>, 6>; // false
  type Test4 = Assert<NumberString<6>, "6foo">; // false
}

type AppendDigit<T extends number | string> = \`${"${T}"}${"${LiteralDigits}"}\`

{
  type Test1 = Assert<
    AppendDigit<2>,
    "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29"
  >; // true
  type Test2 = Assert<
    AppendDigit<9>,
    "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99"
  >; // true
}

type MakeSet<T extends number> = {
  [P in T]: AppendDigit<P>;
};

{
  type Test1 = Assert<
    MakeSet<1>,
    {
      1: "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19";
    }
  >;

  type Test2 = Assert<
    MakeSet<1 | 2>,
    {
      1: "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19";
      2: "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29";
    }
  >;
}

type RemoveTrailingZero<
  T extends string
> = T extends \`${"${infer Fst}"}${"${infer Rest}"}\`
  ? Fst extends \`0\`
    ? RemoveTrailingZero<${`${"Rest"}`}>
    : \`${"${Fst}"}${"${Rest}"}\`
  : never;

{
  /**
   * Because nobody uses 01 | 02 ... | 0n
   * Everybody use 1 | 2 | 3 ... | n
   */
  type Test1 = Assert<RemoveTrailingZero<"01">, "1">;
  type Test2 = Assert<RemoveTrailingZero<"02" | "03">, "2" | "3">;
  type Test3 = Assert<RemoveTrailingZero<"002" | "003">, "2" | "3">;
}

type From_1_to_999 = RemoveTrailingZero<
  Values<
    {
      [P in Values<MakeSet<LiteralDigits>>]: AppendDigit<P>;
    }
  >
>;

type By<V extends NumberString<number>> = RemoveTrailingZero<
  Values<
    {
      [P in V]: AppendDigit<P>;
    }
  >
>;

/**
 * Did not use recursion here,
 * because my CPU will blow up
 */
type From_1_to_99999 =
  | From_1_to_999
  | By<From_1_to_999>
  | By<From_1_to_999 | By<From_1_to_999>>;

`;

const code5 = `
// https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range
type PrependNextNum<A extends Array<unknown>> = A["length"] extends infer T
  ? ((t: T, ...a: A) => void) extends (...x: infer X) => void
    ? X
    : never
  : never;

type EnumerateInternal<A extends Array<unknown>, N extends number> = {
  0: A;
  1: EnumerateInternal<PrependNextNum<A>, N>;
}[N extends A["length"] ? 0 : 1];

type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[]
  ? E
  : never;

// Up to 42 - meaning of the life
type Result = Enumerate<43>; // 0 | 1 | 2 | ... | 42
`;

const code6 = `
type MAXIMUM_ALLOWED_BOUNDARY = 999

type ComputeRange<
    N extends number,
    Result extends Array<unknown> = [],
    > =
    (Result['length'] extends N
        ? Result
        : ComputeRange<N, [...Result, Result['length']]>
    )

const ComputeRange = (N: number, Result: number[] = []): number[] => {
    if (Result.length === N) {
        return Result
    }
    return ComputeRange(N, [...Result, Result.length])
}
// 0 , 1, 2 ... 998
type NumberRange = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number]

// Pure js representation

const Mapped = (N: number, Result: number[] = []): number[] => {
    if (Result.length === N) {
        return Result
    }
    return Mapped(N, [...Result, Result.length])
}
`;

const code7 = `
type MAXIMUM_ALLOWED_BOUNDARY = 256

type ComputeRange<
    N extends number,
    Result extends Array<unknown> = [],
    > =
    (Result['length'] extends N
        ? Result
        : ComputeRange<N, [...Result, Result['length']]>
    )

type Octal = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number] // 0 - 255

type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type AlphaChanel =\`${"0.${ComputeRange<999>[number]}"}\` | '1.0'

type AssertAlpha<Alpha extends number> = \`${"${Alpha}"}\` extends AlphaChanel ? Alpha : never;

type RGBA<Alpha extends number = 1.0> = [Octal, Octal, Octal, AssertAlpha<Alpha>?]

const rgb: RGBA = [255, 67, 89] // ok
const rgb2: RGBA = [256, 67, 89] //error, 255 is out of range
const rgba: RGBA<0.25> = [245, 67, 34, 0.25] // ok
`;

const RangeNumbers: FC = () => (
  <>
    <p>
      Since TS 4.5,{" "}
      <Anchor
        href="https://github.com/microsoft/TypeScript/pull/45711"
        text="Tail recursion PR"
      />
      it is possible to make a range of <Var>numbers</Var> from 0 to 999.
    </p>
    <Code code={code6} />
    <p>
      We can use above pattern to create a standalone type for RGBa color
      format:
    </p>
    <Code code={code7} />
    <p>
      <Anchor text="Playground" href="tsplay.dev/mAvlkW" />
    </p>

    <p>
      Since TypeScript 4.8 it is possible to infer pure number from string. See{" "}
      <Anchor
        text="PR"
        href=" https://github.com/microsoft/TypeScript/pull/48094"
      />
    </p>
    <p>
      Let's take a look on <Var>type Values = T[keyof T]</Var> utility.
    </p>
    <p>Maybe you wonder, what does it mean ?</p>
    <p>
      Before we continue, please make sure you are aware of
      <Anchor
        href="https://www.typescriptlang.org/docs/handbook/advanced-types.html#distributive-conditional-typ"
        text="distributive types"
      />
    </p>
    <p>Let's start with simple example:</p>
    <Code code={code2} />
    <p>
      Our <Var>Values</Var> utility works perfect with objects, but not with
      arrays.
    </p>
    <p>
      To get all keys of object, we use - <Var>keyof</Var>.
    </p>
    <p>
      To get all array elements we use <Var>[number]</Var> because arrays have
      numeric keys.
    </p>
    <Code code={code3} />
    <p>Now, we can keep going. Let's define out utility types.</p>
    <p>For clarity, I will use simple Assert test type</p>
    <Code code={code4} />
    <p>
      If you still want to generate literal numbers instead of string numbers,
      you can use this code:
    </p>
    <Code code={code5} />
  </>
);

export default RangeNumbers;
