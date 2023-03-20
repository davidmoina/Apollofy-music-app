export const formatTime = (timeInSeconds:number):string => {

   let minutes = Math.floor(timeInSeconds / 60);
   let seconds = Math.floor(timeInSeconds % 60);
   let formattedSeconds = seconds.toString().padStart(2, "0");
   
   return `${minutes}:${formattedSeconds}`;

}