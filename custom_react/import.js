import { Children, createElement } from "react"
function(elementreact,contain){
    // const ele=document.createElement(elementreact.type)
    // ele.innerHTML=elementreact.Children
    // ele.setAttribute('href',elementreact.prop.href)
    // ele.setAttribute('target',elementreact.prop.target)
    // contain.appendCHILD(ele)
    const ele=document.createElement(elementreact.type)
    ele.innerHTML=elementreact.Children
    for(const prop in props){
        if(prop==Children) continue;
        ele.setAttribute(prop,elementreact.props[prop])



    }
    contain.appendChild(ele)

}


const elementreact={
    type:'a'
    props:{
        href:'https://google.com',
        target:'_blank'

    },
    Children:'click'
}
const contain=document.querySelector('#root')
importRender(elementreact,contain)

