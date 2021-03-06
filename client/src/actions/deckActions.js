export const dealDeck = (trailDeck, supplyDeck) => {
    const newTrailDeck = trailDeck;
    const newTrailHand = [];
    const newSupplyDeck = supplyDeck;
    const newSupplyHand = [];

    while (newTrailHand.length < 5) {
      // Deal 5 Trail cards to Player Hand
      newTrailHand.push(newTrailDeck.pop());
      }

    // Removes 5 Trail cards from top of the Deck
    newTrailDeck.splice(0,5);

      console.log(newTrailDeck);
      console.log(newTrailHand);

    while (newSupplyHand.length < 8) {
      // Deal 8 Supply cards to Player Hand
      newSupplyHand.push(newSupplyDeck.pop());
      }

    // Removes 8 Supply cards from top of the Deck
    newSupplyDeck.splice(0,8);

    console.log(newSupplyDeck);
    console.log(newSupplyHand);

    // update the state variables accordingly
    return{
        type: "DEAL_DECK",
        trailDeck: newTrailDeck,
        trailHand : newTrailHand,
        supplyDeck: newSupplyDeck,
        supplyHand : newSupplyHand,
    }
  };  