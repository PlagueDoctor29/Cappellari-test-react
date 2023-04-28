import React from 'react'
import layout from './layout/navbar.module.css'

const Navbar = () => {

  const links = [
    {
      name:"Home",
      link: "#home",
    },
    {
      name:"Chi siamo",
      link: "#chi-siamo",
    },
    {
      name:"Dove siamoo",
      link: "#dove-siamo",
    },
    {
      name:"Contatti",
      link: "#contatti",
    }
  ];

  return (
    <div className={layout.container}>

      <div className="Logo"></div>

      <div className={layout.links}>
        {links.map((item,index)=>{
          return(
            <div key={index + 1}>
                <a href={item.link}>{item.name}</a>
              </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Navbar

  