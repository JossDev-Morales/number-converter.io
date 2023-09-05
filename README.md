# **Number-converter.io** [!['npm link'][npm-img]][npm-link]  !['downloads'][downloads]  [!['license'][license-img]][license-link]  [![Build Status](https://img.shields.io/travis/com/JossDev-Morales/Number-converter.io?style=for-the-badge&color=0ed35c&logo=travis&label=BUILD%20%26%20TESTS)](https://app.travis-ci.com/github/JossDev-Morales/Number-converter.io?serverType=git)

[!['repository'][git-img]][git-link] [!['discord'][discord-img]][discord-link]

[npm-img]: https://img.shields.io/badge/npm-v1.0.0-%23cb0000?style=for-the-badge&logo=npm
[npm-link]: https://www.npmjs.com/package/number-converter.io
[downloads]:https://img.shields.io/npm/dt/bignumber.io?style=for-the-badge&logo=npm&color=%23cb0000
[license-link]:''
[license-img]:https://img.shields.io/github/license/JossDev-Morales/Number-converter.io?style=for-the-badge
[git-img]:https://img.shields.io/badge/Git--hub-161b22?logo=github&style=social
[git-link]:https://github.com/JossDev-Morales/Number-converter.io
[discord-img]:https://img.shields.io/badge/Discord-313338?logo=discord&style=social
[discord-link]:https://discord.com/users/564970023479934977
## Description

