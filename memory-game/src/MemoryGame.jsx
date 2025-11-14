import React, { useEffect, useState } from "react";
import "./MemoryGame.css";

let buildGrid = () => {
  let arr = new Array(36);
  let start = 1;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor((i + 2) / 2);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  for (let i = 0; i < arr.length; i++) {
    let id = arr[i];
    arr[i] = {
      id: id,
      isFlipped: false,
    };
  }
  return arr;
};

function MemoryGame() {
  const [cards, setCards] = useState(buildGrid());
  const [isLock, setisLock] = useState(false);
  const [openCards, setOpenCards] = useState([]);
  const [turns, setTurns] = useState(0);
  let handleFlip = (idx) => {
    if (isLock || cards[idx].isFlipped) {
      return;
    }
    setCards((prev) =>
      prev.map((item, i) => {
        return i == idx ? { ...item, isFlipped: true } : item;
      })
    );
    setOpenCards((prev) => {
      return [...prev, idx];
    });
  };
  useEffect(() => {
    if (openCards.length == 2) {
      setTurns((prev) => prev + 1);
      setisLock(true);
      if (cards[openCards[0]].id === cards[openCards[1]].id) {
        setOpenCards([]);
        setisLock(false);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((item, idx) =>
              idx === openCards[0] || idx === openCards[1]
                ? { ...item, isFlipped: false }
                : item
            )
          );
          setisLock(false);
          setOpenCards([]);
        }, 2000);
      }
    }
  }, [openCards]);
  return (
    <>
      <div className="main">
        <div className="cards">
          {cards.map((item, idx) => {
            return (
              <div className="card" key={idx} onClick={() => handleFlip(idx)}>
                {item.isFlipped ? item.id : "?"}
              </div>
            );
          })}
        </div>
        <h2>Turns : {turns}</h2>
      </div>
    </>
  );
}

export default MemoryGame;
