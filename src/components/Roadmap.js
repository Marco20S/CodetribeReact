
const Rawdata=
 [
    {
        first: "Launching",
        second: <li> "pepechain beta release"</li>
    },

    {
        first: "Stability",
        second:" pepechain beta release"
    }, 

    {
        first: "sustainable Growth",
        second:" pepechain beta release"
    },

    {
        first: "Infinity and Beyond",
        second:"Token redesign"
    },



 ]

function Table(){
    return(

        <section>

            <div className="col-md-12 text container">

            <h2 color='green'> Roadmap </h2>
                <h3> HOW IT ALL STARTED</h3>

            </div>

        
        <table>

            <tread>

                <tr>
                    <th>
                        first
                    </th>

                    <th>
                        second
                    </th>
                </tr>
                { Rawdata.map((val, key) => {
                    return(
                        <tr key={key}>
                            <td> val.first</td>
                            <td> val.second</td>

                           
                        </tr>

                )})}


            </tread>


        </table>
        </section>



    )

}

export default Table