import moment from "moment";

export default [
    {
        id:"1",
        description: "Gum",
        note: "Tasty!",
        amount: 195,
        createdAt: 0
    },
    {
        id:"2",
        description: "Rent",
        note: "Need a place to live",
        amount: 150000,
        createdAt: moment(0).subtract(4, "days").valueOf()
    },
    {
        id:"3",
        description: "Credit Card",
        note: "Too much credit",
        amount: 4500,
        createdAt: moment(0).add(4, "days").valueOf()
    }
]