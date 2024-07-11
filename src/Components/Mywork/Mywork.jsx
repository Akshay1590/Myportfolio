import React from 'react'
import './Mywork.css'
import thmp from '../../assets/theme_pattern.svg'
import Sdata from '../../assets/services_data.js'

const Mywork = () => {
  return (
    <div className='Projects' id='project'>
      <div className="Title"><h1>My Projects</h1>
      <img src={thmp} alt="" />
      </div>
<div className="Pcontainer">
{Sdata.map((service, index)=>
{
    return <div key={index} className="projctformat">
<h3 className='hide'>{service.s_no}</h3>
<h2>{service.s_name}</h2>
<p>{service.s_desc}</p>
<img src="" alt="" />

    </div>

})

}
</div>

    </div>
  )
}

export default Mywork
