import express from "express";
import path from "path";
import url from "url";
import users from "./Routes/users.js";
import transactions from "./Routes/transactions.js"
import logger from "./Middleware/logger.js";
import errorHandler from "./Middleware/error.js";
import notFound from "./Middleware/notFound.js";

const port = process.env.port || 8000;

const __filename = url.fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);


// setup static folder 
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use("/api/users", users);
app.use("/api/transactions", transactions)




// Error Handler middleware 
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server is running on port ${port}`));
