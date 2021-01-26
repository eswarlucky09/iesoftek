import { Types } from "../actions/action-types";

const initialState = {
    creditDetailsList: [
        {
          "name": "user1",
          "city": "city1",
          "salary": "100000",
          "card": "card1"
        },
        {
          "name": "user2",
          "city": "city2",
          "salary": "200000",
          "card": "card2"
        },
        {
          "name": "user3",
          "city": "city3",
          "salary": "300000",
          "card": "card1"
        },
        {
          "name": "user4",
          "city": "city4",
          "salary": "400000",
          "card": "card1"
        },
        {
          "name": "user5",
          "city": "city5",
          "salary": "500000",
          "card": "card5"
        },
        {
          "name": "user6",
          "city": "city6",
          "salary": "600000",
          "card": "card5"
        },
        {
          "name": "user7",
          "city": "city7",
          "salary": "700000",
          "card": "card7"
        },
        {
          "name": "user8",
          "city": "city8",
          "salary": "800000",
          "card": "card5"
        }
      ]
}
const reducer = (state = initialState, action) => {
    // console.log('Types', Types)
    switch (action.type) {

        case Types.SEND_CREDIT_FORM_DETAILS:
            return {
                ...state,
                creditDetailsList: [...state.creditDetailsList, action.payload],
            }
        default:
            return {
                ...state
            }
    }
    // return state
}
export default reducer