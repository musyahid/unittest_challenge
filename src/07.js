var repeat = function (s, n, d) {
    return --n ? s + (d || "") + repeat(s, n, d) : "" + s;
};

var foo = "Hello World";
console.log(
    "%s\n%s\n%s\n%s",

    repeat(foo),        // "foo"
    repeat(foo, 2),     // "foofoo"
    repeat(foo, "2"),   // "foofoo"
    repeat(foo, 2, " ") // "foo-foo"
);