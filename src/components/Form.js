import React from 'react'

function Form(props) {
    const update = e => {
        props.update(e);
    }
    const getValue = e => {
        props.getValue(e);
    }
    console.log(props)
    return (
        <div className="col-12 justify-content-center d-flex">
            <form onSubmit={getValue}>
                <div className="form-group">
                    <input id="search-bar" type="text" className="md-form form-control form-control-sm mt-2" value={props.searchValue} onChange={update} />
                    <div className="justify-content-center d-flex">
                        <button id="btn" className="btn btn-outline-dark btn-sm mt-1" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
