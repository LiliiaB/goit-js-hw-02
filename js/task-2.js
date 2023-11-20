function formatMessage(message, maxLength) {
    let totalPrice = quantity * pricePerDroid;
    return totalPrice > customerCredits ? "Insufficient funds!" : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
   }