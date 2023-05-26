import React,{useState} from "react"



function Facts(){

    const [show,setShow] = useState(true)

    return(
    <div className="woah">
        <table>

        <td>
            <tr><h1>FAQs</h1></tr>
            <tr>

        <h3>I sold an pepechain, where's my BNB</h3>
        {show?<p> Pepechain and BNB are both cryptocurrency so its possible that you sold PEPECHAIN for BNB on a cryptocurrency exchange. \n
            if that's the case, you should check your account on the exchange the see if that BNB has been deposited was a delay in the in the transaction or an issue /n
            with the exchange . you may need to contact their customer support team for assistance.
        </p>:null}

        <button onClick={()=> setShow(!show)}>Details</button>


           </tr>

           <tr>

            <h3> How can I list my pepechain collection on the market</h3>
            {show?<p> Pepechain and BNB are both cryptocurrency so its possible that you sold PEPECHAIN for BNB on a cryptocurrency exchange. \n
                if that's the case, you should check your account on the exchange the see if that BNB has been deposited was a delay in the 
            </p>:null}
            {/* <button onClick={()=> setShow(true)}>Show</button>
            <button onClick={()=> setShow(false)}>Hide</button> */}

        <button onClick={()=> setShow(!show)}>Details</button>



   </tr>

   <tr>

            <h3>I sold an pepechain, where's my BNB</h3>
            {show?<p> Pepechain and BNB are both cryptocurrency so its possible that you sold PEPECHAIN for BNB on a cryptocurrency exchange. \n
                if that's the case, you should check your account on the exchange the see if that BNB has been deposited was a delay in the 
            </p>:null}

            <button onClick={()=> setShow(!show)}>Details</button>


   </tr>
        
        </td>



        </table>
    </div>



    )
}