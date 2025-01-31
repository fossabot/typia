import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_createAssertClone_ToJsonNull = _test_assertClone(
    "ToJsonNull",
    ToJsonNull.generate,
    (input: any): typia.Primitive<ToJsonNull> => {
        const assert = (input: any): ToJsonNull => {
            const $guard = (typia.createAssertClone as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ToJsonNull => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "function" === typeof input.toJSON ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    });
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ToJsonNull>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (input: ToJsonNull): typia.Primitive<ToJsonNull> => {
            return "object" === typeof input &&
                null !== input &&
                "function" === typeof input.toJSON
                ? (input.toJSON() as any)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
);
