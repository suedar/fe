if (null == undefined) {
    console.log("null == undefined");
}
if (null == 0) {
    console.log("null == 0")
}
if (null == NaN) {
    console.log("null == NaN");
}
if (null == '') {
    console.log("null == ''");
}
if (undefined == 0) {
    console.log("undefined == 0");
}
if (undefined == '') {
    console.log("undefined == ''");
}
if (undefined == NaN) {
    console.log("undefined == NaN");
}
if (NaN == 0) {
    console.log("NaN == 0");
}
if (NaN == '') {
    console.log("NaN == ''");
}
if (0 == '') {
    console.log("0 == ''");
}

if (NaN == false) {
    console.log(11);
}
if (0 == false) {
    console.log(11); // true
}
if ('' == false) {
    console.log(11); // true
}
if (undefined == false) {
    console.log(11);
}
if (null == false) {
    console.log(11);
}
if (NaN == true) {
    console.log(11);
}
if (0 == true) {
    console.log(11);
}
if ('' == true) {
    console.log(11);
}
if (undefined == true) {
    console.log(11);
}
if (null == true) {
    console.log(11);
}
if ([] == null) {
    console.log(111);
}
if ([] == undefined) {
    console.log(11);
}
if ([] == 0) {
    console.log(11); // true
}
if ([] == '') {
    console.log(11); //true
}
if ([] == NaN) {
    console.log(11);
}
if ([] == false) {
    console.log(222); //true
}
if ({} == null) {
    console.log(111);
}
if ({} == undefined) {
    console.log(11);
}
if ({} == 0) {
    console.log(11);
}
if ({} == '') {
    console.log(11);
}
if ({} == NaN) {
    console.log(11);
}
if ({} == false) {
    console.log(222);
}
if ([1] == [1]) {
    console.log(222)
}
if ({
        a: 1
    } == {
        a: 1
    }) {
    console.log(22);
}