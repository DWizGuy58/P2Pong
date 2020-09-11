const handleKeyDown = (event) => {
  const code = event.keyCode;
  if (code == 37) {
    console.log("Left");
      // Do left key stuff
  } else if (code == 39) {
    console.log("Right");
      // Do right key stuff
  } 
}


export { handleKeyDown }