//board is 9x9 so 81 spaces
const board_Size  = 81;
const rows = 9;
const cols = 9;
var initialX = 5;
var initialY = 9;
const player_ID = "player";
var walkingSpaces = [board_Size];
var x, y;

function generateStart()
{
  var i;
  for (i = 0; i < board_Size; i++)
  {
    if((initialX == (i % rows)) && (initialY == Math.ceil(i/cols)))
    {
      walkingSpaces[i] = player_ID;
    }else{
      walkingSpaces[i] = "None";
    }
  }
}

class player
{
  constructor(initialX, initialY, walkingSpaces)
  {
    this.x = initialX;
    this.y = initialY;
    this.walkingSpaces = walkingSpaces;
  }


  get PlayerIndex()
  {
    var i;
    for (i = 0; i < board_Size; i++)
    {
        console.log(walkingSpaces[i]);
      if(walkingSpaces[i] == player_ID)
      {
        return i;
      }
    }
  }

  get PlayerX()
  {
    var x = (PlayerIndex() % 9);
    return x;
  }

  get PlayerY()
  {
    var y = (Math.floor(PlayerIndex()/9));
    return y;
  }

}


function printTest()
{
  document.write(protagonist.PlayerIndex);
<<<<<<< HEAD
=======
  document.write(protagonist.PlayerX);
  document.write(protagonist.PlayerY);

>>>>>>> 14c8f29b695b1a905d0f6df7257cf2d007c66fff
}

generateStart();
let protagonist = new player();

//document.getElementById(printTest).innerHTML = protagonist.PlayerX();
