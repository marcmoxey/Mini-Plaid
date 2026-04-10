import express from "express"; 
import { getTransactions, getTransaction, createTransaction } from "../Controllers/transactionController.js"

const router = express.Router(); 

// Get All transactions 
router.get("/", getTransactions);


// Get single transaction 
router.get("/:id", getTransaction);

// Create a transactions 
router.post("/", createTransaction);


export default router;