const menuLinks = [
    { text: 'about', href: '/about' },
    {
      text: 'catalog', href: '#', subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
      ]
    },
    {
      text: 'orders', href: '#', subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
      ]
    },
    {
      text: 'account', href: '#', subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
      ]
    },
  ];
  const mainEl = document.querySelector('main')
  mainEl.style.backgroundColor = "var(--main-bg)"
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
  mainEl.classList.add('flex-ctr')

  const topMenuEl = document.getElementById('top-menu')
  topMenuEl.style.height = '100%'
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
  topMenuEl.classList.add('flex-around')
  menuLinks.forEach(link => {
    const linkEl = document.createElement('a')
    linkEl.setAttribute('href', link.href)
    linkEl.textContent = link.text
    topMenuEl.appendChild(linkEl)
  })
  const subMenuEl = document.getElementById('sub-menu')
  subMenuEl.style.height = '100%'
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
  subMenuEl.classList.add('flex-around')
  subMenuEl.style.position = 'absolute'
  subMenuEl.style.top = 0
  const topMenuLinks = document.querySelectorAll('#top-menu a')
  let showingSubMenu = false
  
  topMenuEl.addEventListener('click', function(event) {
    event.preventDefault()

    if (event.target.tagName !== 'A') {
      return
    }
   // console.log(event.target.textContent)
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active')
      showingSubMenu = false
      subMenuEl.style.top = '0'
      return
    }
    let linkObject 
    topMenuLinks.forEach(link => { link.classList.remove('active') })
    event.target.classList.add('active')
       for (let link of menuLinks){
        if(event.target.textContent === link.text){
            if(link.subLinks){
            showingSubMenu = true
            
            }
            else {
                showingSubMenu = false
                mainEl.innerHTML = `<h1>${link.text}</h1>`
        }
        linkObject = link
        }
}
  

    
        const buildSubMenu = function(subLinks){
        
        subMenuEl.innerHTML = ''
        subLinks.forEach((subLink) => {
            const subLinkEl = document.createElement('a')
            subLinkEl.setAttribute('href',subLink.href)
            subLinkEl.textContent = subLink.text
            subMenuEl.appendChild(subLinkEl)
            
          })

        }
    
        if(showingSubMenu){
            buildSubMenu(linkObject.subLinks)  
            subMenuEl.style.top='100%'    
        }
        else{
           subMenuEl.style.top ='0'
       }
    })
  
  

  subMenuEl.addEventListener('click', function(event){
    event.preventDefault()
    if(event.target.tagName!=='A')
    return
//console.log(event.target.textContent)

    showingSubMenu=false
    subMenuEl.style.top = '0'
    topMenuLinks.forEach(link=>link.classList.remove('active'))
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`
}) 
  





