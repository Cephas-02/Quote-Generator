

const Quote = document.querySelector("#quotes");
const Writer = document.querySelector('#writer');
const nextQuote = document.querySelector('#btn');



let currentQuote = {};
let availableQuotes = [];


let Quotes = [
    {
     Quote: `"Innovation distinguishes between a leader and a follower."`,
     Writer: "--Steve Jobs"
    },
    {
     Quote: `"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."`,
     Writer: "--Ray Goforth"
    },
    {
     Quote: `"Thinking should become your capital asset, no matter whatever ups and downs you come across in  your life."`,
     Writer: "--A.P.J. Abdul Kalam"
    },
    {
     Quote: `"I find that the harder I work, the more luck I seem to have."`,
     Writer: "--Thomas Jefferson"
    },
    {
     Quote: `"The starting point of all achievement is desire."`,
     Writer: "--Napoleon Hill"
    },
    {
     Quote: `"Success is the sum of small efforts, repeated day-in and day-out."`,
     Writer: "--Robert Colliery"
    },
    {
     Quote: `"If you want to achieve excellence, you can get there today. As of this second, quit doing less-than excellent work."`,
     Writer: "--Thomas J. Watson"
    },
    {
     Quote: `"All progress takes place outside the comfort zone."`,
     Writer: "--Michael John Bobak"
    },
    {
    Quote:  `”You may only succeed if you desire succeeding; you may only fail if you do not mind failing.”`,
    Writer:  "-- Philippos"
    },
    {
    Quote:  `”Courage is resistance to fear, mastery of fear--not absence of fear.”`,
    Writer: "--Mark Twain"
    },
    {
    Quote:  `"Only put off until tomorrow what you are willing to die having left undone."`,
    Writer: "--Pablo Picasso"
    },
    {
    Quote:  `”People often say that motivation doesn't last. Well, neither does bathing--that's why we recommend it daily.”`,
    Writer: "--Zig Ziglar"
    },
    {
    Quote:  `”We become what we think about most of the time, and that's the strangest secret."`,
    Writer:  "--Earl Nightingale"
    },
    {
    Quote:  `”The only place where success comes before work is in the dictionary.”`,
    Writer:   "--Vidal Sassoon"
    },
    {
    Quote:  `”"The best reason to start an organization is to make meaning; to create a product or service to make the world a better place.”`,
    Writer:   "--Guy Kawasaki"
    },
    {
    Quote:  `”I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.”`,
    Writer:   "--Martha Stewart"
    },
    {
    Quote:  `"The road to success and the road to failure are almost exactly the same."`,
    Writer:   "--Colin R. Davis"
    },
    {
    Quote:  `”The function of leadership is to produce more leaders, not more followers.”`,
    Writer: "--Ralph Nader"
    },
    {
    Quote:  `”Success is liking yourself, liking what you do, and liking how you do it.”`,
    Writer:   "--Maya Angelou"
    },
    {
    Quote:  `”As we look ahead into the next century, leaders will be those who empower others.”`,
    Writer:   "--Bill Gates"
    },
    {
    Quote:  `”A real entrepreneur is somebody who has no safety net underneath them.”`,
    Writer:  "--Henry Kravis"
    },
    {
    Quote:  `”The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”`,
    Writer:   "--Mark Caine"
    },
    {
    Quote: `"People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy."`,
    Writer: "--Tony Robbins"
    },
    {
    Quote: `"When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid."`,
    Writer: "--Audre Lorde"
    },
    {
    Quote: `"Whenever you find yourself on the side of the majority, it is time to pause and reflect."`,
    Writer: "--Mark Twain"
    },
    {
    Quote: `"The successful warrior is the average man, with laser-like focus."`,
    Writer: "--Bruce Lee"
    },
    {
    Quote: `"Success does not consist in never making mistakes but in never making the same one a second 
    time."`,
    Writer: "--George Bernard Shaw"
    },
    {
    Quote: `9. "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success."`,
    Writer: "--Dale Carnegie"
    },
    {
    Quote: `"If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much."`,
    Writer: "--Jim Rohn"
    },
    {
    Quote: `"If you genuinely want something, don't wait for it--teach yourself to be impatient."`,
    Writer: "--Gurbaksh Chahal"
    },
    {
    Quote: `"Don't let the fear of losing be greater than the excitement of winning."`,
    Writer: "--Robert Kiyosaki"
    },
    {
    Quote: `"If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!"`,
    Writer: "--T. Harv Eker"
    },
    {
    Quote: `"You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something--your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life."`,
    Writer: "--Steve Jobs"
    },
    {
    Quote: `"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier, wish you were better."`,
    Writer: "--Jim Rohn"
    },
    {
    Quote: `"The number one reason people fail in life is because they listen to their friends, family, and neighbors."`,
    Writer: "--Napoleon Hill"
    },
    {
    Quote: `"The reason most people never reach their goals is that they don't define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them."`,
    Writer: "--Denis Waitley"
    },
    {
    Quote: `"In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it." `,
    Writer: "--Jane Smiley"
    },
    {
    Quote: `"I don't want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well."`,
    Writer: "--Diane Ackerman"
    },
    {
    Quote: `"You must expect great things of yourself before you can do them."`,
    Writer: "--Michael Jordan"
    },
    {
    Quote: `"Motivation is what gets you started. Habit is what keeps you going."`,
    Writer: "--Jim Ryun"
    },
    {
    Quote: `"People rarely succeed unless they have fun in what they are doing."`,
    Writer: "--Dale Carnegie"
    },
    {
    Quote: `"There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul."`,
    Writer: "--Ella Wheeler Wilcox"
    },
    {
    Quote: `"Our greatest fear should not be of failure but of succeeding at things in life that don't really matter."`,
    Writer: "--Francis Chan"
    },
    {
    Quote: `"You've got to get up every morning with determination if you're going to go to bed with satisfaction." `,
    Writer: "--George Lorimer"
    },
    {
    Quote: `"To be successful you must accept all challenges that come your way. You can't just accept the ones you like."`,
    Writer: "--Mike Gafka"
    },
    {
    Quote: `"Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others."`,
    Writer: "--John C. Maxwell"
    },
    {
    Quote: `"Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice."`,
    Writer: "--Wayne Dyer"
    },
    {
    Quote: `"To accomplish great things, we must not only act, but also dream, not only plan, but also believe."`,
    Writer: "--Anatole France"
    },
    {
    Quote: `"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no help at all."`,
    Writer: "--Dale Carnegie"
    },
    {
    Quote: `"You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals."`,
    Writer: "--Booker T. Washington"
    },
    {
    Quote: `"Real difficulties can be overcome; it is only the imaginary ones that are unconquerable."`,
    Writer: "--Theodore N. Vail"
    },
    {
    Quote: `"It is better to fail in originality than to succeed in imitation."`,
    Writer: "--Herman Melville"
    },
    {
    Quote: `"Fortune sides with him who dares."`,
    Writer: "--Virgil"
    },
    {
    Quote: `"Little minds are tamed and subdued by misfortune; but great minds rise above it."`,
    Writer: "--Washington Irving"
    },
    {
    Quote: `"Failure is the condiment that gives success its flavor."`,
    Writer: "--Truman Capote"
    },
    {
    Quote: `"Don't let what you cannot do interfere with what you can do."`,
    Writer: "--John R. Wooden"
    },
    {
    Quote: `"You may have to fight a battle more than once to win it."`,
    Writer: "--Margaret Thatcher"
    },
    {
    Quote: `"A man can be as great as he wants to be. If you believe in yourself and have the courage, the 
    determination, the dedication, the competitive drive and if you are willing to sacrifice the little things in 
    life and pay the price for the things that are worthwhile, it can be done."`,
    Writer: "--Vince Lombardir"
    },
    {
    Quote: `"Things work out best for those who make the best of how things work out."`,
    Writer: "--John Wooden"
    },
    {
    Quote: `"If you are not willing to risk the usual you will have to settle for the ordinary." `,
    Writer: "--Jim Rohn"
    },
    {
    Quote: `”Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success."`,
    Writer: "--Swami Vivekananda"
    },
    {
    Quote: `"All our dreams can come true if we have the courage to pursue them."`,
    Writer: "--Walt Disney"
    },
    {
    Quote: `"If you do what you always did, you will get what you always got."`,
    Writer: "B .T Opajobi"
    },
    {
    Quote: `"Success is walking from failure to failure with no loss of enthusiasm."`,
    Writer: "--Winston Churchill"
    },
    {
    Quote: `"Just when the caterpillar thought the world was ending, he turned into a butterfly."`,
    Writer: "--Proverb"
    },
    {
    Quote: `"Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them."`,
    Writer: "--Vaibhav Shah"
    },
    {
    Quote: `"Opportunities don't happen, you create them."`,
    Writer: "--Chris Grosser"
    },
    {
    Quote: `"Try not to become a person of success, but rather try to become a person of value."`,
    Writer: "--Albert Einstein"
    },
    {
    Quote: `"Great minds discuss ideas; average minds discuss events; small minds discuss people."`,
    Writer: "--Eleanor Roosevelt"
    },
    {
    Quote: `"I have not failed. I've just found 10,000 ways that won't work."`,
    Writer: "--Thomas A. Edison"
    },
    {
    Quote: `"If you don't value your time, neither will others. Stop giving away your time and talents--start charging for it."`,
    Writer: "--Kim Garst"
    },
    {
    Quote: `"A successful man is one who can lay a firm foundation with the bricks others have thrown at him."`,
    Writer: "--David Brinkley"
    },
    {
    Quote: `"No one can make you feel inferior without your consent."`,
    Writer: "--Eleanor Roosevelt"
    },
    {
    Quote: `"The whole secret of a successful life is to find out what is one's destiny to do, and then do it."`,
    Writer: "--Henry Ford"
    },
    {
    Quote: `"If you're going through hell keep going."`,
    Writer: "--Winston Churchill"
    },
    {
    Quote: `"What seems to us as bitter trials are often blessings in disguise."`,
    Writer: "--Oscar Wilde"
    },
    {
    Quote: `"The distance between insanity and genius is measured only by success."`,
    Writer: "--Bruce Feirstein"
    },
    {
    Quote: `"When you stop chasing the wrong things, you give the right things a chance to catch you."`,
    Writer: "--Lolly Daskal"
    },
    {
    Quote: `"Don't be afraid to give up the good to go for the great."`,
    Writer: "--John D. Rockefeller"
    },
    {
    Quote: `"Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you."`,
    Writer: "--Nathaniel Hawthorne"
    },
    {
    Quote: `"If you can't explain it simply, you don't understand it well enough."`,
    Writer: "--Albert Einstein"
    },
    {
    Quote: `"Life is not about finding yourself. Life is about creating yourself."`,
    Writer: "--Lolly Daskal"
    }
    
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
];


    generateQuote = () => {
        availableQuotes = [...Quotes];
        console.log(availableQuotes);
        getNewQuotes();
    }
    
    getNewQuotes = () => {
        const quotesIndex = Math.floor(Math.random() * availableQuotes.length);
        currentQuote = availableQuotes[quotesIndex];
        Quote.innerText = currentQuote.Quote;
        Writer.innerText = currentQuote.Writer;
    }

generateQuote();

nextQuote.addEventListener('click', () => {
    document.location.reload();
})



