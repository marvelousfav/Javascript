function test(val) {
    try {
        if (isNaN(val)) {
            throw "Not a number";
        } else {
            console.log("Got number");
        }
    } catch (j) {
        console.error(j);
    } finally {
        console.log("Done " + val);
    }
}
test(12);
test("*");