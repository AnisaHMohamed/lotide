const assert = require("chai").assert
const middle = require("../middle")


    describe("#middle", () => {
      it("array should return  [] if array is empty", () => {
        const actual = middle([]) ;
        const expected = []
        assert.deepEqual(actual,expected)
    
      });
      it("array should return  [] if array is length one", () => {
        const actual = middle([1]) ;
        const expected = []
        assert.deepEqual(actual,expected)
    
      });
      it("array should return  [] if array is length is 2", () => {
        const actual = middle([1,2]) ;
        const expected = []
        assert.deepEqual(actual,expected)
    
      });
      // assertArraysEqual(middle([1, 2, 3]),[2])
      it("array should return  middle number if array is length is odd", () => {
        const actual = middle([1,2,3]) ;
        const expected = [2]
        assert.deepEqual(actual,expected)
    

      });
      // assertArraysEqual(middle([1, 2, 3, 4]),[2, 3])
      it("array should return  middle number if array is length is even", () => {
        const actual = middle([1,2,3,4]) ;
        const expected = [2,3]
        assert.deepEqual(actual,expected)
    
      });
    })


