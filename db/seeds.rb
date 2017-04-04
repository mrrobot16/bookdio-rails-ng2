# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

books = [
        {
          book_name:"Start With Why",
          author_name:"Simon Sinek",
          isbn_code:"978-1-59184-644-4",
          book_quantity:1,
          published_date:Date.new(2009,10),
          book_category:"Leadership",
        },
        {
          book_name:"The Hard Thing About Hard Things",
          author_name:"Ben Horowitz",
          isbn_code:"978-1-44379-234-5",
          book_quantity:10,
          published_date:Date.new(2014,3),
          book_category:"Management",
        },
        {
           book_name:'How To Win Friends & Influence People',
           author_name:"Dale Carnegie",
           isbn_code:"978-1-59184-644-1",
           published_date:Date.new(1936, 10),
           book_category:"Salesmanship",
           book_quantity:6
        },
        {
           book_name:'The Startup Of You',
           author_name:"Reid Hoffman",
           isbn_code:"978-1-59184-644-7",
           published_date:Date.new(1936,10),
           book_category:"Entreprenuership",
           book_quantity:4
        },
        {
          book_name:"Lean Startup",
          author_name:"Eric Reis",
          isbn_code:"978-1-44379-234-9",
          book_quantity:3,
          published_date:Date.new(2014,3),
          book_category:"Entreprenuership"
        },
        {
          book_name:"The Innovators",
          author_name:"Walter Issacson",
          isbn_code:"978-1-44379-234-1",
          book_quantity:8,
          published_date:Date.new(2012,8),
          book_category:"Innovation"
         },
         {
          book_name:"The Four Agreements",
          author_name:"Don Miguel Ruiz",
          isbn_code:"978-1-44379-234-7",
          book_quantity:2,
          published_date:Date.new(1992,11),
          book_category:"Spirituality"
         },
         {
          book_name:"Blink",
          author_name:"Malcolm Gladwell",
          isbn_code:"978-1-44379-234-8",
          book_quantity:4,
          published_date:Date.new(2005,2),
          book_category:"Psychology"
         },
         {
          book_name:"Sex, Soap, Cigarrettes",
          author_name:"Julian Sivulka",
          isbn_code:"971-1-44379-234-3",
          book_quantity:6,
          published_date:Date.new(2011,7),
          book_category:"Advertising"
        },
        {
         book_name:"Tools Of Titans",
         author_name:"Tim Ferriss",
         isbn_code:"971-2-19639-234-3",
         book_quantity:9,
         published_date:Date.new(2016,12),
         book_category:"Leadership"
       },
       {
        book_name:"Be Here Now",
        author_name:"Ram Dass",
        isbn_code:"971-1-44329-534-7",
        book_quantity:3,
        published_date:Date.new(1971,10),
        book_category:"Spirituality"
      },
      {
       book_name:"1984",
       author_name:"George Orwell",
       isbn_code:"971-1-44329-534-7",
       book_quantity:15,
       published_date:Date.new(1949,6),
       book_category:"British Literature"
      },
       {
        book_name:"The Art Of Not Giving A Fuck",
        author_name:"Mark Manson",
        isbn_code:"971-1-44329-534-9",
        book_quantity:13,
        published_date:Date.new(2016,4),
        book_category:"Self Development"
      },
      {
       book_name:"Animal Farm",
       author_name:"George Orwell",
       isbn_code:"971-1-44329-532-7",
       book_quantity:11,
       published_date:Date.new(1956,7),
       book_category:"British Literature"
     },
     {
      book_name:"Lord Of The Flies",
      author_name:"William Golding",
      isbn_code:"971-1-95712-532-9",
      book_quantity:2,
      published_date:Date.new(1954,3),
      book_category:"Adventure"
    },
    {
     book_name:"Smart People Should Build Things",
     author_name:"Andrew Yang",
     isbn_code:"971-1-44329-532-7",
     book_quantity:11,
     published_date:Date.new(2014,4),
     book_category:"Entreprenuership"
    },
    {
      book_name:"How to Win at the Sport of Business",
      author_name:"Mark Cuban",
      isbn_code:"821-1-44329-532-7",
      book_quantity:4,
      published_date:Date.new(2004,9),
      book_category:"Business"
    },
    {
     book_name:"Zero To One",
     author_name:"Peter Thiel",
     isbn_code:"971-1-44329-981-7",
     book_quantity:8,
     published_date:Date.new(2014,7),
     book_category:"Entreprenuership"
    },
    {
     book_name:"Business At The Speed Of Thought",
     author_name:"Bill Gates",
     isbn_code:"821-1-44329-532-7",
     book_quantity:4,
     published_date:Date.new(1999,5),
     book_category:"Business"
   },
   {
     book_name:"Born Crime",
     author_name:"Trevor Noah",
     isbn_code:"821-1-16923-532-7",
     book_quantity:4,
     published_date:Date.new(2016,5),
     book_category:"Biography"
   },
   {
     book_name:"The Virgin Way",
     author_name:"Richard Branson",
     isbn_code:"821-1-16923-912-7",
     book_quantity:7,
     published_date:Date.new(2009,5),
     book_category:"Leadership"
   },
   {
     book_name:"Shoe Dog",
     author_name:"Phil Knight",
     isbn_code:"901-1-16923-912-7",
     book_quantity:3,
     published_date:Date.new(2016,5),
     book_category:"Leadership"
   },
   {
     book_name:"How Google Works",
     author_name:"Eric Schmidt",
     isbn_code:"901-1-16923-901-9",
     book_quantity:7,
     published_date:Date.new(2014,1),
     book_category:"Management"
   },
   {
     book_name:"Rework",
     author_name:"Jason Fried",
     isbn_code:"101-2-16923-901-9",
     book_quantity:2,
     published_date:Date.new(2011,10),
     book_category:"Entreprenuership"
   }
]

