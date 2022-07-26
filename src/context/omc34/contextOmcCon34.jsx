import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useLogin } from "../LoginContext";

const Omc34ConContext = React.createContext();

export function Omc34ConProvider(props){
  const {dataToken} = useLogin()
  
  //TOKEN
   
  


  const headers = { headers:{
    'Authorization': `Token ${dataToken.token}`
  }}



    useEffect(() => {
        fetData()
       }, []);

    const [omc34n1,setomc32n1] = useState([])
    const [omc34n2,setomc32n2] = useState([])
    const [omc34n3,setomc32n3] = useState([])
    const [omc34n4,setomc32n4] = useState([])
    const [omc34n1TreeData,setomc32n1TreeData] = useState([])
    const [numLevel, setnumLevel]= useState(1)
    const [dataomc34n2,setdataomc34n2]= useState()
    const [dataomc34n3,setdataomc34n3]= useState()
    const [RolesOrg,setRolesOrg] = useState()
    const [dataForm,setdataForm] = useState()
    const [datamap,setdatamap] = useState([])
    const [contador,setcontador] = useState(1)
    const [descripcion,setdescripcion] = useState([])
    const [formhiden,setformhiden] =useState(false)
    const [dataTree,setdataTree] = useState([])      
    

     
      // var indent = 1


      //   function walk(tree) {
          
      //     tree.forEach(function (node) {
      //       if(node.children){
              
      //         const add = RolesOrg.filter((data)=>data.Codigo === node.Codigo)
      //         // console.log('DATA FILTRADA',add)
      //         if(add.length>0){
      //           node.children.push(add)
      //         }       
  
  
      //       }
            

  
      //         if(node.length){
      //           node.forEach(element=>console.log("--" + Array(indent).join("--"),element.Codigo))
               
      //         }else{
      //           console.log("--" + Array(indent).join("--"), node.Codigo)
                
      //         }
              
            
            
  
      //       if(node.children){
      //         if (node.children.length>0) {
      //           indent++;
      //           walk(node.children);
      //         }
      //       }
            
      //       if (tree.indexOf(node) === tree.length - 1) {
      //         indent--;
      //       }
      //     });
      // }

    
      
    // console.log(omc34n1TreeData)

    

    //ESTADOS Y FUNCIONES | CONSULTA ROLES ORGANIZACIONALES
    console.log('REGISTROS GUARDADOS:',dataTree)
    // Estados para la consulta de Roles Organizacionales
    // REGISTRO 1
    const [reg1N2,setreg1N2] = useState([])
    const [reg1N3,setreg1N3] = useState([])
    const [reg1N4,setreg1N4] = useState([])
    const [reg1N5,setreg1N5] = useState([])

    // REGISTRPO 2
    const [reg2N2,setreg2N2] = useState([])
    const [reg2N3,setreg2N3] = useState([])
    const [reg2N4,setreg2N4] = useState([])
    const [reg2N5,setreg2N5] = useState([])

    // REGISTRPO 3
    const [reg3N2,setreg3N2] = useState([])
    const [reg3N3,setreg3N3] = useState([])
    const [reg3N4,setreg3N4] = useState([])
    const [reg3N5,setreg3N5] = useState([])

    // REGISTRPO 4
    const [reg4N2,setreg4N2] = useState([])
    const [reg4N3,setreg4N3] = useState([])
    const [reg4N4,setreg4N4] = useState([])
    const [reg4N5,setreg4N5] = useState([])

    // REGISTRPO 5
    const [reg5N2,setreg5N2] = useState([])
    const [reg5N3,setreg5N3] = useState([])
    const [reg5N4,setreg5N4] = useState([])
    const [reg5N5,setreg5N5] = useState([])

    // REGISTRPO 6
    const [reg6N2,setreg6N2] = useState([])
    const [reg6N3,setreg6N3] = useState([])
    const [reg6N4,setreg6N4] = useState([])
    const [reg6N5,setreg6N5] = useState([])

    // REGISTRPO 7
    const [reg7N2,setreg7N2] = useState([])
    const [reg7N3,setreg7N3] = useState([])
    const [reg7N4,setreg7N4] = useState([])
    const [reg7N5,setreg7N5] = useState([])
    
    //OPCIONES
    const [opcionCase, setOpcionCase] = useState([])


    const ConcatArrays = async(concatData)=>{
      await setreg1N3([...reg1N3,concatData])
    }
    


    const Registro1 = async(id,codigo,num)=>{
      switch (num){
        case 1:
          setreg1N2([])
          setreg1N3([])
          setreg1N4([])
          setreg1N5([])
        break;
        case 2:
              const  dato1 = omc34n2.filter((data)=> data.fk_Omc34N1 === id)
              await setreg1N2(dato1)
              // const  dato2 = RolesOrg.filter((data)=>data.Codigo === codigo)
              // await console.log(dato2)
              // await console.log(reg1N2)
              // await setreg1N2([...reg1N2,dato2])
          break;
          case 3:
            await setreg1N3(omc34n3.filter((data)=> data.fk_Omc34N2 === id))
            console.log(omc34n3.filter((data)=> data.fk_Omc34N2 === id))
            ConcatArrays(RolesOrg.filter((data)=> data.Codigo === codigo))
            // const  dato2 = RolesOrg.filter((data)=>data.Codigo === codigo)
            // ConcatArrays(dato2)
          
          break;
          case 4:
           
          
          break;
          case 5:
           
          
          break;
      
        default:
          break;
      }
  




    }

    const editData = (data)=>{
        console.log(data)
    }

    
   const previusLevel = async(nivel)=>{
          console.log(nivel)
          switch (nivel) {
            case 'Nivel1':
                await setdatamap(omc34n1)
                console.log(descripcion)
                setdescripcion([])
                setnumLevel(1)
              break;
              case 'Nivel2':
                await setdatamap(dataomc34n2)
                setdescripcion([descripcion[0]])
                setnumLevel(2)
              break;
              case 'Nivel3':
                await setdatamap(dataomc34n3)
                setdescripcion([descripcion[0],descripcion[1]])
                setnumLevel(3)
              break;
          
            default:
              break;
          }
          
   }
     
   const registrarRolOrg =async(data)=>{
         setdataForm(data)
         setformhiden(true)
         fetData()
   } 

    const nextNivel = async(data,numNivel)=>{
          switch (numNivel) {
            case 1:
              console.log(data)
                const id = omc34n1.filter((omcdata)=>omcdata.Codigo === data.Codigo)
                console.log(omc34n2.filter((omcdata)=>omcdata.fk_Omc34N1===id[0].idOmc34N1))
                await setdatamap(omc34n2.filter((omcdata)=>omcdata.fk_Omc34N1===id[0].idOmc34N1))
                 setdescripcion([...descripcion,{nivel:`Nivel${numNivel}`, descripcion:data.descriSpa}])
                 setdataomc34n2(omc34n2.filter((omcdata)=>omcdata.fk_Omc34N1===id[0].idOmc34N1))
                 setnumLevel(numNivel+1)
                // setdataomc34n2()
              break;

            case 2:
              const id2 = omc34n2.filter((omcdata)=>omcdata.Codigo === data.Codigo)
              console.log(omc34n3.filter((omcdata)=>omcdata.fk_Omc34N2===id2[0].idOmc34N2))
              await setdatamap(omc34n3.filter((omcdata)=>omcdata.fk_Omc34N2===id2[0].idOmc34N2))
              await setdescripcion([...descripcion,{nivel:`Nivel${numNivel}`, descripcion:data.descriSpa}])
              setdataomc34n3(omc34n3.filter((omcdata)=>omcdata.fk_Omc34N2===id2[0].idOmc34N2))
              await setnumLevel(numNivel+1)
              break;

            case 3:
              const id3 = omc34n3.filter((omcdata)=>omcdata.Codigo === data.Codigo)
              console.log(omc34n4.filter((omcdata)=>omcdata.fk_Omc34N3===id3[0].idOmc34N3))
              await setdatamap(omc34n4.filter((omcdata)=>omcdata.fk_Omc34N3===id3[0].idOmc34N3))
              await setdescripcion([...descripcion,{nivel:`Nivel${numNivel}`, descripcion:data.descriSp}])
              await setnumLevel(numNivel+1)
              break;
          
            default:
              break;
          }
    }

    const RegistrarRolOrg = async(Data)=>{
      console.log(Data)
      axios
      .post(`http://127.0.0.1:8000/apiRolesOrg/RolesOrg/`,{
        cveMo:null,
        Codigo:Data.Codigo ,
        Consecutivo:Data.Consecutivo ,
        descriEng:Data.descriEng ,
        descriSpa:Data.descriSpa ,
        definicionEng:Data.definicionEng ,
        definicionSpa:Data.definicionSpa ,
        fuenteInf:Data.fuenteInf,
        fecRegInf:Data.fecRegIng,
    }
    
    ,headers)
      .then((response) => {
            fetData()
            toast.success("EL registro se ha creado exitosamente")
            console.log(response.request.status)
      }).catch((error)=>{
        console.log(error)
      });
    }




    const fetData = async()=>{
      axios
      .get("http://127.0.0.1:8000/apiOMC34/OMC34Nivel1",headers)
      .then((response) => {
        setomc32n1(response.data.results);
        if(contador===1){
          setdatamap(response.data.results)
          console.log('hola desde la condicion contador')
          setcontador(5)
        } 
      }).catch((error)=>{
        console.log(error)
      });

      axios
      .get("http://127.0.0.1:8000/apiOMC34/OMC34Nivel2",headers)
      .then((response) => {
        setomc32n2(response.data.results);
      }).catch((error)=>{
        console.log(error)
      });
    
    axios
      .get("http://127.0.0.1:8000/apiOMC34/OMC34Nivel3",headers)
      .then((response) => {
        setomc32n3(response.data.results);
      }).catch((error)=>{
        console.log(error)
      });

      axios
      .get("http://127.0.0.1:8000/apiOMC34/OMC34Nivel4",headers)
      .then((response) => {
        setomc32n4(response.data.results);
      }).catch((error)=>{
        console.log(error)
      });

      axios
      .get("http://127.0.0.1:8000/apiRolesOrg/RolesOrg",headers)
      .then((response) => {
        setRolesOrg(response.data.results);
      }).catch((error)=>{
        console.log(error)
      });

      axios
      .get("http://127.0.0.1:8000/apiOMC34/OMC34Nivel1Relation/",headers)
      .then((response) => {
        setomc32n1TreeData(response.data.results);
        const data = response.data.results.map((arreglo,index)=>{
          return{
            id:index,
            labelName:arreglo.Codigo
          }
        })

        console.log(data)


      }).catch((error)=>{
        console.log(error)
      });

     
    }
    
 
      


    


    const value = useMemo(() => {
      return {
        omc34n1,
        omc34n2,
        omc34n3,
        omc34n4,
        nextNivel,
        dataomc34n2,
        dataomc34n3,
        descripcion,
        datamap,
        previusLevel,
        numLevel,
        RolesOrg,
        dataForm,
        registrarRolOrg,
        setdataForm,
        formhiden,
        setformhiden,
        RegistrarRolOrg,
        reg1N2,
        reg1N3,
        reg1N4,
        reg1N5,
        opcionCase,
        Registro1,
        omc34n1TreeData
      };
    }, [
        omc34n1,
        omc34n2,
        omc34n3,
        omc34n4,
        descripcion,
        numLevel,
        datamap,
        dataomc34n2,
        dataomc34n3,
        dataForm,
        formhiden,
        RolesOrg,
        reg1N2,
        reg1N3,
        reg1N4,
        reg1N5,
        opcionCase,
        omc34n1TreeData
    ]);
  
    return <Omc34ConContext.Provider value={value} {...props} />;
}

export function useOmcCon34() {
  const context = React.useContext(Omc34ConContext);
  if (!context) {
    throw new "useOmc34 debe estar dentroi del provedor Omc34Context"();
  }

  return context;
}