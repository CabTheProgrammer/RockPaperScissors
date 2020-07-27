// Global variable for Player Selection; changed by script in index
let pSelect, cSelect;
//Variables for score
let pscore = 0 ,cscore = 0;
//lenght of match
let match_lenght = 0;
//THis is for the playbys
let playby = document.createElement('div')
   
    // Function to update scores on "scoreboard"
    
      function computerPlay()
        {
            let index = Math.floor(Math.random()* 3);
            let array = ["ROCK","PAPER", "SCISSORS"];
            
            return array[index];
        }   

        function playRound(playerSelection,computerPlay)
        {
            pSelect = playerSelection;
            cSelect = computerPlay;

            playby.textContent = `${pname} chose ${pSelect}  Computer chose ${cSelect}`;
            if (rounds >= match_lenght)
            {
                alert("Session Finished! Please  start a new Match");

                if (pscore > cscore)
                alert(`EXCELSIOR! ${pname} won!` );
                else if(cscore > pscore)
                alert('Aww, The Robots win');
                else
                alert(`Yay! Its... a tie?`);
                return;

            }
            
            if (playerSelection.toUpperCase()==computerPlay)
               { 
                pscore += 1;
                cscore += 1;   
                rounds += 1;
                ScoreUpdate(pscore,cscore);
                return `Welp, Its a Tie! Both chose ${computerPlay}`;
               }
            
            else if(playerSelection.toUpperCase() == "ROCK" && computerPlay == "PAPER")
                {   cscore += 1;
                    rounds += 1;
                    ScoreUpdate(pscore,cscore);
                    return `Sorry! ${computerPlay} beats ${playerSelection.toUpperCase()}`;
                }            
            else if(playerSelection.toUpperCase() == "SCISSORS" && computerPlay == "ROCK" )
           {
            cscore += 1; 
            rounds += 1; 
            ScoreUpdate(pscore,cscore); 
            return `Sorry! ${computerPlay} beats ${playerSelection.toUpperCase()}`;
           }
            
            else if(playerSelection.toUpperCase() == "PAPER" && computerPlay == "SCISSORS")
            {
                cscore += 1;
                rounds += 1;
                ScoreUpdate(pscore,cscore);
                return `Sorry! ${computerPlay} beats ${playerSelection.toUpperCase()}`;
            }

            else
                {
                    pscore += 1;
                    rounds += 1;
                    ScoreUpdate(pscore,cscore);
                    return `EXCELSIOR! ${playerSelection.toUpperCase()} beats ${computerPlay} `;
                }
            
        }
        
        function getName()
        {
            return prompt("What's Your Name?","HOOMAN");
        }

        function game(rounds)
        {   let match           

            for( var count = 1; count<Number(rounds); count ++)
            {
                match = playRound(pSelect,computerPlay());
                console.log(match);

                if (match.charAt(0) == "W")
                {
                    cscore = cscore + 1;
                    pscore = pscore + 1;
                }

                else if(match.charAt(0)== "S")
                    cscore = cscore + 1;
                else
                    pscore = pscore + 1;

            }
            
            //results
            if(pscore>cscore)
                console.log("Congrats! You win!")
            else if(pscore == cscore)
                console.log("It's a Tie!");
            else
                console.log("Aww, you lost :(");

            console.log("SCORE: ")
            console.log(`COMPUTER: ${cscore}`)
            console.log(`${name}: ${pscore}`)
            

        }
        // const playerSelection = "rock";
        // const computerplay = computerPlay();
        // console.log(playRound(playerSelection,computerplay));

