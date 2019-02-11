
function generateStart(initialX, initialY)
{
  var walkingSpaces = [81];
  var i;
  for (i = 0; i < board_Size; i++)
  {
    if((initialX == (i % 9)) && (initialY == Math.ceil(i/9)))
    {
      walkingSpaces[i] = player_ID;
    }else{
      walkingSpaces[i] = "None";
    }
  }
  return walkingSpaces;
}