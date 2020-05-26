class Body extends React.Component{
    state = {

    }

    render(){
        return (
            <form className="w-100 h-100">
                <div className="form-group w-100 h-100">
                    <textarea style={{borderStyle: "none", borderTop: "1px solid black"}} className="form-control h-100" id="body" placeholder="Body" />
                </div>
            </form>
        )
    }

}

export default Body;