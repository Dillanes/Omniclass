import { useTable,usePagination,useGlobalFilter,useSortBy } from 'react-table'
import GlobalFilter from '../GlobalFilter'
import { useForm } from "react-hook-form";
import React, { Fragment,useMemo} from 'react'
import { useOmc23 } from '../../context/omc23/ContextOmc23';

function Modal2Add(props) {
 
  //react hook forms
    const {register,formState:{errors} ,handleSubmit,setValue,reset} = useForm();
    const {CreateOmc23Url} = useOmc23()
    
  //ESTILOS CSS PARA SELECCIONAR FILA 
        function cleanTr(){
          document.querySelectorAll('.omc23Modal').forEach(function(index){
          index.classList.remove('row-selected')
          index.classList.remove('other-clic')
          })
         }
        
      
    const selectRow = (e)=>{
        
        const selectRowTag = e.nativeEvent.path[1]
        
        if(selectRowTag.classList.contains('row-selected')){
          
        }else{
          cleanTr()
          selectRowTag.classList.add('row-selected')
        }
      
      }

    //columnas de la tabla
    const columns = useMemo(
        () => [
          {
            Header: "No",
            accessor: "",
            Cell: (row) => {
              return <div>{Number(row.row.id) + 1}</div>;
            },
            style:{
              textAlign:'center'
            }
        },,
   
         {
           Header: 'Código',
           accessor: 'Codigo',
           className:'Codigo',
            style: {
             width:'100px',
           },
         },
         {
          Header: 'Descripción en Inglés',
          accessor: 'descriEng',
        },
        {
          Header: 'Descripción en Español',
          accessor: 'descriSpa',
        },
        {
          Header: 'Definición en Inglés',
          accessor: 'definicionEng',
        },
        {
          Header: 'Definición en Español',
          accessor: 'definicionSpa',
        },
        ],
        []
      ) 
    
    // const [dataAux,setdataAux] = useState(omcn1)
    // if (props.dataAdd!=null){
    //     setdataAux(props.dataAdd) 
    // }

//data
    const data  = useMemo(()=> props.dataAdd,[props.dataAdd])
    
     

      
//fuinciones de la tabla
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        pageOptions,
        prepareRow,
        state:{pageIndex},
        state,
        setGlobalFilter,
        setPageSize,
      } = useTable({ columns, data},useGlobalFilter,useSortBy,
           usePagination)

    const{globalFilter} = state
    
    //Funcion que envia los datos al context
    const onSubmit = (data,e)=>{
      
      CreateOmc23Url(data,props.numeroTabla,props.select)
      reset({})
      props.setactive(false)
      
      
    }

    //numero de paginado
    state.pageSize=2
