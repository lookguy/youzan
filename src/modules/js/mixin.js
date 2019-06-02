let mixin = {
    filters:{
        format(price){
            if (!price) return '0.00';
            let prices= price.toString();
            let result = prices.indexOf(".");
            if(result === -1){
                return `${prices}.00`
            }else{
                let indexPoint = prices.indexOf(".");
                let base = prices.substring(0,indexPoint+1);
                let point = prices.substr(indexPoint+1,2);
                return point.length>1? `${base+point}`:`${base+point}0`
            }
        }
    },
}

export default mixin