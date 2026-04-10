let transactions = [
  {
    id: 1,
    merchant: "Zara",
    price: 325.69,
    date: new Date("2026-04-10"),
  },
  {
    id: 2,
    merchant: "Amazon",
    price: 28.97,
    date: new Date("2026-04-05"),
  },
  {
    id: 3,
    merchant: "Uniqlo",
    price: 125.26,
    date: new Date("2026-4-10"),
  },
];


// @desc Get all transactions 
// @route GET /api/transactions
export const getTransactions = (request, response, next) => {
    return response.status(200).json(transactions);
};


// @desc Get a single transaction 
// @route GET /api/transactions
export const getTransaction = (request, response, next) => {
    const id = parseInt(request.params.id); 

    const transaction = transactions.find((transaction) => transaction.id === id);

    if (!transaction) {
        const error = new Error('transaction was not found'); 
        error.status = 404; 
        next(error);
    }

    response.status(200).json(transaction);
};

// @desc Create transaction 
// @route POST /api/transaction 
export const createTransaction = (request, response, next) => {
    const newTransaction = {
        id: transactions.length + 1, 
        merchant: request.body.merchant, 
        price: request.body.price, 
        date: new Date()
    }; 

    if (
      newTransaction.price === null ||
      Number.isNaN(newTransaction.price) ||
      newTransaction.price < 0
    ) {
      const error = new Error("Please enter a valid price");
      error.status = 400;
      return next(error);
    } 

    if(!newTransaction.merchant || !newTransaction.merchant.length < 0) {
          const error = new Error("Please enter a valid merchant");
          error.status = 400;
          return next(error);
    }

    transactions.push(newTransaction);
    response.status(201).json(transactions);
};