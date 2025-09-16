let Quotes = [
    {
        quote: "“It is better to fail in originality than to succeed in imitation.”",
        author: "—Herman Melvill"
    },
    {
        quote: "“The only place where success comes before work is in the dictionary.”",
        author: "—Marshall Limma"
    },
    {
        quote: "“Build your own dreams, or someone else will hire you to build theirs.”",
        author: "—Johnson Pani"
    },
    {
        quote: "“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.”",
        author: "—Mohan Das Pani"
    },
    {
        quote: "“Be passionate and move forward with gusto every single hour of every single day until you reach your goal.”",
        author: "—Jeebanta Pani"
    },
    {
        quote: "“The most difficult thing is the decision to act; the rest is merely tenacity.”",
        author: "—Ricky Ponting"
    },
    {
        quote: "“The most important thing is to try and inspire people so that they can be great in whatever they want to do.”",
        author: "—Duster Pani"
    }
];

function GenerateQuote() {
    let indexval = Math.floor(Math.random() * Quotes.length);
    document.querySelector(".quote").textContent = Quotes[indexval].quote;
    document.querySelector(".author").textContent = Quotes[indexval].author;
}
