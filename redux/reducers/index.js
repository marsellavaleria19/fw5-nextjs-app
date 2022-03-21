import { combineReducers } from "redux";
import registration from "./registration";
import forgotPassword from "./forgotPassword";
import auth from "./auth"
import user from "./user";
import transaction from "./transaction";
import phone from "./phone"
import changePassword from "./changePassword";
import changePin from "./changePin";

const rootReducer = combineReducers({
    registration,
    forgotPassword,
    auth,
    user,
    transaction,
    phone,
    changePassword,
    changePin
})

export default rootReducer