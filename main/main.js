module.exports = function main(inputs) {
    
    let result = [];

    inputs.forEach(element => {
        if (result.find((x) => x.barcode === element.barcode) === undefined) {
            let newElement = {}
            newElement.barcode = element.barcode
            newElement.name = element.name
            newElement.unit = element.unit
            newElement.count = 1
            newElement.price = element.price
            newElement.subTotal = element.price
            result.push(newElement)
        }else{     
            result[result.findIndex((x1)=>(x1.barcode === element.barcode))].count++
            result[result.findIndex((x1)=>(x1.barcode === element.barcode))].subTotal += element.price
        }
        
    });
    let pResult = ''
    let total = 0
    console.log(result);
    pResult = '***<没钱赚商店>购物清单***\n'
    result.forEach(element => {
        total += element.subTotal
        pResult += '名称：' + element.name + '，数量：' + element.count + element.unit + '，单价：' + element.price + '.00(元)，小计：' + element.subTotal + '.00(元)\n'
    })

    pResult +=  '----------------------\n'
    pResult += '总计：'+ total + '.00(元)\n'
    pResult += '**********************'
    
    
   return pResult ;
};