if (!props.active) return null

  return (
    <Fragment>
         
        <div className='overlay' >
        <div className='modalContainer'>
            <button className='closeBtn'  onClick={()=>(props.setactive(false),props.setselect(null))}>X</button>
            <div className='headerTittle'>Registrar concepto para la norma Omniclass 23: Productos Nivel {props.numeroTabla}</div>
            {
              props.numeroTabla>1?(
                <div className='tableContainer' style={{overflowX:'auto', overflowY:'auto', maxHeight:'450px'}}>
                <div className='mb-2 col-4'><GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/></div>
                <table {...getTableProps()} style={{maxHeight:'100px'}} className='table table-hover mt-2 shadow-lg'>
                    <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} >
                        {headerGroup.headers.map(column => (
                        <th scope="col"{...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        { column.isSorted ? (column.isSortedDesc ? <i className="fa-solid fa-angle-down"></i>:<i className="fa-solid fa-angle-up"></i>):''}
                        </th>))}
                        </tr>))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {prepareRow(row)
                        return (
                        <tr className='omc23Modal' style={{fontSize:'12px', fontFamily:'arial'}} {...row.getRowProps()} onClick={(e)=>(selectRow(e),props.selectFk(row.original.Codigo)) }>{row.cells.map(cell => {
                        return (
                            <td {...cell.getCellProps([{className: cell.column.className,style: cell.column.style,},])}> 
                            {cell.render('Cell')}
                            </td>)})}
                        </tr>)})}
                    </tbody>
                </table>
                <div style={{textAlign:'center'}}>
                <button type="button" className="btn btn-dark m-1" onClick={()=>previousPage()}>Previous</button><button type="button"  className="btn btn-dark" onClick={()=>nextPage()}>Next</button>
         <br/>
         <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
        </div>
                <hr className='hrDivition' size='5'></hr>
                </div>
                

              ):(null)
            }

       {props.select!=null || props.numeroTabla===1?(
        <div className='form' style={props.numeroTabla===1?{marginTop:'40px'}:null}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
       <div className="row InputAdd">
        <div className="form-group col-md-6">
 
         <input type="text" maxLength='9' className="form-control" id="inputEmail4" {...register("Codigo",{required:true,minLength:9})} placeholder="Código"/>
         {errors.Codigo && <span className="text-danger text-small d-block mb-2">No valido</span>}
         
       </div>
       <div className="form-group col-md-4">
      
         <input type="text" maxLength='4' className="form-control" id="inputPassword4" {...register("anioReg",{required:true,maxLength:4})} placeholder="Año de Registro"/>
         {errors.anioReg && <span className="text-danger text-small d-block mb-2">No valido</span>}
       </div>
     </div>
     <div className="row mt-2">
     <div className="form-group col">
       <input className="form-control" id="exampleFormControlTextarea1" maxLength='100' placeholder='Descripción en Inglés' {...register("descriEng",{ maxLength:100})} rows="3"/>
       {errors.descriEng && <span className="text-danger text-small d-block mb-2">No valido</span>}
     </div>
     <div className="form-group col">
       <input className="form-control" id="exampleFormControlTextarea1" maxLength='100' placeholder='Descripción en Español' rows="3" {...register("descriSpa",{maxLength:100})}/>
       {errors.descriSpa && <span className="text-danger text-small d-block mb-2">No valido</span>}
     </div>
     </div>
     <div className="row mt-2 InputAdd">
     <div className="form-group col">
       <textarea className="form-control" id="exampleFormControlTextarea1" maxLength='300' placeholder='Definición en Inglés' {...register("definicionEng",{maxLength:300})} rows="3"></textarea>
       {errors.definicionEng && <span className="text-danger text-small d-block mb-2">No valido</span>}
     </div>
     <div className="form-group col">
       <textarea className="form-control" id="exampleFormControlTextarea1" maxLength='470' placeholder='Definición en Español' {...register("definicionSpa",{maxLength:470})} rows="3"></textarea>
       {errors.definicionSpa && <span className="text-danger text-small d-block mb-2">No valido</span>}
     </div>
     </div>
     <div className="row mt-2 InputAdd">
     <div className="form-group col">
       <textarea className="form-control" id="exampleFormControlTextarea1" maxLength='300' placeholder='Ejemplo en Inglés ' {...register("ejemploEng",{maxLength:300})} rows="3"></textarea>
       {errors.ejemploEng && <span className="text-danger text-small d-block mb-2">No valido</span>}
     </div>
     <div className="form-group col">
       <textarea className="form-control" id="exampleFormControlTextarea1" maxLength='400' placeholder='Ejemplo en Español' {...register("ejemploSpa",{maxLength:400})} rows="3"></textarea>
       {errors.ejemploSpa && <span className="text-danger text-small d-block mb-2">No valido</span>}
     </div>
     </div>
     {props.numeroTabla>1? (
       <div className="custom-control col-md-6 custom-checkbox">
       <input type="checkbox"  className="custom-control-input m-2" {...register("regFinal")} id="customCheck1"/>
       <label className="custom-control-label" htmlFor="customCheck1">Aplica como registro Final?</label>
       </div>):(null)}
     
     <div className='d-flex align-items-end flex-column'>
      <div><button type="submit" className="btn m-2  btn-primary mt-3">Guardar</button>
     <button type="reset" className="btn m-2 btn-danger mt-3">Cancelar</button></div>
     </div>
   </form>
               </div>
       ):(null)}
        
       
    
        </div>
        
    </div>
    <div className='modal-backdrop fade show' style={{zIndex:50}}></div>
    
    </Fragment>
   
    
  )
}

export default Modal2Add



