import TopAppBar from './appbar'
import Footer from './footer'
import React from 'react';
import Menubar from "./menu";

export default function Layout({ children }) {
    return (
        <>
            <Menubar />
            <main className="viewport">{ children }</main>
            <Footer />
        </>
    )
}