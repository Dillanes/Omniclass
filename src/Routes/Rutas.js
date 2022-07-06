import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar2'
import { TableContext } from '../context/Materiales/TableContext'
import Omc23Cruds from '../pages/omc23Cruds'
import PageOmc23 from '../pages/PageOmc23'
import { TableContainer } from "../components/Materiales/TableContainer";
import { Loading } from "../components/Materiales/Loading";
import { ListaDeMateriales } from "../components/Materiales/ListaDeMateriales";
import Footer from '../components/footer'



function Rutas() {
    const { loading } = React.useContext(TableContext);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1 className="m-4">Pagina inicial</h1>} />
                <Route path="/userList" element={<Omc23Cruds />} />
                <Route path="/tablaReact" element={<PageOmc23 />} />
                <Route path="/omniclass" element={loading ? <Loading /> : <TableContainer />} />
                <Route path="/listaDeMateriales" element={<ListaDeMateriales />} />
            </Routes>
        </BrowserRouter>
    )
}

export { Rutas }