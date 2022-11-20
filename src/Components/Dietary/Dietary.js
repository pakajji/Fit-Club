import './Dietary.css'
import React, { useContext, useState } from 'react'
import AddMenu from '../AddMenu/AddMenu'
import MenuList from '../MenuList/MenuList'
import MenuCalContext from '../Context/MenuCalContext'

const Dietary = () => {

    const { meal, setMeal } = useContext(MenuCalContext)            //เช็คว่าลงมื้อไหน
    const [popUp, setPopUp] = useState(false)
    const duringPopUp = popUp ? "" : "hiddenPopUp"
    const { breakfast, lunch, dinner, snacks } = useContext(MenuCalContext) //เลือกเอาค่าที่ตรงกับมื้อนั้นมาลง



    return (
        <div className="dietary">
            <h1 className="meal_today">Meals Today</h1>
            <div className="row">
                <ul className="meals">
                    <li className="meal_card blue">
                        <h2 className="mealName">Breakfast</h2>
                        <MenuList menuCal={breakfast}/>
                        <button id="breakfast" className="plusMenu_btn" onClick={() => { setMeal('breakfast'); setPopUp(true); }}>+</button>
                    </li>
                    <li className="meal_card green">
                        <h2 className="mealName">Lunch</h2>
                        <MenuList menuCal={lunch} />
                        <button id="lunch" className="plusMenu_btn" onClick={() => { setMeal('lunch'); setPopUp(true); }}>+</button>
                    </li>
                    <li className="meal_card yellow">
                        <h2 className="mealName">Dinner</h2>
                        <MenuList menuCal={dinner} />
                        <button id="dinner" className="plusMenu_btn" onClick={() => { setMeal('dinner'); setPopUp(true); }}>+</button>
                    </li>
                    <li className="meal_card red">
                        <h2 className="mealName">Snacks</h2>
                        <MenuList menuCal={snacks} />
                        <button id="snacks" className="plusMenu_btn" onClick={() => { setMeal('snacks'); setPopUp(true); }}>+</button>
                    </li>
                </ul>
            </div>
            {popUp && <AddMenu duringPopUp={duringPopUp} setPopUp={setPopUp} meal={meal} />}
        </div>
    )
}

export default Dietary