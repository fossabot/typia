const individual = (input) => {
    const $guard = throwable("TSON.assertType()");
    const $every = TSON.createAssertType.every;
    const $join = TSON.createAssertType.join;
    const error = ((
        input: ObjectHierarchical,
        path: string,
        exceptionable: boolean,
    ) => {
        const $ao = [
            (input: ObjectHierarchical.ICustomer, path: string, exceptionable: boolean) =>
                ("number" === typeof input.id
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".id",
                          expected: "number",
                          value: input.id,
                      })) ||
                ("object" === typeof input.channel && null !== input.channel
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".channel",
                          expected: "Resolve<ObjectHierarchical.IChannel>",
                          value: input.channel,
                      })) ||
                $ao[1](
                    input.channel,
                    path + ".channel",
                    true && exceptionable,
                ) ||
                ((null === input.member
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".member",
                          expected:
                              "(Resolve<ObjectHierarchical.IMember> | null)",
                          value: input.member,
                      })) &&
                    (("object" === typeof input.member && null !== input.member
                        ? true
                        : $guard(exceptionable, {
                              path: path + ".member",
                              expected:
                                  "(Resolve<ObjectHierarchical.IMember> | null)",
                              value: input.member,
                          })) ||
                        $ao[3](
                            input.member!,
                            path + ".member",
                            true && exceptionable,
                        ))) ||
                ((null === input.account
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".account",
                          expected:
                              "(Resolve<ObjectHierarchical.IAccount> | null)",
                          value: input.account,
                      }))) &&
                    (("object" === typeof input.account &&
                    null !== input.account
                        ? true
                        : $guard(exceptionable, {
                              path: path + ".account",
                              expected:
                                  "(Resolve<ObjectHierarchical.IAccount> | null)",
                              value: input.account,
                          })) ||
                        $ao[4](
                            input.account!,
                            path + ".account",
                            true && exceptionable,
                        )) ||
                ("string" === typeof input.href
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".href",
                          expected: "string",
                          value: input.href,
                      })) ||
                ("string" === typeof input.referrer
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".referrer",
                          expected: "string",
                          value: input.referrer,
                      })) ||
                (Array.isArray(input.ip)
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".ip",
                          expected: "[number, number, number, number]",
                          value: input.ip,
                      })) ||
                (input.ip.length === 4
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".ip",
                          expected: "[number, number, number, number]",
                          value: input.ip,
                      })) ||
                ("number" === typeof input.ip[0]
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".ip[0]",
                          expected: "number",
                          value: input.ip[0],
                      })) ||
                ("number" === typeof input.ip[1]
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".ip[1]",
                          expected: "number",
                          value: input.ip[1],
                      })) ||
                ("number" === typeof input.ip[2]
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".ip[2]",
                          expected: "number",
                          value: input.ip[2],
                      })) ||
                ("number" === typeof input.ip[3]
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".ip[3]",
                          expected: "number",
                          value: input.ip[3],
                      })) ||
                ("object" === typeof input.created_at &&
                null !== input.created_at
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".created_at",
                          expected: "Resolve<ObjectHierarchical.ITimestamp>",
                          value: input.created_at,
                      })) ||
                $ao[2](
                    input.created_at,
                    path + ".created_at",
                    true && exceptionable,
                ),
            (input: ObjectHierarchical.IChannel, path: string, exceptionable: boolean) =>
                ("number" === typeof input.id
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".id",
                          expected: "number",
                          value: input.id,
                      })) ||
                ("string" === typeof input.code
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".code",
                          expected: "string",
                          value: input.code,
                      })) ||
                ("string" === typeof input.name
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".name",
                          expected: "string",
                          value: input.name,
                      })) ||
                ("number" === typeof input.sequence
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".sequence",
                          expected: "number",
                          value: input.sequence,
                      })) ||
                ("boolean" === typeof input.exclusive
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".exclusive",
                          expected: "boolean",
                          value: input.exclusive,
                      })) ||
                ("number" === typeof input.priority
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".priority",
                          expected: "number",
                          value: input.priority,
                      })) ||
                ("object" === typeof input.created_at &&
                null !== input.created_at
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".created_at",
                          expected: "Resolve<ObjectHierarchical.ITimestamp>",
                          value: input.created_at,
                      })) ||
                $ao[2](
                    input.created_at,
                    path + ".created_at",
                    true && exceptionable,
                ),
            (input: ObjectHierarchical.ITimestamp, path: string, exceptionable: boolean) =>
                ("number" === typeof input.time
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".time",
                          expected: "number",
                          value: input.time,
                      })) ||
                ("number" === typeof input.zone
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".zone",
                          expected: "number",
                          value: input.zone,
                      })),
            (input: ObjectHierarchical.IMember, path: string, exceptionable: boolean) =>
                ("number" === typeof input.id
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".id",
                          expected: "number",
                          value: input.id,
                      })) ||
                ("object" === typeof input.account && null !== input.account
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".account",
                          expected: "Resolve<ObjectHierarchical.IAccount>",
                          value: input.account,
                      })) ||
                $ao[4](
                    input.account,
                    path + ".account",
                    true && exceptionable,
                ) ||
                ((null === input.enterprise
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".enterprise",
                          expected:
                              "(Resolve<ObjectHierarchical.IEnterprise> | null)",
                          value: input.enterprise,
                      })) &&
                    (("object" === typeof input.enterprise && null !== input.enterprise
                        ? true
                        : $guard(exceptionable, {
                              path: path + ".enterprise",
                              expected:
                                  "(Resolve<ObjectHierarchical.IEnterprise> | null)",
                              value: input.enterprise,
                          })) ||
                        $ao[5](
                            input.enterprise,
                            path + ".enterprise",
                            true && exceptionable,
                        )) ||
                (Array.isArray(input.emails)
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".emails",
                          expected: "Array<string>",
                          value: input.emails,
                      })) ||
                $every(input.emails, (elem, index1) =>
                    "string" === typeof elem
                        ? true
                        : $guard(exceptionable, {
                              path: path + ".emails[" + index1 + "]",
                              expected: "string",
                              value: elem,
                          },
                ) ||
                ("object" === typeof input.created_at &&
                null !== input.created_at
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".created_at",
                          expected: "Resolve<ObjectHierarchical.ITimestamp>",
                          value: input.created_at,
                      })) ||
                $ao[2](
                    input.created_at,
                    path + ".created_at",
                    true && exceptionable,
                ) ||
                ("boolean" === typeof input.authorized
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".authorized",
                          expected: "boolean",
                          value: input.authorized,
                      }),
            (input: ObjectHierarchical.IAccount, path: string, exceptionable: boolean) =>
                ("number" === typeof input.id
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".id",
                          expected: "number",
                          value: input.id,
                      })) ||
                ("string" === typeof input.code
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".code",
                          expected: "string",
                          value: input.code,
                      })) ||
                ("object" === typeof input.created_at &&
                null !== input.created_at
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".created_at",
                          expected: "Resolve<ObjectHierarchical.ITimestamp>",
                          value: input.created_at,
                      })) ||
                $ao[2](
                    input.created_at,
                    path + ".created_at",
                    true && exceptionable,
                ),
            (input: ObjectHierarchical.IEnterprise, path: string, exceptionable: boolean) =>
                ("number" === typeof input.id
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".id",
                          expected: "number",
                          value: input.id,
                      })) ||
                ("object" === typeof input.account && null !== input.account
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".account",
                          expected: "Resolve<ObjectHierarchical.IAccount>",
                          value: input.account,
                      })) ||
                $ao[4](
                    input.account,
                    path + ".account",
                    true && exceptionable,
                ) ||
                ("string" === typeof input.name
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".name",
                          expected: "string",
                          value: input.name,
                      })) ||
                ("number" === typeof input.grade
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".grade",
                          expected: "number",
                          value: input.grade,
                      })) ||
                ("object" === typeof input.created_at &&
                null !== input.created_at
                    ? true
                    : $guard(exceptionable, {
                          path: path + ".created_at",
                          expected: "Resolve<ObjectHierarchical.ITimestamp>",
                          value: input.created_at,
                      })) ||
                $ao[2](
                    input.created_at,
                    path + ".created_at",
                    true && exceptionable,
                ),
        ] as const;
        return $ao[0]!(input, path, true);
    })(input, "$input", true);
    return error;
};