[Converter](https://www.npmjs.com/package/num-conv-test) of decimal and integer numbers in different bases such as octal, binary, hexadecimal and decimal and bases 
between 2 and 36 to other number bases, can convert large numbers with decimal format `ints`.` decimals` and large negative numbers, the decimal numbers in other bases will become the same decimal format, that is `ints`.`decimals` on another base, the same with negative numbers using a negative sign for negative numbers, in the positive numbers the sign is eliminated, binary example: `-1010.0101` which results in a decimal base` -10.5`.

## Quick start

The main tool you will use is the `Converter` class, which as its own name says, is the converter.

Here you will see how to start working with the class as soon as possible, later each part of this class will be explained and its operation, said that, let's see the code.

```js
    /* Initializes the "converter" class with the representation of a number on some base and, if possible, indicate the base, otherwise the base will be inferred */

    //number with base
    const numberA = new converter('-1010.0101','2')
    const compoA = numberA.composition // { base: '2', sign: '-', number: { ints: '1010', decimals: '0101' } }
    const toDecimalA = numberA.toDecimal() // -10.5
    // number without base
    const numberB = new converter('-0b0101.0101')
    const compoB = numberB.composition // { base: '2', sign: '-', number: { ints: '0101', decimals: '0101' } }
    const toDecimalB = numberB.toDecimal() // -5.5
```
This converter works internally with two tools that convert numbers between different bases.

- `baseToDecimal`- Converts from any base between `2` and` 36` to decimal or base `10`
- `decimalToBase`- Converts from decimal or base `10` to any other base between `2` and `36`

This allows you to convert from any base to any base, mixing both tools.

## Usage

To use the class you must initialize it using the constructor and the reserved word `new`

```js
    const largeNumber = new converter('0b011101011101010111010110101','2')
```
### Constructor

**parameters**
- `number` A number representation in some numeric base, under the [rules for the bases](https://github.com/JossDev-Morales/Number-converter.io/blob/main/README.md#number-base-rules)
- `base` A numeric base betwen 2 and 36

**What returns**
The instance of the `converter` class, that is to say the constructed object.

### Methods

This `converter` actually has 5 methods and a property called 'composition' that have all the properties of the number you passed in the constructor.

#### toBinary

This method converts the number of the `convert` to a binary base

**what returns**
The number as a `String` in binary base

#### toOctal

This method converts the number of the `convert` to an octal base

**what return**
The number as a `String` in octal base

#### toDecimal

This method converts the number of the `convert` to a decimal base

**what returns**
The number as a `String` in decimal base

#### toHexadecimal

This method converts the number of the `convert` to a hexadecimal base

**what returns**
The number as a `String` in hexadecimal base

#### toCustomBase

This method converts the number of the `convert` to a custom base, under the [rules for the bases](https://github.com/JossDev-Morales/Number-converter.io/blob/main/README.md#number-base-rules)

**parameters**
- `base` **String** The custom base to convert

**what returns**
The number as a `String` in a custom base

### Static Methods

This class only has a static method named `fromCustomToCustom`

This static method is used to convert a number into an arbitrary base between `2` and` 36` to another arbitrary base between `2` and` 36`, under the [rules for the bases](https://github.com/JossDev-Morales/Number-converter.io/blob/main/README.md#number-base-rules)

**parameters**
- `from` **Objetc** whit `number` like a **String** and `base` like a **String** where `number` is the number representation and `base` is the base of the number representation, unde the [rules for the bases](https://github.com/JossDev-Morales/Number-converter.io/blob/main/README.md#number-base-rules)
- `to` **String** It is the base that will be used for the conversion, under the [rules for the bases](https://github.com/JossDev-Morales/Number-converter.io/blob/main/README.md#number-base-rules)

**what returns**
The number as `string` in the custom base

### Extra Tools

**Bases alternative rules**
This extra tool allows you to convert from a base to Decimal, the base is not strictly related to the bases rules specified below, this means that it does not have the prohibitions of the rules, but it does not enjoy its privileges either, in other words, You need to pass a number between 2 and 36 in 'string' format or in 'number' format, this is strictly required for the conversion, in the same way, the base cannot be inferred with some mark of the type "0b" for binary and you cannot pass one in the number either, this number must be free of non-numeric characters, that is, characters that are equal to NaN such as "." or "-", except for the alphabetic characters between "A" and "Z" corresponding to the numerical base, that is, for a base of 11 only the character "A" is allowed, for a base of 16, characters are allowed in the range of "A" and "F", otherwise the conversion will break, because it will not be able to get a value corresponding to the letter with the given base.

#### baseToDecimal

This tool works directly under the alternative base rules, since it dynamically receives a base, to convert a number to decimal, the base in which this number was created is needed, in order to convert it correctly, let's go to its behavior specific.

This tool converts digit by digit to its equivalent in decimal, it uses a conversion algorithm where if the digit is NaN (this also contemplates characters like "." and "-", for this reason they should not be used and only pass the string of characters which represents the absolute number), it will be converted to its respective value, starting with "A" at 10 and "z" at 35 (the algorithm will convert all letters to a numerical representation regardless of the base, that is, if the base is 16 but you use a z, the algorithm will convert z to 35 but will do the following operations with the power of 16 not 35 so the value of z won't be properly converted to decimal.), and multiply by the result of the base to a power equivalent to the position of the digit and the results of all the digits will be added, in other words if the first digit is A and the second B and the base is 16, the result would be:
((B=11)x(16^⁰=0)=11)+((A=10)x(16^¹=16)=160)=`171`

**parameters**
- `number` **String** The number representation without "." and sign
- `radix` **String** The base of the number representation

**What returns**
The number representation as a `String` in a decimal base or base `10`

#### decimalToBase

This tool is simpler than its `baseToDecimal` counterpart, since it is usually easier to work with decimal numbers and it is easier to find a number in decimal format than in another base, you will only have to pass the decimal number, without NaN characters, since these are not converted and will result in an error, you will also have to pass the base to which you want to convert the decimal number and you will get the representation of the number in the base you used.

**parameters**
- `decimal` **String** The number representation without NaN characters
- `radix` **String** The base to convert, betwen 2 and 36

**What returns**
The number representation as a `String` in a custom base betwen 2 and 36

### Number base rules

The numerical bases in this library generally work based on the same behavior, these bases in some cases can be of undefined type and it will try to identify the base with a mark that should be in the number, in addition to this, there are certain behaviors around of the numerical bases, let's see it.

Let's first see some things before starting to see the behavior of the number bases.

**most popular number bases**
- `2` or `binary`
- `8` or `octal`
- `10` or `decimal`
- `16` or `hexadecimal`

**allwoed bases**
The allowed number bases go from base 2 to base 36, from base 9, that is, base 10, each number will have an alphabetic representation, where 10 is A and 35 is Z

**nicknames for popular bases**
Popular bases have a nickname:
- `binary`
- `octal`
- `decimal`
- `hexadecimal`

**marks**
Popular bases have specific markings that identify the base directly in the number:
- the mark of the base  `2` is `0b` or `0B`
- the mark of the base  `8` is `0o` or `0O`
- the mark of the base  `10` is `0d` or `0D`
- ethe mark of the base  `16` is `0x` or `0X`

- If you pass a number but not the base corresponding to this number: 
    - it will try to identify the base of the number, with a unique mark for the most popular bases
    - If there is no unique mark on the number, you will receive an error specifying that you must use a mark
    - If you pass an invalid mark, you will receive an error specifying the valid marks and your invalid mark.
- If you pass a number and its corresponding base:
    - You can use a nickname for the base
    - If the base does not correspond to a popular base nickname or a number between 2 and 36, you will receive an error
    - If you use a mark that does not correspond to the base, you will receive an error specifying it
    - If any anomaly is identified in the number, that is, it does not seem to be a number that corresponds to its base
        - If a binary base is identified and contains characters other than 0 or 1, you will receive an error specifying it
        - If it is identified that the base is less than 11 and has alphabetical characters, you will receive a specific error
        - If it is identified that the base is greater than 10 and some weird characters are found, you will recive an error 
        - If it is identified that the number has greater characters than those of its base, you will receive an error, for example base 8 and a number with 9 as 19000 or 8 as 18 since base 8 ranges from 0 to 7.

It cannot be differentiated between some numbers in different bases, for example an octal number and decimal numbers with digits less than 7 or binary that resemble octal or decimal numbers with 0 and 1 such as 101 or 1000, so it is important to specify the base and not leave it to ambiguity.

## Bignumber.io
If you want a fast and full npm or git package to handle big numbers in decimal or integer type for javascript, [`bignumber.io`](https://www.npmjs.com/package/bignumber.io) its your best option, this tool have `number-converter.io` integrated, so check the documentation [**here.**](https://github.com/JossDev-Morales/Number-converter.io#readme)

## License

**Number-converter.io** is [**MIT** licensed](https://github.com/JossDev-Morales/Number-converter.io/blob/main/LICENSE)