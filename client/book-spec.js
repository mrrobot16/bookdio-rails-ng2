var books = require('./book-list')

describe('Book Component', function() {
  if('Check Book App Title', function(){
    browser.get('http://localhost:3000');
    expect(element(by.css("body > my-app > div > div > span > h1")).getText()).toEqual('Welcome to our Book Recommendations')
  })

  it('title should equal Synechron Book Challenge', function(){
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('Synechron Book Challenge');
  })

  it('should match our book-list with whats in our table', function() {
    books.books.forEach((book, i)=>{
      i+=1
      expect(element(by.css('#books > tbody > tr:nth-child('+i+') > td:nth-child(1)')).getText()).toEqual(book.book_name);
      expect(element(by.css('#books > tbody > tr:nth-child('+i+') > td:nth-child(2)')).getText()).toEqual(book.author_name);
      expect(element(by.css('#books > tbody > tr:nth-child('+i+') > td:nth-child(3)')).getText()).toEqual(book.isbn_code);
      expect(element(by.css('#books > tbody > tr:nth-child('+i+') > td:nth-child(4)')).getText()).toEqual(book.book_quantity.toString());
      expect(element(by.css('#books > tbody > tr:nth-child('+i+') > td:nth-child(6)')).getText()).toEqual(book.book_category);
      expect(element(by.css('#books > tbody > tr:nth-child('+i+') > td:nth-child(7)')).getText()).toEqual(book.book_issued.toString());
    })
  })

  it("should add new Book to table", function(){
    element(by.id('add-book')).click()
    element(by.id("book_name")).sendKeys('Remote: Office not required')
    element(by.id('author_name')).sendKeys('Jason Fried')
    element(by.id('isbn_code')).sendKeys('910-1-16923-901-2')
    element(by.id('book_quantity')).sendKeys('2')
    element(by.id('pub_date')).sendKeys('Jun 2011')
    element(by.id('book_category')).sendKeys('Business')
    element(by.id('submit-book')).click()
  })

  it('should have 26 books', function(){
    expect(element(by.id("total_books")).getText()).toEqual('26')
  })

  it('last book name should be The Art Of Not Giving A Fuck', function(){
    for(var x=0; x<2; x++){
      element(by.id('next')).click()
    }
    var last_book = element(by.css('#books > tbody > tr:last-child > td:nth-child(1)'))
    expect(last_book.getText()).toEqual('Remote: Office not required');
  })
})
