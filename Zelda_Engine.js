//board is 9x9 so 81 spaces
const board_Size  = 81;
const rows = 9;
const cols = 9;
var initialX = 5;
var initialY = 9;
const player_ID = "player";
var walkingSpaces = [board_Size];

walkingSpaces = generateStart(initialX, initialY);

class player
{
  constructor()
  {
    
    
  }


  get PlayerIndex()
  {
    var i;
    for (i = 0; i < board_Size; i++)
    {
      if(walkingSpaces[i] == player_ID)
      {
        return i;
      }
    }
  }

  set playerCoords(dir)
  {
    switch(dir)
    {
      case "UP":
      walkingSpaces[PlayerIndex()] = "None";
      walkingSpaces[PlayerIndex() - 9] = player_ID;
      break;
      default:
      document.write("Whoops");
    }
  }
}


function printTest()
{
  document.write(protagonist.PlayerIndex);
  protagonist.playerCoords("UP");
  document.write(protagonist.PlayerIndex);
}

let protagonist = new player()

//document.getElementById(printTest).innerHTML = protagonist.PlayerX();
