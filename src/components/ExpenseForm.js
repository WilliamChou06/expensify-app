import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";


export default class ExpenseForm extends React.Component{
   state = {
            description: this.props.expense ? this.props.expense.description : "",
            note: this.props.expense ? this.props.expense.note : "",
            amount: this.props.expense ? String(this.props.expense.amount / 100) : "",
            createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        createdAt && this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: "Please provide description and amount."}));
        } else{
            this.setState(() => ({error: ""}));
            console.log("submitted");
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render(){
        console.log(this.props)
        return (
            <div className="content-container">
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input className="text-input" type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input className="text-input" type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker 
                        date={this.state.createdAt} onDateChange={this.onDateChange} 
                        focused={this.state.calendarFocused}onFocusChange={this.onFocusChange}
                        numberOfMonths={1} 
                        isOutsideRange={() => false }
                    />
                    <textarea className="textarea" placeholder="Add a note for your expense" value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <div>
                        <button className="addExpenseBtn">{this.props.expense ? "Edit" : "Add"} Expense</button>
                    </div>
                </form>
            </div>
        )
    }
}