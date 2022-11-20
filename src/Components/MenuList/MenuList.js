import './MenuList.css'

const MenuList = ({menuCal}) => {
    return(
        <div className='all-menu-list'>
            {menuCal.map(menu => {
                return(
                    <div className='menu-list'>
                        <p>{menu.menu}</p>
                        <p>{menu.cal}</p>
                    </div>
                )
        })}
        </div>
    )
}

export default MenuList