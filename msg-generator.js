const randomQuotes = [
  {quote: 'The best way to get started is to quit talking and begin doing.', author: '--Walt Disney'},
  {qoute: 'Don’t let yesterday take up too much of today.', author: '--Will Rogers'},
  {qoute: 'Failure will never overtake me if my determination to succeed is strong enough.', author: '--Og Mandino'},
  {qoute: 'We may encounter many defeats but we must not be defeated.', author: '--Maya Angelou'},
  {qoute: 'Imagine your life is perfect in every respect; what would it look like?', author: '--Brian Tracy'},
  {qoute: 'We generate fears while we sit. We overcome them by action.', author: '--Dr. Henry Link'},
  {qoute: 'The man who has confidence in himself gains the confidence of others.', author: '--Hasidic Proverb'},
  {qoute: 'The only limit to our realization of tomorrow will be our doubts of today.', author: '--Franklin D. Roosevelt'},
  {qoute: 'Creativity is intelligence having fun.', author: '--Albert Einstein'},
  {qoute: 'You are never too old to set another goal or to dream a new dream.', author: '--C.S. Lewis'},
  {qoute: 'To see what is right and not do it is a lack of courage.', author: '--Confucius'},
  {qoute: 'Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.', author: '--Brian Tracy'},
  {qoute: 'A room without books is like a body without a soul.', author: '--Marcus Tullius Cicero'},
  {qoute: 'Today’s accomplishments were yesterday’s impossibilities.', author: '--Robert H. Schuller'},
  {qoute: 'Leaders think and talk about the solutions. Followers think and talk about the problems.', author: '--Brian Tracy'},
];

const randomizeIt = Math.floor(Math.random() * 10);

console.log(`\nMessage: ${randomQuotes[randomizeIt].qoute}`);

console.log(`\nAuthor: ${randomQuotes[randomizeIt].author}`);
