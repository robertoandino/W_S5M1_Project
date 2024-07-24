function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widget1 = document.querySelectorAll('section>div')
  widget1.forEach((widget, idx) => {
    widget.classList.add('widget');
    widget.setAttribute('tabindex', idx + 1 )
  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

  const randomIndex = Math.floor(Math.random() * quotes.length);
  //quote
  const randomQuote = quotes[randomIndex]
  const quote = document.createElement('div');
  const quoteText = randomQuote.quote
  quote.textContent = quoteText;
  const widget2 = document.querySelector('.quoteoftheday')
  widget2.appendChild(quote);
  //author and date
  const authorDate = document.createElement('div')
  const {author, date} = randomQuote;
  authorDate.textContent = `${author} in ${date || "an unknown date"}`;
  widget2.appendChild(authorDate);

  
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

  const randomNou = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNou2 = nouns[Math.floor(Math.random() * nouns.length)];

  const randomAdv = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomAdv2 = adverbs[Math.floor(Math.random() * adverbs.length)];

  const randomVer = verbs[Math.floor(Math.random() * verbs.length)];
  const randomVer2 = verbs[Math.floor(Math.random() * verbs.length)];

  const test = document.createElement('p');

  test.textContent = `We need to ${randomVer} our ${randomNou} ${randomAdv} in order to ${randomVer2} our ${randomNou2} ${randomAdv2}.`;
  const widget3 = document.querySelector('.corporatespeak');
  widget2.appendChild(test);               


  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  const test2 = document.createElement('p');
  let tMinus = 5;
  const widget4 = document.querySelector('.countdown')
  test2.textContent = `T-minus ${tMinus}...`
  widget4.appendChild(test2)

  setInterval(() => {

    if(tMinus === 1){
      test2.textContent = `Liftoff! 🚀`
    }else{
      tMinus--;
      test2.textContent = `T-minus ${tMinus}...`
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  const randomPerson = people[Math.floor(Math.random() * people.length)];
  const widget5 = document.querySelector('.friends');
  const test3 = document.createElement('p');
  widget5.appendChild(test3)
  const year = randomPerson.dateOfBirth.split('-')[0];
  let sentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${year} and `;
  
  if(!randomPerson.friends.length){
    sentence += `has no friends.`
  }else{
    sentence += 'is friends with '
    for(let i = 0; i < randomPerson.friends.length; i++){
      const friendId = randomPerson.friends[i];
      const friend = people.find(p => p.id === friendId)
      const fullName = `${friend.fname} ${friend.lname}`
      
      let isLastid = i === randomPerson.friends.length - 1;
      let isNextToLastId = i === randomPerson.friends.length - 2;
      if(isLastid){
        sentence += `${fullName}.`
      }else if(isNextToLastId){
        sentence += `${fullName} and ` 
      }else{
        sentence += `${fullName}, `
      }
    }
  }
  test3.textContent = sentence;




  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here



  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
