import React,{Fragment,useState} from 'react'
import '../styles/omc34/styles.css'
import{NavLink} from 'react-router-dom'
import {BsArrowBarLeft} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'
import Footer from '../components/footer'
import {Toaster} from 'react-hot-toast'
import '../styles/omc34/stylesConsulta.css'
import { useOmcCon34 } from '../context/omc34/contextOmcCon34'

function PageConsultaOrg() {

  // DATOS DE LOS DISTITOS NIVELES DE Omc34
    const {
      omc34n1,
      omc34n2,
      omc34n3,
      omc34n4,
      RolesOrg
    }  = useOmcCon34()
   //
    const [nivel2,setNivel2] = useState(false)
    const [nivel3,setNivel3] = useState(false)
    const [nivel4,setNivel4] = useState(false)
    const [nivel5,setNivel5] = useState(false)


  const Colapsar =(e)=>{
      const colaps =  e.currentTarget.nextSibling
      console.log(e.currentTarget.nextSibling)
      colaps.toggleAttribute('hidden')
  }

  return (
    <Fragment>
      <Toaster
          position='bottom-right'
          toastOptions={{
            duration:3000,
            style:{
              background:'#222',
              color:'white'
            }
          }}
        />
      <div className='container containerOmc34RolOrg' style={{marginTop:'100px'}}>
          {/* <TablaOmc34 datamap={datamap} nextNivel={nextNivel}  nivel={numLevel}/>    */}
          <NavLink className='btnConsultarRolOrg' to='/rolesOrganizacionales'> <BsArrowBarLeft/>Regresar</NavLink>
          <div className='containerTitle'>
          <p className='textTitle'>Complementar Norma Omniclass 34: <p style={{fontZise:''}}>Consulta Roles Organizacionales</p></p>
          <hr className='hrTitle'/>
        <div className='containerListaConsultaOmc34'>
          {
            omc34n1.map((omc34N1)=>(
              <ul className={`item${omc34N1.Codigo}`} key={omc34N1.Codigo}  >
              <li className={`listaConsultaItemOmc34`} onClick={(e)=>Colapsar(e)}><AiFillCaretDown/>{omc34N1.Codigo}| {omc34N1.Codigo} | {omc34N1.Codigo}| {omc34N1.Codigo} | {omc34N1.Codigo} | {omc34N1.Codigo} |  {omc34N1.Codigo}  </li>
              {nivel2===true?(
                  <ul >
                  <li className='listaConsultaItemOmc34' onClick={(e)=>Colapsar(e)}  ><AiFillCaretDown/>Nivel 2</li>
                  {nivel3===true?(
                  <ul >
                    <li className='listaConsultaItemOmc34' onClick={(e)=>Colapsar(e)} ><AiFillCaretDown/>Nivel 3</li>
                    {nivel4===true?(
                    <ul onClick={(e)=>Colapsar(e)}>
                      <li className='listaConsultaItemOmc34' onClick={(e)=>Colapsar(e)} ><AiFillCaretDown/>Nivel 4</li>
                      {nivel5===true?(
                        <ul>
                        <li className='listaConsultaItemOmc34' >Nivel 5</li>
                      </ul>):(null)}
                      </ul>):(null)}
                  </ul>):(null)}
                </ul>
              ):(null)}
            </ul>
            ))
          }
          </div>
        </div>
          

          

          
      </div>
      <Footer/>
      </Fragment>
  )
}

export default PageConsultaOrg
