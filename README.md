# TimeStamp API - freecodecamp
 
 ## usage:
 ### input: 
`https://gettimestamp.glitch.me/[human readable date| unix date in seconds]`

 **example**: 
 * [https://gettimestamp.glitch.me/December%2015,%202015](https://gettimestamp.glitch.me/December%2015,%202015)
 * [https://gettimestamp.glitch.me/1450137600](https://gettimestamp.glitch.me/1450137600)

   
        
 ### response:
   * **if VALID**: `{unix: unix in seconds , natural: Month day, year}` 
   * **else**: `{unix: null , natural: null}`
   
      **example**: `{ "unix": 1450137600, "natural": "December 15, 2015" }`
