import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { useOmcCon34 } from '../../context/omc34/contextOmcCon34';

const FormOmc34 =(props)=>{
  
const {RolesOrg} = useOmcCon34()
   console.log(RolesOrg)
  const {register,formState:{errors},handleSubmit,setValue,reset} = useForm()
  
  console.log( RolesOrg[RolesOrg.length-1])
  const rolOrg = RolesOrg[RolesOrg.length-1]
  
  const numConsecutivo = parseInt(rolOrg.Consecutivo)+1
  console.log(numConsecutivo)
  const textConsecutivo = String(numConsecutivo)
  const Consecutivo = textConsecutivo.padStart(5, "0");
  const id = rolOrg.idRolOrg+1
  
  
  // const numero = '30';
  // const resultado = numero.padStart(7, "0");
  // console.log(resultado); 
 if(id!=null){
  setValue('Codigo',props.dataForm.Codigo)
  setValue('id',id)
  setValue('Consecutivo',Consecutivo)

 }
  

  // console.log(props.dataRolesOrg.pop())
 
   
  // setValue('Codigo',consecutivo) 
  // setValue('id',props.dataRolesOrg.pop()) 
    const onSubmit = (data,e)=>{
      props.RegistrarRolOrg(data)
      console.log(e)
      reset()

    }
  

  return (
    <div className='containerOmc34Form shadow-lg'>
            <div className='headerOmc34Form'>Registrar Nuevo Rol Organizacional<button className='closeBtnFormOmc34'  onClick={()=>props.setformhiden(false)}>X</button></div>
            <form className='row formOmc34' onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 col-sm-12 col-md-1">
                <label htmlFor="exampleInputEmail1" className="form-label">Id</label>
                <input type="number" className="form-control" id="exampleInputEmail1" value={id} {...register('id',{required:true})} disabled aria-describedby="emailHelp"/>
                {errors.id && <span className="text-danger text-small d-block mb-2">No valido</span>}
              </div>
              <div className="mb-3 col-sm-12 col-md-2">
                <label htmlFor="exampleInputEmail1" className="form-label">Codigo Omniclass</label>
                <input type="text" className="form-control" id="exampleInputEmail1"  value={props.dataForm.Codigo} {...register('Codigo',{required:true})} disabled aria-describedby="emailHelp"/>
                {errors.Codigo && <span className="text-danger text-small d-block mb-2">No valido</span>}
              </div>
              <div className="mb-3 col-sm-12 col-md-1">
              <label htmlFor="exampleInputEmail1" className="form-label">Consecutivo</label>
                <input type="text" title='Numero consecutivo' className="form-control" value={Consecutivo} {...register('Consecutivo',{required:true})} disabled id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.Consecutivo && <span className="text-danger text-small d-block mb-2">No valido</span>}
              </div>
              <div className="mb-3 col-sm-12 col-md-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Descripción en Inglés</label>
                <input type="text" className="form-control" id="exampleInputEmail1" {...register('descriEng',{required:true})} aria-describedby="emailHelp"/>
                {errors.descriEng && <span className="text-danger text-small d-block mb-2">No valido</span>}
              </div>
              <div className="mb-3 col-sm-12 col-md-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Descripción en Español</label>
                <input type="text" className="form-control" id="exampleInputEmail1" {...register('descriSpa',{required:true})} aria-describedby="emailHelp"/>
                {errors.descriSpa && <span className="text-danger text-small d-block mb-2">No valido</span>}
              </div>
              <div class="col-sm-12 mb-3 col-md-4">
              <label htmlFor="exampleInputEmail1" className="form-label">Definición en Inglés</label>
                <textarea class="form-control textAreaFormOmc34" {...register('definicionEng',{required:true})}   id="floatingTextarea"></textarea>
                {errors.definicionEng && <span className="text-danger text-small d-block mb-2">No valido</span>}
              </div>
              <div class=" col-sm-12 mb-3 col-md-4">
              <label htmlFor="exampleInputEmail1" className="form-label">Definición en Español</label>
                <textarea class="form-control textAreaFormOmc34" {...register('definicionSpa',{required:true})}   id="floatingTextarea"></textarea> 
                {errors.definicionSpa && <span className="text-danger text-small d-block mb-2">No valido</span>}
              </div>
              <div className='mb-3 col-sm-12 col-md-4'>
              <div className="mb-3 col-sm-12 col-md-12">
                <label htmlFor="exampleInputEmail1"  className="form-label">Fuente de Información</label>
                <input type="text" className="form-control" {...register('fuenteInf',{required:true})} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.fuenteInf && <span className="text-danger text-small d-block mb-2">No valido</span>}
              </div>
              <div className="mb-3 col-sm-12 col-md-12">
                <label htmlFor="exampleInputEmail1" className="form-label">Año de alta del registro</label>
                <input type="date" className="form-control" {...register('fecRegIng',{required:true})} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.fecRegInf && <span className="text-danger text-small d-block mb-2">{errors.fecRegInf}</span>}
              </div>
              </div>
              
                 <div className='d-flex mb-3 align-items-end flex-column'>
                  <div>
                    <button type="submit" className="btn m-2  btn-primary mt-3">Guardar</button>
                    <button type="reset" className="btn m-2 btn-danger mt-3">Cancelar</button>
                  </div>
                 </div>
            </form>
            <div className='footerOmc34Form'>
                  consulting&construction
            </div>
          </div>
  )
}

export default FormOmc34
