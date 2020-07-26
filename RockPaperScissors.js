function computerPlay()
        {
            let index = Math.floor(Math.random()* 3);
            let array = ["ROCK","PAPER", "SCISSORS"];
            
            return array[index];
        }   

        function playRound(playerSelection,computerPlay)
        {
            if (playerSelection.toUpperCase()==computerPlay)
                return `Welp, Its a Tie! Both chose ${computerPlay}`;
            
            else if(playerSelection.toUpperCase() == "ROCK" && computerPlay == "PAPER")
                return `Sorry! ${computerPlay} beats ${playerSelection.toUpperCase()}`;
            
            else if(playerSelection.toUpperCase() == "SCISSORS" && computerPlay == "ROCK" )
            return `Sorry! ${computerPlay} beats ${playerSelection.toUpperCase()}`;
            
            else if(playerSelection.toUpperCase() == "PAPER" && computerPlay == "SCISSORS")
            return `Sorry! ${computerPlay} beats ${playerSelection.toUpperCase()}`;

            else
                return `EXCELSIOR! ${playerSelection.toUpperCase()} beats ${computerPlay} `;
            
        }
        
        function getName()
        {
            return prompt("What's Your Name?","HOOMAN");
        }

        function game(rounds)
        {   
            const name = getName();
            let pscore = 0 ,cscore = 0, match;

            for( var count = 1; count<Number(rounds); count ++)
            {
                match = playRound(prompt("Rock, Paper, Scissors!!"),computerPlay());
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

