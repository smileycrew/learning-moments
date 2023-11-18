import "./Input.css"

export const Input = ({ setUserInput }) => {
    return (
        <div className="input-container">
            <input className="input"
                onChange={(event) => {
                    setUserInput(event.target.value)
                }}
                placeholder="Search Titles"
                type="text">
            </input>
        </div>
    )
}