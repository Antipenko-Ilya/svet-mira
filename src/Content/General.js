import React from 'react';
import { Sale } from './Sale';
import { Preview } from './Preview';
import { Supplier } from './Supplier';
import { Footer } from './Footer';
import { Pupup } from './Pupup';
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