
function createGame(player1,hour,player2){
  return `<li>
              <img src="./assets/${player1}.svg" alt="Bandeira da ${player1} ">
              <strong>${hour}</strong>
              <img src="./assets/${player2}.svg" alt="Bandeira de ${player2} ">
           </li>`
}

let delay = -0.3;
function createCard(date,day,games){
  delay = delay + 0.3;
  return `<div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
            <ul>
               ${games}
            </ul>
       </div>
  `
}


document.querySelector("#cards").innerHTML = 
  createCard(
    "24/11",
    "quinta",
    createGame("brasil", "16:00", "serbia") +
      createGame("switzerland", "7:00", "cameroon")
  )+
  createCard(
     "28/11",
     "segunda",
    createGame("brasil", "13:00", "switzerland") +
    createGame("portugal", "13:00", "ghana")
   ) +
  createCard("02/12", "sexta", 
  createGame("brasil", "16:00", "cameroon") +
  createGame("uruguay", "10:00", "southKorea"))
  
