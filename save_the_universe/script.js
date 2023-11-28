class UsSpacesships{
    constructor(){
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
        this.damage = 0
        
    }
  
    attack(alien){
        console.log('You are attacking the alien')
        if (this.accuracy > Math.floor(Math.random()*1.4*10)/10){
            console.log('You HIT the alien!');
            alien.hull-=this.firepower
            this.damage++
        }
      else{
        console.log('You miss')
      }
    }
     
      
  }
  
  class Alienships{
    constructor(){
      this.hull = Math.floor(Math.random() * 4) + 3;
      this.firepower = Math.floor(Math.random() * 3) + 2;
      this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
      
    }
    attack(usShip){
        if(this.accuracy >Math.floor(Math.random()*1.4*10)/10){
            console.log('the alien HIT you!')
            usShip.hull-=this.firepower
        }
      else{
        console.log('miss')
    }
    
  }
  }
  
  const btn = document.getElementById('start')
  

  let aliens = [];
  let usSpaceship;
  
  const initializeGame = function(){

   aliens =[]
  for (let i=0;i<6;i++){
    aliens[i] = new Alienships();
  }
  console.log(aliens)
   usSpaceship= new UsSpacesships();
}
  
  const game = function(){
  initializeGame();
  while (aliens.length>0){
    btn.classList.toggle('hidden')
    const alienNum = window.prompt(`there has ${aliens.length} alien ships, which alien ship do you want to attack`)
    if(alienNum === '1'){
       
    }
    else if (alienNum === '2'){
     const alienAttacking = aliens[1]
     aliens.splice(1,1)
     aliens.unshift(alienAttacking)
    }
    else if (alienNum === '3'){
        const alienAttacking = aliens[2]
        aliens.splice(2,1)
        aliens.unshift(alienAttacking)
       }
    else if (alienNum === '4'){
        const alienAttacking = aliens[3]
        aliens.splice(3,1)
        aliens.unshift(alienAttacking)
       }
    else if (alienNum === '5'){
        const alienAttacking = aliens[4]
        aliens.splice(4,1)
        aliens.unshift(alienAttacking)
       }
    else if (alienNum === '6'){
        const alienAttacking = aliens[5]
        aliens.splice(5,1)
        aliens.unshift(alienAttacking)
       }
   console.log(aliens)

    while(usSpaceship.hull>0&&aliens[0].hull>0){
  
        usSpaceship.attack(aliens[0])
        if (aliens[0].hull>0){
        aliens[0].attack(usSpaceship)
          console.log( usSpaceship.hull)
          console.log(aliens[0].hull)
    }
  }
    console.log(usSpaceship.hull)
    console.log(aliens[0].hull)
  if (usSpaceship.hull <=0){
    alert('Game Over');
    
    btn.textContent='restart'
    
    break;

  }

  else if(aliens[0].hull<=0){
    if (aliens.length!==1){
    aliens.shift()
    }
    else{
        alert('You Win')
        btn.textContent='restart'
        
        break;
    }
    const status = window.prompt('do you want to retreat or continue')
    if (status === 'retreat')
    {
        alert('Game over')
        btn.textContent='restart'
        
        break
    }
    else if(status ==='continue'){
        continue;
    }
    
    
  }
  
  
  
  }
}

 btn.addEventListener('click',game)
 