import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_union_double =
    _test_assert_clone(
        "double union object",
        ObjectUnionDouble.generate,
        TSON.createAssertClone<ObjectUnionDouble>(),
        ObjectUnionDouble.SPOILERS,
    );
