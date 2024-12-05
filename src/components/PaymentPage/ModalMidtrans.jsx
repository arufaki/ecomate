const ModalMidtrans = () => {
    

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Payment Gateway</h2>
                <button onClick={handlePayment}>Pay Now</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ModalMidtrans;
