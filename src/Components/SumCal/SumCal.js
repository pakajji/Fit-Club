import './SumCal.css'
import MenuCalContext from '../Context/MenuCalContext'
import { useContext } from 'react'

const SumCal = () => {
    const { breakfast, lunch, dinner, snacks } = useContext(MenuCalContext)

    const sumB = breakfast.reduce((n, { cal }) => n + cal, 0)
    const sumL = lunch.reduce((n, { cal }) => n + cal, 0)
    const sumD = dinner.reduce((n, { cal }) => n + cal, 0)
    const sumS = snacks.reduce((n, { cal }) => n + cal, 0)
    const sumcal = sumB + sumL + sumD + sumS

    return (
        <div className="SumCal">
            <a target="_blank" rel="noopener noreferrer" href="https://hd.co.th/table-of-calories-in-food-types"><img alt="Caloris book" src="https://www.freeiconspng.com/thumbs/book-icon/book-icon-by-sonoftroll-26.png" /></a>
            <h3>{sumcal}</h3>
        </div>
    )
}

export default SumCal