
function getCompareDate(){
    const dataBD = new Date('2021-06-12 14:40:00')
    const dataNow = new Date()
    const dateCompare = new Date()

    if((dataNow.getHours() - dataBD.getHours()) <= 0 ){
        const valorHoraString = String(dataNow.getHours() - dataBD.getHours()).replace('-','')
        const valorHoraNumber = Number(valorHoraString)
        dateCompare.setHours(valorHoraNumber)
    }else{
        console.log('TESTE', dataNow.getHours() - dataBD.getHours())
        dateCompare.setHours( dataNow.getHours() - dataBD.getHours())
    }


    console.log(dataNow.getMinutes() - dataBD.getMinutes())

    if((dataNow.getMinutes() - dataBD.getMinutes()) <= 0 ){
        
        // console.log( dataBD.getMinutes() + (dataNow.getMinutes() - dataBD.getMinutes()))
        console.log( dataBD.getMinutes() + (dataNow.getMinutes() - dataBD.getMinutes()))
        const valorHoraString = String(dataNow.getMinutes() - dataBD.getMinutes()).replace('-','')
        const valorHoraNumber = Number(valorHoraString)
       
        // dateCompare.setMinutes(dataBD.getMinutes() + valorHoraNumber)
        // dateCompare.setMinutes(dataBD.getMinutes() - valorHoraNumber)
        dateCompare.setMinutes( dataBD.getMinutes() + (dataNow.getMinutes() - dataBD.getMinutes()) )
        // dateCompare.setHours( dateCompare.getHours() )
    }else{
        console.log('RESOLVIDO AQUI')
        // console.log('TESTE', dataBD.getMinutes() + (dataNow.getMinutes() - dataBD.getMinutes()))
        // console.log('TESTE',  (dataNow.getMinutes() - dataBD.getMinutes()))
        dateCompare.setMinutes( dataNow.getMinutes() - dataBD.getMinutes())
        // dateCompare.setMinutes( dataBD.getMinutes() + (dataNow.getMinutes() - dataBD.getMinutes()))
    }
    // console.log('Data cadastrada',dataBD.toLocaleTimeString())
    // console.log('Data agora',dataNow.toLocaleTimeString())
    console.log('Data comparada',dateCompare.toLocaleTimeString())
}

// setInterval(getCompareDate, 1000)
getCompareDate()