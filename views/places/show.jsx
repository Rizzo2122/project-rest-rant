const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic}/>
                <h2>Rating</h2>
                <h4>Not Rated</h4>
                <h2>Description</h2>
                <h4>Located in {data.place.city}, {data.place.state}, and serving {data.place.cuisines}</h4>
                <h2>Comments</h2>
                <h4>No Comments</h4>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>     
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>      
            </main>
        </Def>
    )
}

module.exports = show

