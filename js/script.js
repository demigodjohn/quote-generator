let date = new Date()
let time = date.getHours() + ":" + date.getMinutes();
console.log(time)


//creating our array of quotes

let quote = [
    
    '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
    '"It is better to fail in originality than to succeed in imitation." — Herman Melville',
    '"The road to success and the road to failure are almost exactly the same." — Colin R. Davis',
    '“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau',
    '“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie',
    '“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers',
    '“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden',
    '“I never dreamed about success. I worked for it.” —Estée Lauder',
    '“Success is getting what you want, happiness is wanting what you get.” ―W. P. Kinsella',

]

function generate(){
let RandomQuote = Math.floor(Math.random()*(quote.length));
document.getElementById('Quotes').innerHTML = quote[RandomQuote]
}


setInterval(function() {

    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        ampm = hours > 11 ? 'PM' : 'AM';
        
    // hours += hours < 10 ? '0' : '';
    // minutes += minutes < 10 ? '0' : '';

   


    document.getElementById('time').innerHTML = hours + ":" + minutes + " " + ampm;
    document.getElementById('date').innerHTML = currentTime.getDate()+' / '+(currentTime.getMonth()+1)+' / '+currentTime.getFullYear();;
}, 1000);

function Copy(){
let text = document.getElementById('Quotes').innerHTML;
navigator.clipboard.writeText(text);
}