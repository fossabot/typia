import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_createAssertStringify_ToJsonAtomicUnion =
    _test_assertStringify(
        "ToJsonAtomicUnion",
        ToJsonAtomicUnion.generate,
        (input: any): string => {
            const assert = (input: any): ToJsonAtomicUnion => {
                const $guard = (typia.createAssertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonAtomicUnion => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        true ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "Array<Resolve<ToJsonAtomicUnion.IToJson>>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "Resolve<ToJsonAtomicUnion.IToJson>",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: ToJsonAtomicUnion): string => {
                const $string = (typia.createAssertStringify as any).string;
                const $number = (typia.createAssertStringify as any).number;
                const $throws = (typia.createAssertStringify as any).throws;
                return `[${input
                    .map((elem: any) =>
                        null !== elem.toJSON()
                            ? (() => {
                                  if ("string" === typeof elem.toJSON())
                                      return $string(elem.toJSON());
                                  if ("number" === typeof elem.toJSON())
                                      return $number(elem.toJSON());
                                  if ("boolean" === typeof elem.toJSON())
                                      return elem.toJSON();
                                  $throws({
                                      expected:
                                          "(boolean | null | number | string)",
                                      value: elem.toJSON(),
                                  });
                              })()
                            : "null",
                    )
                    .join(",")}]`;
            };
            return stringify(assert(input));
        },
    );
