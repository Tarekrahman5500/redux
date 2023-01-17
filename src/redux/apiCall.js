import {updateError, updateStart, updateSuccess} from "./userSlice.js";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart())
    try {
        const result = await axios.post("http://localhost:5000/api/users/123/update", user)
        dispatch(updateSuccess(result.data))
    } catch (err) {
        dispatch(updateError())
    }
}