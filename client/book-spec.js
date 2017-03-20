describe('Book Table Component', function() {
  it('should return bookName equal to arguments', function() {
    browser.get('http://localhost:3000');
    expect(element(by.css('#books > tbody > tr:nth-child(1) > td:nth-child(1)')).getText()).toEqual('Animal Farm');
    expect(element(by.css('#books > tbody > tr:nth-child(2) > td:nth-child(1)')).getText()).toEqual('The Art Of Not Giving A Fuck');
    expect(element(by.css('#books > tbody > tr:nth-child(3) > td:nth-child(1)')).getText()).toEqual('Start With Why');
    expect(element(by.css('#books > tbody > tr:nth-child(4) > td:nth-child(1)')).getText()).toEqual('Be Here Now');
    expect(element(by.css('#books > tbody > tr:nth-child(5) > td:nth-child(1)')).getText()).toEqual('1984');
    expect(element(by.css('#books > tbody > tr:nth-child(7) > td:nth-child(1)')).getText()).toEqual('Blink');
    expect(element(by.css('#books > tbody > tr:nth-child(8) > td:nth-child(1)')).getText()).toEqual('Sex, Soap, Cigarrettes');
    expect(element(by.css('#books > tbody > tr:nth-child(9) > td:nth-child(1)')).getText()).toEqual('Tools Of titans');
    expect(element(by.css('#books > tbody > tr:nth-child(10) > td:nth-child(1)')).getText()).toEqual('Lord Of The Flies');
  });
});
