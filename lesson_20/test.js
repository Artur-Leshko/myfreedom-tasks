describe("map", function() {

    it("возводит каждый элемент массива в квадрат", function() {
      assert.equal(map([1, 2, 3], sqr), [1, 4, 9]);
    });

});