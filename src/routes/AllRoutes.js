import React from 'react'
import { Routes, Route } from "react-router-dom";
import { CreatePage, HomePage, PageNotFound } from "../pages";
import { ProtectedRoutes } from './ProtectedRoutes';

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/create" element={ <ProtectedRoutes ><CreatePage /></ProtectedRoutes>} />
            <Route path="*" element={ <PageNotFound />} />
        </Routes>
    </main>
  )
}
