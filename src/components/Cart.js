import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {deleteBuild} from "../actions/builderActions"
import Fade from "react-reveal"
import Button from "react-bootstrap/Button"
import {Chart} from "react-chartjs-2"
import "./Builder.css"

const Cart = () => {
    const [showExpand, setShowExpand] = useState(false)
    const [expandID, setExpandID] = useState("")
    const [showDriverSpecs, setShowDriverSpecs] = useState(true)
    const [showKartSpecs, setShowKartSpecs] = useState(true)
    const [showTireSpecs, setShowTireSpecs] = useState(true)
    const [showGliderSpecs, setShowGliderSpecs] = useState(true)
    const combos = useSelector(state => state.builderReducer.comboArr)
    const dispatch = useDispatch()
    const reversedCombos = combos.map(item => item).reverse();
    const handleExpandBuild = (e, id) => {
        e.preventDefault()
        setShowExpand(true)
        setExpandID(id)
        setShowDriverSpecs(true)
        setShowKartSpecs(true)
        setShowTireSpecs(true)
        setShowGliderSpecs(true)
    }
    const handleShrinkBuild = (e) => {
        e.preventDefault()
        setShowExpand(false)
        setExpandID("")
    }

    const handleDriverSpecs = () => {
        setShowDriverSpecs(!showDriverSpecs)
    }

    const handleKartSpecs = () => {
        setShowKartSpecs(!showKartSpecs)
    }

    const handleTireSpecs = () => {
        setShowTireSpecs(!showTireSpecs)
    }

    const handleGliderSpecs = () => {
        setShowGliderSpecs(!showGliderSpecs)
    }

    return (
    <>
    <Fade top>
        <div className="container">
            <div className="row mx-0 pt-2 pb-4 justify-content-center">
                <img style={{width: "625px"}} src="img/kart-cart.png" alt="cart cart" />
            </div>
        </div>
    </Fade>
    <Fade bottom>
        <div className="container">
            {reversedCombos.map(combo => {
                return (
                    <>
                    <div key={combo.id} className="row text-center mb-3 justify-content-center">
                    {(!showExpand || expandID !== combo.id) && <>
                        <div className="col mb-2 mt-3 justify-content-center">
                            <Button className="btn button-gray m-1" onClick={(e) => handleExpandBuild(e, combo.id)}><img className="responsiveItem" key={combo.driver.id} src={`img/items/${combo.driver.img}`} alt="driver" /></Button>
                            <Button className="btn button-gray m-1" onClick={(e) => handleExpandBuild(e, combo.id)}><img className="responsiveItem" key={combo.kart.id} src={`img/items/${combo.kart.img}`} alt="body" /></Button>
                            <Button className="btn button-gray m-1" onClick={(e) => handleExpandBuild(e, combo.id)}><img className="responsiveItem" key={combo.tire.id} src={`img/items/${combo.tire.img}`} alt="tire" /></Button>
                            <Button className="btn button-gray m-1" onClick={(e) => handleExpandBuild(e, combo.id)}><img className="responsiveItem" key={combo.glider.id} src={`img/items/${combo.glider.img}`} alt="glider" /></Button>
                        </div>
                        <Fade>
                            <div>
                                <Button className="btn button-green text-white m-1" onClick={(e) => handleExpandBuild(e, combo.id)}><img width="155px" src="/img/expand-button.png" alt="expand button" /></Button>
                                <Button className="btn button-red m-1" onClick={() => dispatch(deleteBuild(combo.id))}><img width="150px" src="/img/delete-button.png" alt="delete button" /></Button>
                            </div>
                        </Fade>
                    </>}
                    {showExpand && expandID === combo.id && <>
                        <div className="col mb-2 mt-3 justify-content-center">
                            <Button className="btn button-blue m-1" onClick={handleDriverSpecs}><img className="responsiveItem" key={combo.driver.id} src={`img/items/${combo.driver.img}`} alt="driver" /></Button>
                            <Button className="btn button-green m-1" onClick={handleKartSpecs}><img className="responsiveItem" key={combo.kart.id} src={`img/items/${combo.kart.img}`} alt="body" /></Button>
                            <Button className="btn button-yellow m-1" onClick={handleTireSpecs}><img className="responsiveItem" key={combo.tire.id} src={`img/items/${combo.tire.img}`} alt="tire" /></Button>
                            <Button className="btn button-red m-1" onClick={handleGliderSpecs}><img className="responsiveItem" key={combo.glider.id} src={`img/items/${combo.glider.img}`} alt="glider" /></Button>
                        </div>
                        <Fade>
                            <div className="text-white">
                                <b>CLICK ABOVE TO SHOW/HIDE SPECS</b>
                            </div>
                        </Fade>
                        <div className="mb-2">
                            <Fade>
                                <Chart
                                    type="bar"
                                    data={{
                                        labels: ["Weight", "Acceleration", "On-Road Traction", "Off-Road Traction", "Mini-Turbo", "Ground Speed", "Water Speed", "Anti-Gravity Speed", "Air Speed", "Ground Handling", "Water Handling", "Anti-Gravity Handling", "Air Handling"],
                                        datasets: [
                                            {
                                                label: "Driver",
                                                data: showDriverSpecs ? [combo.driver.wg, combo.driver.ac, combo.driver.on, combo.driver.of, combo.driver.mt, combo.driver.sl, combo.driver.sw, combo.driver.sa, combo.driver.sg, combo.driver.tl, combo.driver.tw, combo.driver.ta, combo.driver.tg] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                                backgroundColor: [
                                                    'rgba(0, 70, 240, 1)',
                                                ],
                                                // borderColor: [
                                                //     'rgba(0, 70, 240, 1)',
                                                // ],
                                                // borderWidth: 1
                                            },
                                            {
                                                label: "Body",
                                                data: showKartSpecs ? [combo.kart.wg, combo.kart.ac, combo.kart.on, combo.kart.of, combo.kart.mt, combo.kart.sl, combo.kart.sw, combo.kart.sa, combo.kart.sg, combo.kart.tl, combo.kart.tw, combo.kart.ta, combo.kart.tg] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                                backgroundColor: [
                                                    'rgba(10, 191, 2, 1)',
                                                ],
                                                // borderColor: [
                                                //     'rgba(10, 191, 2, 1)',
                                                // ],
                                                // borderWidth: 1
                                            },
                                            {
                                                label: "Tire",
                                                data: showTireSpecs ? [combo.tire.wg, combo.tire.ac, combo.tire.on, combo.tire.of, combo.tire.mt, combo.tire.sl, combo.tire.sw, combo.tire.sa, combo.tire.sg, combo.tire.tl, combo.tire.tw, combo.tire.ta, combo.tire.tg] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                                backgroundColor: [
                                                    'rgba(255, 245, 16, 1)',
                                                ],
                                                // borderColor: [
                                                //     'rgba(255, 245, 16, 1)',
                                                // ],
                                                // borderWidth: 1
                                            },
                                            {
                                                label: "Glider",
                                                data: showGliderSpecs ? [combo.glider.wg, combo.glider.ac, combo.glider.on, combo.glider.of, combo.glider.mt, combo.glider.sl, combo.glider.sw, combo.glider.sa, combo.glider.sg, combo.glider.tl, combo.glider.tw, combo.glider.ta, combo.glider.tg] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                                backgroundColor: [
                                                    'rgba(254, 56, 55, 1)',
                                                ],
                                                // borderColor: [
                                                //     'rgba(254, 56, 55, 1)',
                                                // ],
                                                // borderWidth: 1
                                            }
                                        ]
                                    }}
                                    height={450}
                                    // width={100}
                                    options={{
                                        indexAxis: "y",
                                        maintainAspectRatio: false,
                                        aspectRatio: 1.5,
                                        layout: {
                                            // padding: 20
                                        },
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                display: false,
                                                position: 'left',
                                                reverse: false,
                                                labels: {
                                                    color: 'rgba(255, 255, 255)',
                                                    boxHeight: 25,
                                                    padding: 30
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                stacked: true,
                                                ticks: {
                                                    color: 'rgba(255, 255, 255)'
                                                }
                                            },
                                            y: {
                                                stacked: true,
                                                ticks: {
                                                    color: 'rgba(255, 255, 255)'
                                                }
                                            }
                                        }
                                    }}
                                />
                            </Fade>
                        </div>
                        <div>
                            <Button className="btn button-yellow text-white m-1" onClick={(e) => handleShrinkBuild(e)}><img width="145px" src="/img/shrink-button.png" alt="shrink button" /></Button>
                            <Button className="btn button-red m-1" onClick={() => dispatch(deleteBuild(combo.id))}><img width="150px" src="/img/delete-button.png" alt="delete button" /></Button>
                        </div>
                        </>}
                    </div>
                    </>
                )
            })}
        </div>
    </Fade>
    </>
    )
}

export default Cart