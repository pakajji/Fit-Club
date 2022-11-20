import './SumCal.css'
import MenuCalContext from '../Context/MenuCalContext'
import { useContext } from 'react'

const SumCal = () => {
    const { breakfast } = useContext(MenuCalContext)
    /*const sumB = breakfast.map( breakfastMenu => {
        let sum = 0;
        sum += breakfastMenu.cal
        return sum
    })*/
    /*const sumB = breakfast.forEach( menu => {
        console.log(menu)
    });*/
    //console.log('sumB',sumB)
    //console.log(breakfast[1].cal)

    return (
        <div className="SumCal">
            <a target="_blank" rel="noopener noreferrer" href="https://hd.co.th/table-of-calories-in-food-types"><img alt="Caloris book" src="https://www.freeiconspng.com/thumbs/book-icon/book-icon-by-sonoftroll-26.png"/></a>
            <h3>SUMCAL</h3>
        </div>
    )
}

export default SumCal