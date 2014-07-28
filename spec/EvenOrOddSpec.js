describe("evenOrOdd", function() {
  it("returns 'odd' when the number is odd", function(){
    expect(evenOrOdd(1)).toEqual('odd');
  });

  it("returns 'even' when the number is even", function(){
    expect(evenOrOdd(2)).toEqual('even');
  });
});
