export const listAction =(num = [])=> {
    return{
        type: 'LIST', 
        payload: num
    }
}

export const priceAction =(num = 0)=> {
    return{
        type: 'PRICE', 
        payload: num
    }
}
