function Contact(){
    return(
        <div className="contact-page">
            <h1>Student Queries Form</h1>
            <div className="contact-box">
            <form>
                <label>Name:</label>
                <input type="text" placeholder="Enter name"/>
                <label>Dep:</label>
                <input type="text" placeholder="Enter department"/>
                <label>Year:</label>
                <input type="number" placeholder="Enter Year"/>
            </form>
            <button>Summit</button>
        </div>
        </div>
    );
}
export default Contact;