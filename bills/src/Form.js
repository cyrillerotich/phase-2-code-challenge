function Form(){
    return(
        <>
     <p>ADD NEW TRANSACTION </p>
     <form>
    <label htmlFor="Descp">Description</label><br/>
    <input type="text" name="Descp"></input><br/>
    <label htmlFor="Cat">Category</label><br/>
    <input type="text" name="Cat"></input><br/>
    <label htmlFor="Dat">Date</label><br/>
    <input type="date" name="Dat"></input><br/>
    <label htmlFor="Amt">Amount</label><br/>
    <input type="number" ></input><br/>
    <button>submit</button>
     </form>
     </>
    )
}
export default Form
