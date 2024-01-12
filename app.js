const book = document.querySelector(".paragraph");
const autherContent = document.querySelector(".auther-content");
const bookAuther = document.querySelector(".auther");
const fictionBtn = document.querySelector("#fiction-btn");
const nonFictionBtn = document.querySelector("#non-fiction-btn");

const fictionBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
    },
    {
        title: "1984",
        author: "George Orwell"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling"
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins"
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown"
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn"
    },
    {
        title: "The Girl on the Train",
        author: "Paula Hawkins"
    },
    {
        title: "The Fault in Our Stars",
        author: "John Green"
    },
    {
        title: "A Game of Thrones",
        author: "George R.R. Martin"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        title: "The Help",
        author: "Kathryn Stockett"
    },
    {
        title: "The Road",
        author: "Cormac McCarthy"
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini"
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson"
    },
    {
        title: "The Maze Runner",
        author: "James Dashner"
    },
    {
        title: "Divergent",
        author: "Veronica Roth"
    },
];

const nonFictionBooks = [
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari"
    },
    {
        title: "Educated: A Memoir",
        author: "Tara Westover"
    },
    {
        title: "Becoming",
        author: "Michelle Obama"
    },
    {
        title: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot"
    },
    {
        title: "Born a Crime: Stories from a South African Childhood",
        author: "Trevor Noah"
    },
    {
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson"
    },
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman"
    },
    {
        title: "Bad Blood: Secrets and Lies in a Silicon Valley Startup",
        author: "John Carreyrou"
    },
    {
        title: "Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
        author: "J.D. Vance"
    },
    {
        title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
        author: "Susan Cain"
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari"
    },
    {
        title: "When Breath Becomes Air",
        author: "Paul Kalanithi"
    },
    {
        title: "The Wright Brothers",
        author: "David McCullough"
    },
    {
        title: "The Glass Castle: A Memoir",
        author: "Jeannette Walls"
    },
    {
        title: "The Girl with Seven Names: Escape from North Korea",
        author: "Hyeonseo Lee"
    },
    {
        title: "The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography",
        author: "Simon Singh"
    },
    {
        title: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot"
    },
    {
        title: "Outliers: The Story of Success",
        author: "Malcolm Gladwell"
    },
    {
        title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
        author: "Steven D. Levitt and Stephen J. Dubner"
    },
];

fictionBtn.addEventListener("click", function() {
    autherContent.style.display = "block";
    const randomFictionBook = Math.floor(Math.random() * fictionBooks.length);
    book.innerText = fictionBooks[randomFictionBook].title;
    bookAuther.innerText = fictionBooks[randomFictionBook].author;
});

nonFictionBtn.addEventListener("click", function() {
    autherContent.style.display = "block";
    const randomNonFictionBook = Math.floor(Math.random() * nonFictionBooks.length);
    book.innerText = nonFictionBooks[randomNonFictionBook].title;
    bookAuther.innerText = nonFictionBooks[randomNonFictionBook].author;
});