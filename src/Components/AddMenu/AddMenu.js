import './AddMenu.css'
import { useContext, useEffect, useState } from 'react'
import MenuCalContext from '../Context/MenuCalContext'

const AddMenu = (props) => {
    const { duringPopUp, setPopUp } = props
    const { breakfast, setBreakfast, lunch, setLunch, dinner, setDinner, snacks, setSnacks, meal } = useContext(MenuCalContext)

    //input
    const [menu, setMenu] = useState('')
    const [cal, setCal] = useState(0)
    const [formValid, setFormValid] = useState(false)

    const inputMenu = (event) => {
        setMenu(event.target.value);
    }
    const inputCal = (event) => {
        setCal(event.target.value);
    }

    //รวม input เป็น object
    const saveMenuList = (event) => {
        event.preventDefault()

        switch (meal) {
            case 'breakfast':
                const breakfastList = {
                    menu: menu,
                    cal: Number(cal)
                    //ต้องมี key id
                }
                setBreakfast([...breakfast, breakfastList])
                break;

            case 'lunch':
                const lunchList = {
                    menu: menu,
                    cal: Number(cal)
                    //ต้องมี key id
                }
                setLunch([...lunch, lunchList])
                break;

            case 'dinner':
                const dinnerList = {
                    menu: menu,
                    cal: Number(cal)
                    //ต้องมี key id
                }
                setDinner([...dinner, dinnerList])
                break;

            case 'snacks':
                const snacksList = {
                    menu: menu,
                    cal: Number(cal)
                    //ต้องมี key id
                }
                setSnacks([...snacks, snacksList])
                break;
            default: console.log("I'm hungry")
        }

        setMenu('')
        setCal(0)
    }

    //เช็คว่า input ครบ2ตัว
    useEffect(() => {
        const checkData = menu.trim().length > 0 && cal !== 0
        setFormValid(checkData)
    }, [menu, cal])

    let mealColor
    switch (meal) {
        case 'breakfast':
            mealColor = "blue";
            break;
        case 'lunch':
            mealColor = "green";
            break;
        case 'dinner':
            mealColor = "yellow";
            break;
        case 'snacks':
            mealColor = "red";
            break;
        default: mealColor = ""
    }


    return (
        <div className={`addMenu ${duringPopUp} ${mealColor}`}>
            <span className="add-menu-close" onClick={() => setPopUp(false)}>&times;</span>
            <h3 className='meal-name'>{meal.toUpperCase()}</h3>
            <form onSubmit={saveMenuList} className="form-add-menu">
                <input id="food-name" type="text" placeholder="Menu" onChange={inputMenu} value={menu} />
                <input id="calories" type="number" placeholder="Calories" onChange={inputCal} value={cal} />
                <button type="submit" disabled={!formValid}>Add</button>
            </form>
        </div>
    )
}

export default AddMenu