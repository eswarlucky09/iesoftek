import { Types } from './action-types';


const fetchCardDetails = (payload) => ({
    type: Types.FETCH_CARD_DETAILS,
    payload
})

const sendCreditForm = (payload) => ({
    type: Types.SEND_CREDIT_FORM_DETAILS,
    payload
})
export {
    fetchCardDetails,
    sendCreditForm
}
