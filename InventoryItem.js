function InventoryItem({ name, type, quantity = 0, price = 0 }) {
    return (
        <div>
            <h2>{name} ({type})</h2>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price.toFixed(2)}</p>
            {quantity < 5 && (
                <Message>
                    <div style={{ color: "orange" }}>🚨 Low Stock Alert: Only {quantity} left!</div>
                </Message>
            )}
            {quantity * price > 1000 && (
                <Message>
                    <div style={{ color: "red" }}>💎 High Value Alert: This item is worth ${quantity * price.toFixed(2)}!</div>
                </Message>
            )}
        </div>
    );
}
