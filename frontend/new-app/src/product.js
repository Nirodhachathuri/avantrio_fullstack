// Filename - App.js

import React, { useState } from "react";
import Picker from "emoji-picker-react";

function Product() {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log(emojiObject.target);
    };

    return (
      <div className="Product">
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
      </div>
    );
  }
  
  export default Product;
  