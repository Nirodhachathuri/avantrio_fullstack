
import './App.css';


import React, { useEffect, useState } from "react";
import Picker from "emoji-picker-react";
import axios  from "axios"

function App() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [emojis, setEmojis] = useState([]);
 
  const onEmojiClick = (event, emojiObject) => {
        
        // setEmojis([...emojis, setChosenEmoji(emojiObject)]);
        setEmojis(emojis => [...emojis, setChosenEmoji(emojiObject)]);
        console.log(emojis)
    };
    console.log(emojis);

    
   function handleSubmit(){
    useEffect(() => {
      axios.post("http://localhost:4000")
      .then(res => {
        console.log(res)
      })
    })

   }
    return (

      <div className="Product">
        <form onSubmit={handleSubmit}>
            <h3>
              Emoji picker/composer
            </h3>
            {chosenEmoji ? (
                    <span>
                        Your Emoji:
                        <img
                            style={{ width: "15px" }}
                            src={chosenEmoji.target.src}
                        />
                    </span>
                ) : (
                    <span>No Emoji</span>
                )}
            <Picker onEmojiClick={onEmojiClick} />
            <input type="submit" value="Submit" />
        </form>
       

       
      </div>
    );

   
    
}

export default App;
