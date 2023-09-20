import React from 'react'

export const AddToDo = () => {
    return (
        <div className="container my-3"> 
        <h3>Add a Todo</h3>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" />
                        
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">ToDo Desc</label>
                    <input type="text" class="form-control" id="desc" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}