cars = [
        {"vin":"a1653d4d","brand":"VW","year":1998,"color":"White"},
        {"vin":"ddeb9b10","brand":"Mercedes","year":1985,"color":"Green"},
        {"vin":"d8ebe413","brand":"Jaguar","year":1979,"color":"Silver"},
        {"vin":"aab227b7","brand":"Audi","year":1970,"color":"Black"},
        {"vin":"631f7412","brand":"Volvo","year":1992,"color":"Red"},
        {"vin":"7d2d22b0","brand":"VW","year":1993,"color":"Maroon"},
        {"vin":"50e900ca","brand":"Fiat","year":1964,"color":"Blue"},
        {"vin":"4bbcd603","brand":"Renault","year":1983,"color":"Maroon"},
        {"vin":"70214c7e","brand":"Renault","year":1961,"color":"Black"},
        {"vin":"ec229a92","brand":"Audi","year":1984,"color":"Brown"},
        {"vin":"1083ee40","brand":"VW","year":1984,"color":"Silver"},
        {"vin":"6e0da3ab","brand":"Volvo","year":1987,"color":"Silver"},
        {"vin":"5aee636b","brand":"Jaguar","year":1995,"color":"Maroon"},
        {"vin":"7cc43997","brand":"Jaguar","year":1984,"color":"Orange"},
        {"vin":"88ec9f66","brand":"Honda","year":1989,"color":"Maroon"},
        {"vin":"f5a4a5f5","brand":"BMW","year":1986,"color":"Blue"},
        {"vin":"15b9a5c9","brand":"Mercedes","year":1986,"color":"Orange"},
        {"vin":"f7e18d01","brand":"Mercedes","year":1991,"color":"White"},
        {"vin":"cec593d7","brand":"VW","year":1992,"color":"Blue"},
        {"vin":"d5bac4f0","brand":"Renault","year":2001,"color":"Blue"},
        {"vin":"56b527c8","brand":"Jaguar","year":1990,"color":"Yellow"},
        {"vin":"1ac011ff","brand":"Audi","year":1966,"color":"Maroon"},
        {"vin":"fc074185","brand":"BMW","year":1962,"color":"Blue"},
        {"vin":"606ba663","brand":"Honda","year":1982,"color":"Blue"},
        {"vin":"d05060b8","brand":"Mercedes","year":2003,"color":"Silver"},
        {"vin":"46e4bbe8","brand":"Mercedes","year":1986,"color":"White"},
        {"vin":"c29da0d7","brand":"BMW","year":1983,"color":"Brown"},
        {"vin":"24622f70","brand":"VW","year":1973,"color":"Maroon"},
        {"vin":"7f573d2c","brand":"Mercedes","year":1991,"color":"Red"},
        {"vin":"b69e6f5c","brand":"Jaguar","year":1993,"color":"Yellow"},
        {"vin":"ead9bf1d","brand":"Fiat","year":1968,"color":"Maroon"},
        {"vin":"bc58113e","brand":"Renault","year":1981,"color":"Silver"},
        {"vin":"2989d5b1","brand":"Honda","year":2006,"color":"Blue"},
        {"vin":"c243e3a0","brand":"Fiat","year":1990,"color":"Maroon"},
        {"vin":"e3d3ebf3","brand":"Audi","year":1996,"color":"White"},
        {"vin":"45337e7a","brand":"Mercedes","year":1982,"color":"Blue"},
        {"vin":"36e9cf7e","brand":"Fiat","year":2000,"color":"Orange"},
        {"vin":"036bf135","brand":"Mercedes","year":1973,"color":"Black"},
        {"vin":"ad612e9f","brand":"Mercedes","year":1975,"color":"Red"},
        {"vin":"97c6e1e9","brand":"Volvo","year":1967,"color":"Green"},
        {"vin":"ae962274","brand":"Volvo","year":1982,"color":"Red"},
        {"vin":"81f8972a","brand":"BMW","year":2007,"color":"Black"},
        {"vin":"f8506743","brand":"Audi","year":1975,"color":"Blue"},
        {"vin":"596859d1","brand":"Fiat","year":2002,"color":"Green"},
        {"vin":"d83c1d9a","brand":"Volvo","year":1972,"color":"Black"},
        {"vin":"32f41550","brand":"Mercedes","year":1978,"color":"Brown"},
        {"vin":"c28cd2e4","brand":"Volvo","year":1982,"color":"Silver"},
        {"vin":"80890dcc","brand":"Audi","year":1962,"color":"White"},
        {"vin":"4bf1aeb5","brand":"VW","year":2000,"color":"Silver"},
        {"vin":"45ca4786","brand":"BMW","year":1995,"color":"Maroon"}
    ]
cars.each do |car|
  Car.create(car)
end
# books.each do |book|
#   Book.create(book)
# end
