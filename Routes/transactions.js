import express from "express"; 
import { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction} from "../Controllers/transactionController.js"

const router = express.Router(); 

// Get All transactions 
router.get("/", getTransactions);


// Get single transaction 
router.get("/:id", getTransaction);

// Create a transactions 
router.post("/", createTransaction);

// Update a transaction 
router.put("/:id", updateTransaction)

// Delete a transaction
router.delete("/:id", deleteTransaction)


export default router;