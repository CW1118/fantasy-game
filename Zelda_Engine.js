//board is 9x9 so 81 spaces
const board_Size  = 81;
const rows = Math.sqrt(board_Size);
const cols = Math.sqrt(board_Size);
const initialX = 5;
const initialY = 9;
const player_ID = "player";
var walkingSpaces = [board_Size];
var x, y;

function generateStart()
{
  var i;
  for (i = 0; i < board_Size; i++)
  {
    if(initialX == i%rows && initialY == Math.floor(board_Size/cols))
    {
      walkingSpaces[i] = player_ID;
    }else{
      walkingSpaces[i] = "None";
    }
  }
}

class player
{
  constructor(initialX, initialY)
  {
    this.x = initialX;
    this.y = initialY;
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

  get PlayerX()
  {
    var x = PlayerIndex() % 9;
    return x;
  }

  get PlayerY()
  {
    var y = Math.floor(PlayerIndex()/9);
    return y;
  }

}


function printTest()
{
  document.write(protagonist.PlayerIndex());
}

generateStart();
let protagonist = new player()

//document.getElementById(printTest).innerHTML = protagonist.PlayerX();
