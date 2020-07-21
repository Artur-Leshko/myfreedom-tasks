describe("map", function() {

    // it("возводит каждый элемент массива в квадрат", function() {
    // //   assert.deepEqual(map([1, 2, 3], sqr), [1, 4, 9]);

    //     const array = [1,2,3];
    //     const expectedArray = array.map(item => item ** 2)
    //     assert.deepEqual(map(array, sqr), expectedArray);
    // });

    for(let i = 0; i < 10; i += 3) {
        it("возводит каждый элемент массива в квадрат", function() {
            assert.deepEqual(map([ i, i + 1, i + 2 ], sqr), [ i ** 2, (i + 1) ** 2, (i + 2) ** 2 ]);
        });
    }
});
