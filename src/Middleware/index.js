import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import logger from "../Middleware/Logger";

export default applyMiddleware(thunk, logger);
