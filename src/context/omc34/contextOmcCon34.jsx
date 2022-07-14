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
    const [dataRolesOrg,setdataRolesOrg] = useState()
    const [numLevel, setnumLevel]= useState(1)
    const [dataomc34n2,setdataomc34n2]= useState()
    const [dataomc34n3,setdataomc34n3]= useState()
    const [RolesOrg,setRolesOrg] = useState()
    const [dataForm,setdataForm] = useState()
    const [datamap,setdatamap] = useState([])
    const [contador,setcontador] = useState(1)
    const [descripcion,setdescripcion] = useState([])
    const [formhiden,setformhiden] =useState(false)


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

    console.log(RolesOrg)


    const fetData = async()=>{
      axios
      .get("http://127.0.0.1:8000/apiOMC34/OMC34Nivel1",headers)
      .then((response) => {
        setomc32n1(response.data.results);
        console.log(response.data.results)
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
        console.log(response.data.results)
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
        RegistrarRolOrg
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
        RolesOrg
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