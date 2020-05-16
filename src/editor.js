import React, {useState} from "react";
import {Input} from 'antd';
import './App.css'

export default function Editor() {
    const {TextArea} = Input;
    let [text, setText] = useState('');
    let res = text.replace(/^# (.*)/gm, (m, g) => {
        return `<h1>${g}</h1>`
    }).replace(/^## (.*)/gm, (m, g) => {
        return `<h2 class="heading">${g}</h2>`
    }).replace(/^### (.*)/gm, (m, g) => {
        return `<h3 class="heading">${g}</h3>`
    }).replace(/^- (.*)/gm, (m, g) => {
        return `<li >${g}</li>`
    }).replace(/^---(.*)/gm, (m, g) => {
        return `<hr/>`
    });
    return (
        <div className={'main-page'}>
            <TextArea className={'editor'} onChange={(event) => {
                setText(event.target.value);
            }}/>
            <div className={'output'} dangerouslySetInnerHTML={{__html: res}}/>
        </div>
    );
}

// function Output(props) {
//
//     return (
//         <div className={'output'} dangerouslySetInnerHTML={{__html: res}}/>
//     )
// }