const last = (input: ObjectSimple) => {
    const guard = $guard("TSON.assertType");
    const $ao = [
        (input: ObjectSimple.IPoint3D, path: string) =>
            ("object" === typeof input && null !== input
                ? true
                : {
                      expected: "ObjectSimple.IPoin3D",
                      path: path,
                      value: input,
                  }) ||
            ("number" === typeof input.x
                ? true
                : {
                      path: path + ".x",
                      expected: "number",
                      value: input.x,
                  }) ||
            ("number" === typeof input.y
                ? true
                : {
                      path: path + ".y",
                      expected: "number",
                      value: input.y,
                  }) ||
            ("number" === typeof input.z
                ? true
                : {
                      path: path + ".z",
                      expected: "number",
                      value: input.z,
                  }) ||
            null,
        (input: ObjectSimple.IBox3D, path: string) =>
            (null !== input && "object" === typeof input
                ? true
                : {
                      path: path,
                      expected: "ObjectSimple.IBox3D",
                      value: input,
                  }) ||
            $ao[0](input.pivot, path + ".pivot") ||
            $ao[0](input.position, path + ".position") ||
            $ao[0](input.rotate, path + ".rotation") ||
            $ao[0](input.scale, path + ".scale") ||
            null,
    ] as const;

    const error = $ao[1](input, "$input");
    if (null !== error) throw guard(error);
    return input;
};