import React, { useState } from 'react'

export default function About(props) {
    const [myStyle, setMyStyle] = useState(
        {
            color:"black",
            backgroundColor: "white"
        });

    const [btnText, setBtnText] = useState("Enable Dark Mode");
    // const [btnColor, setBtnColor] = useState(
    //        {
    //         backgroundColor: "white",
    //         color:"black",
    //         border:"1px solid black"
    //        }
    //     );



    const toggleStyle = () =>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:"white",
            backgroundColor: "black"
            })
            setBtnText("Enable Light Mode");
            // setBtnColor({
            //     backgroundColor: "black",
            //     color: "white",
            //     border:"1px solid white",
                

            // })
        }
        else{
            setMyStyle({
                color:"black",
            backgroundColor: "white"
            })
            setBtnText("Enable Dark Mode");
            // setBtnColor({
            //     backgroundColor: "white",
            //     color: "black",
            //     border:"1px solid black",
                

            // })

        }
    }        

  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}>About Us</h2>
            <div className="accordion" style={{backgroundColor:props.mode==='dark'?'white':'black'}} id="accordionExample" >
        <div className="accordion-item">
            <h2 className="accordion-header" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
            <button className="accordion-button" type="button" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code style={{color:'blue'}}>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code style={{color:'blue'}}>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code style={{color:'blue'}}>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        {/* <button type="button" onClick={toggleStyle} className="btn btn-dark my-3" style={{color:props.mode==='dark'?'white':'black'}}>{btnText}</button> */}
    </div>
  )
}
