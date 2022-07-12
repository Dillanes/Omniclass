import React, { Fragment } from 'react'
import GlobalFilter from '../components/GlobalFilter'
import { useOmc34 } from '../context/omc34/contextOmc34'
import TablaOmc34 from '../components/omc34RolesO/TablaOmc34'
function RolesOrg() {
  const {nextNivel,
          descripcion,
          datamap,
          previusLevel,
          numLevel} = useOmc34()
  console.log(datamap)
  return (

      <div className='container' style={{marginTop:'100px'}}>
          <TablaOmc34 datamap={datamap} nextNivel={nextNivel}  nivel={numLevel}/>                 
          {
            descripcion.length>0?(
              <div style={{height:'100px'}}>
                  {descripcion.map((desc,index)=>(
                      <button onClick={()=>previusLevel(desc.nivel)} title={desc.descripcion} key={index} className='btn btn-info'>{desc.nivel}</button>
                    ))}
              </div> 
            ):(null)
          }
          
          <div className='containerOmc34Form'>
            <div className='headerOmc34Form'></div>
            <form className='formOmc34 row'  >
              <div className="mb-3 col-1">
                <label for="exampleInputEmail1" className="form-label">Id</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3 col-2">
                <label for="exampleInputEmail1" className="form-label">Codigo Omniclass</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3 col-1">
              <label for="exampleInputEmail1" className="form-label">Consecutivo</label>
                <input type="text" title='Numero consecutivo' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3 col-4">
                <label for="exampleInputEmail1" className="form-label">Descripción en Inglés</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3 col-4">
                <label for="exampleInputEmail1" className="form-label">Descripción en Español</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="form-floating col-4">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Definición en Inglés</label>
              </div>
              <div class="form-floating col-4">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Definición en Español</label>
              </div>
            </form>
            <div className='footerOmc34Form'>

            </div>
          </div>
      </div>
  )
}

export default RolesOrg
