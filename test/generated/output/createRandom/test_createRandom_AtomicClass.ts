import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_createRandom_AtomicClass = _test_random(
    "AtomicClass",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<AtomicClass> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        return [
            (generator.boolean ?? $generator.boolean)(),
            $pick([
                () => false,
                () => (generator.boolean ?? $generator.boolean)(),
            ])(),
            $pick([
                () => (generator.boolean ?? $generator.boolean)(),
                () => (generator.boolean ?? $generator.boolean)(),
            ])(),
            (generator.number ?? $generator.number)(0, 100),
            $pick([
                () => 1,
                () => (generator.number ?? $generator.number)(0, 100),
            ])(),
            $pick([
                () => (generator.number ?? $generator.number)(0, 100),
                () => (generator.number ?? $generator.number)(0, 100),
            ])(),
            (generator.string ?? $generator.string)(),
            $pick([
                () => "characters",
                () => (generator.string ?? $generator.string)(),
            ])(),
            $pick([
                () => (generator.string ?? $generator.string)(),
                () => (generator.string ?? $generator.string)(),
            ])(),
        ];
    },
    (input: any): AtomicClass => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is AtomicClass => {
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            '[Boolean, (Boolean | false), (Boolean | boolean), Number, (1 | Number), (Number | number), String, ("characters" | String), (String | string)]',
                        value: input,
                    })) &&
                (input.length === 9 ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            '[Boolean, (Boolean | false), (Boolean | boolean), Number, (1 | Number), (Number | number), String, ("characters" | String), (String | string)]',
                        value: input,
                    })) &&
                ("boolean" === typeof input[0] ||
                    input[0] instanceof Boolean ||
                    $guard(true, {
                        path: _path + "[0]",
                        expected: "Boolean",
                        value: input[0],
                    })) &&
                ("boolean" === typeof input[1] ||
                    input[1] instanceof Boolean ||
                    $guard(true, {
                        path: _path + "[1]",
                        expected: "(Boolean | false)",
                        value: input[1],
                    })) &&
                (null !== input[2] ||
                    $guard(true, {
                        path: _path + "[2]",
                        expected: "(Boolean | boolean)",
                        value: input[2],
                    })) &&
                (undefined !== input[2] ||
                    $guard(true, {
                        path: _path + "[2]",
                        expected: "(Boolean | boolean)",
                        value: input[2],
                    })) &&
                ("boolean" === typeof input[2] ||
                    input[2] instanceof Boolean ||
                    $guard(true, {
                        path: _path + "[2]",
                        expected: "(Boolean | boolean)",
                        value: input[2],
                    })) &&
                ("number" === typeof input[3] ||
                    input[3] instanceof Number ||
                    $guard(true, {
                        path: _path + "[3]",
                        expected: "Number",
                        value: input[3],
                    })) &&
                ("number" === typeof input[4] ||
                    input[4] instanceof Number ||
                    $guard(true, {
                        path: _path + "[4]",
                        expected: "(1 | Number)",
                        value: input[4],
                    })) &&
                (null !== input[5] ||
                    $guard(true, {
                        path: _path + "[5]",
                        expected: "(Number | number)",
                        value: input[5],
                    })) &&
                (undefined !== input[5] ||
                    $guard(true, {
                        path: _path + "[5]",
                        expected: "(Number | number)",
                        value: input[5],
                    })) &&
                ("number" === typeof input[5] ||
                    input[5] instanceof Number ||
                    $guard(true, {
                        path: _path + "[5]",
                        expected: "(Number | number)",
                        value: input[5],
                    })) &&
                ("string" === typeof input[6] ||
                    input[6] instanceof String ||
                    $guard(true, {
                        path: _path + "[6]",
                        expected: "String",
                        value: input[6],
                    })) &&
                ("string" === typeof input[7] ||
                    input[7] instanceof String ||
                    $guard(true, {
                        path: _path + "[7]",
                        expected: '("characters" | String)',
                        value: input[7],
                    })) &&
                (null !== input[8] ||
                    $guard(true, {
                        path: _path + "[8]",
                        expected: "(String | string)",
                        value: input[8],
                    })) &&
                (undefined !== input[8] ||
                    $guard(true, {
                        path: _path + "[8]",
                        expected: "(String | string)",
                        value: input[8],
                    })) &&
                ("string" === typeof input[8] ||
                    input[8] instanceof String ||
                    $guard(true, {
                        path: _path + "[8]",
                        expected: "(String | string)",
                        value: input[8],
                    }))
            );
        })(input, "$input", true);
        return input;
    },
);
