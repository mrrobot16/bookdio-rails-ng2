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
          book_name:"Lean Start",
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

books.each do |book|
  Book.create(book)
end
