import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createIs_DynamicSimple = _test_is(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createIs<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
