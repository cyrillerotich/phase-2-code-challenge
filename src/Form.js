import React, { useState } from "react"
function Form({handleAddTransaction}) {
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")

    function handleSubmit(e){
      e.preventDefault()

      const formData = {
        date:date,
        description:description,
        category:category,
        amount:amount
      }
      handleAddTransaction(formData)
    }
    return (
        <>
            <p>ADD NEW TRANSACTION </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Descp">Description</label><br />
                <input value={description} type="text" name="Descp" onChange={(e) => { setDescription(e.target.value) }}></input><br />
                <label htmlFor="Cat">Category</label><br />
                <input value={category} type="text" name="Cat" onChange={(e) => { setCategory(e.target.value) }}></input><br />
                <label htmlFor="Dat">Date</label><br />
                <input value={date} type="date" name="Dat" onChange={(e) => { setDate(e.target.value) }}></input><br />
                <label htmlFor="Amt">Amount</label><br />
                <input value={amount} type="number" onChange={(e) => { setAmount(e.target.value) }}></input><br />
                <button>submit</button>
            </form>
        </>
    )
}
export default Form
