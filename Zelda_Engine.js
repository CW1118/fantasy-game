//board is 9x9 so 81 spaces
const board_Size 81;
const rows sqrt(board_Size);
const cols sqrt(board_Size);
const initialX 5;
const initialY 9;
var walkingSpaces[board_Size];
var x, y;

class player(initialX, initialY)
{
  function init()
  {
    self.x = initialX;
    self.y = initialY;
    /*println(getPlayerIndex());
    document.write(getPlayerIndex());
    document.write(getPlayerX());
    document.write(getPlayerY());*/
    println("output of println");
    document.write("output of doc.write");
  }


  function getPlayerIndex()
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

  function getPlayerX()
  {
    var x = getPlayerIndex() % 9;
    return x;
  }

  function getPlayerY()
  {
    var y = floor(getPlayerIndex()/9);
    return y;
  }

}

function print_test()
{
  println("output of println");
  document.write("output of document.write");
  document.getElementById("printTest").innerHTML = "output of getElementById";
  //git@githup.com:CW1118/fantasy-game.git
}

protagonist = player(initialX, initialY);