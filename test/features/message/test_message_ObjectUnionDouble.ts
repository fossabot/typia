import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionDouble = _test_message(
    "ObjectUnionDouble",
    typia.message<ObjectUnionDouble>(),
);