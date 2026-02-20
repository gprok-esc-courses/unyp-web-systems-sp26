
function Saved({ saved }) {

    return (
        <>
            <h3>SAVED JOKES</h3>

            <table>
                {
                    saved.map(element => (<tr><td>{element}</td></tr>))
                }
            </table>
        </>
    )

}

export default Saved;