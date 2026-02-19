import React from 'react'
import BattleFieldMusic from "../../Assests/Musiclogo.png"

const Logo = () => {
  return (
    <aside className='basis-[15%] '>
        <figure className="w-[full] h-full flex justify-center items-center">
            <img src={BattleFieldMusic} alt="BattleFieldMusic" className="w-[120px] h-[60px] rounded-md" />
        </figure>
    </aside>
  )
}

export default Logo