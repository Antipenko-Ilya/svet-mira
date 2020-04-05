import React from 'react';
import { Sale } from '../Sale/Sale';
import { Preview } from '../Preview/Preview';
import { Supplier } from '../Supplier/Supplier';
import { Footer } from '../Footer/Footer';
import { Pupup } from '../Modal/Pupup';
import './General.css'


export function General() {
    const pupupShow = false;
    if(pupupShow){
        return(
            <div>
                <Pupup />
            </div>
        );
    }
    return(
        <div className="general">
            <Preview name="preview"/>
            <Sale name="sale"/>
            <Supplier name="supplier"/>
        </div>
    );
}