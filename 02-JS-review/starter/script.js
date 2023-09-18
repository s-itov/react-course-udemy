const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

/*
const book = getBook(1);

//Destructuring properties from an object - the variables must be exact the same names as the properties of the object
const { title, author, genres, pages } = book;

//Rest operator is used in the last place of the destrucured array and is showing the rest elements in an array
const [primaryGenre, sencodaryGendre, ...otherGenres] = genres;

console.log(primaryGenre, sencodaryGendre, otherGenres);

//Spread operator is used to add elements to existing array and more properties to an object
const newGenres = [...genres, 'epic fiction'];
newGenres

const newBook = { ...book, isEpic: true, author: 'Bradly Cooper' }

newBook

//Ternary operator
const pagesRange = pages > 1000 ? 'over thousand' : 'less then thousand';

pagesRange 
*/

const books = getBooks();

const bookTitles = books.map((book) => book.title);

const essentialData = books.map((book) => ({
    author: book.author,
    title: book.title,
}));

const longestBook = books.filter(book => book.pages >= 600 && book.hasMovieAdaptation).map(book => book.title);

longestBook

const allPages = books.reduce((sum, book) => sum + book.pages, 0);

allPages;

const arr = [1, 5, 6, 1, 7];

const sorted = arr.slice().sort((a, b) => a - b);

arr;
sorted;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

sortedByPages;

const newBook = {
    id: 6,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
};

const bookAfterAdd = [...books, newBook];
bookAfterAdd

const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete

const bookAfterUpdate = bookAfterDelete.map((book) => book.id === 5 ? { ...book, pages: 12 } : book);
bookAfterUpdate;