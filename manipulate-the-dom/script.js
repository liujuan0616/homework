      let quotes = [
        `I live my life a quarter mile at a time`,
        `I said a ten-second car, not a ten-minute car`,
        `You can have any brew you want... as long as it's a Corona.`,
        `You almost had me? You never had me - you never had your car!`,
        `I don't have friends. I have family.`,
        `It don't matter if you win by an inch or a mile. Winning's winning.`
      ];

      document.addEventListener("DOMContentLoaded", function(event) {
        // Random quote of the day generator
        const randomQuote = function() {
          document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
        };
        randomQuote();
        
        // Do all of your work inside the document.addEventListener  

        // Part 1
      const mainTitleEl = document.getElementById('main-title')
      mainTitleEl.textContent = 'DOM Toretto Homepage'

        // Part 2
      document.querySelector('body').style.backgroundColor = '#77B7A4'

        // Part 3
      const favoriteThingsEl = document.getElementById('favorite-things')
      favoriteThingsEl.removeChild(favoriteThingsEl.children[5])

        // Part 4
      const special_title = document.querySelector('.special-title')
      for(let i=0; i<special_title.length; i++){
        special_title[i].style.fontSize =' 2rem'
      }
        
      // Part 5
      const pastRacesEl = document.getElementById('past-races')
      pastRacesEl.removeChild(pastRacesEl.children[3])



        // Part 6
      const li = document.createElement('li')
      pastRacesEl.appendChild(li)
      li.textContent='Yorktown'
        // Part 7

      const mainDiv = document.querySelector('.main')
      const newDiv = document.createElement('div')
      newDiv.setAttribute('class','blog-post purple')
      mainDiv.appendChild(newDiv)
      const header2 = document.createElement('h1')
      newDiv.appendChild(header2)
      header2.textContent = "Yorktown"
      const paragraph = document.createElement('p')
      paragraph.textContent='I drove my car across James River'
      newDiv.appendChild(paragraph)
      const domAdventureEl = document.getElementById('dom-adventures')
      domAdventureEl.insertAdjacentElement('afterend', newDiv)


        // Part 8
      const quoteTitleEl = document.querySelector('#quote-title')
      quoteTitleEl.addEventListener('click',function(event){
        randomQuote()
      })

        // Part 9
      const blogPosts = document.querySelectorAll('.blog-post')
      for(let i=0;i<blogPosts.length;i++){
        blogPosts[i].addEventListener('mouseenter',function(event){
          
            blogPosts[i].classList.toggle('purple')
        
          blogPosts[i].classList.toggle('red')
          
        })
        
        blogPosts[i].addEventListener('mouseout',function(event){
          
          
           blogPosts[i].classList.toggle('red')
          
          blogPosts[i].classList.toggle('purple')
        })
 }



});
