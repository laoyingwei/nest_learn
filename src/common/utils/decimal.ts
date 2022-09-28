
import Decimal from 'decimal.js';

///加
export const add = (a,b):number =>{
    const num:any = (new Decimal(a).add(new Decimal(b))).toNumber()
    return num
}

///减 
export const sub = (a,b) =>{
    const num:any = new Decimal(a).sub(new Decimal(b)).toNumber()
    return num
 
}

///乘
export const mul = (a,b) =>{
    const num:any = new Decimal(a).mul(new Decimal(b)).toNumber()
    return num
   
}
// 除
export const div = (a,b) =>{
    const num:any = new Decimal(a).div(new Decimal(b)).toNumber()
    return num
}

// 加法 let c = new Decimal(a).add(new Decimal(b))

// 减法 let d = new Decimal(a).sub(new Decimal(b))

// 乘法 let e = new Decimal(a).mul(new Decimal(b))

// 除法 let f = new Decimal(a).div(new Decimal(b))
