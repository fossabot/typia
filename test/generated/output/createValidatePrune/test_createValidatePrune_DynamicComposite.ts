import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_createValidatePrune_DynamicComposite = _test_validatePrune(
    "DynamicComposite",
    DynamicComposite.generate,
    (input: any): typia.IValidation<DynamicComposite> => {
        const validate = (input: any): typia.IValidation<DynamicComposite> => {
            const errors = [] as any[];
            const $report = (typia.createValidatePrune as any).report(errors);
            const $join = (typia.createValidatePrune as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is DynamicComposite => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    if (RegExp(/^-?\d+\.?\d*$/).test(key))
                                        return (
                                            ("number" === typeof value &&
                                                Number.isFinite(value)) ||
                                            $report(_exceptionable, {
                                                path: _path + $join(key),
                                                expected: "number",
                                                value: value,
                                            })
                                        );
                                    if (RegExp(/^(prefix_(.*))/).test(key))
                                        return (
                                            "string" === typeof value ||
                                            $report(_exceptionable, {
                                                path: _path + $join(key),
                                                expected: "string",
                                                value: value,
                                            })
                                        );
                                    if (RegExp(/((.*)_postfix)$/).test(key))
                                        return (
                                            "string" === typeof value ||
                                            $report(_exceptionable, {
                                                path: _path + $join(key),
                                                expected: "string",
                                                value: value,
                                            })
                                        );
                                    if (
                                        RegExp(/^(value_-?\d+\.?\d*)$/).test(
                                            key,
                                        )
                                    )
                                        return (
                                            "string" === typeof value ||
                                            ("number" === typeof value &&
                                                Number.isFinite(value)) ||
                                            "boolean" === typeof value ||
                                            $report(_exceptionable, {
                                                path: _path + $join(key),
                                                expected:
                                                    "(boolean | number | string)",
                                                value: value,
                                            })
                                        );
                                    if (
                                        RegExp(
                                            /^(between_(.*)_and_-?\d+\.?\d*)$/,
                                        ).test(key)
                                    )
                                        return (
                                            "boolean" === typeof value ||
                                            $report(_exceptionable, {
                                                path: _path + $join(key),
                                                expected: "boolean",
                                                value: value,
                                            })
                                        );
                                    return true;
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<DynamicComposite>",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<DynamicComposite>",
                        value: input,
                    })
                );
            })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const prune = (input: DynamicComposite): void => {
            const $join = (typia.createValidatePrune as any).join;
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "name" === key ||
                        RegExp(/^-?\d+\.?\d*$/).test(key) ||
                        RegExp(/^(prefix_(.*))/).test(key) ||
                        RegExp(/((.*)_postfix)$/).test(key) ||
                        RegExp(/^(value_-?\d+\.?\d*)$/).test(key) ||
                        RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    },
    DynamicComposite.SPOILERS,
);
