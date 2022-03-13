var ChartObj = new Chart( document.getElementById('mainCanvas') , {
        type : 'bar' ,
        data : {
            labels : ['DEPOT' , 'RETRAIT' , 'VIREMENT' , 'CREDIT'] ,
            datasets : [{
                label : "TRANSACTIONS / ANNEE " ,
                data : [ 453 , 222 , 334 , 60 ] ,
                backgroundColor : [ "#6dc05a"  , "#4f8bc3" , "#bbb352" , "#ab0008" ] ,
                borderColor : "rgb(255 , 99 , 132 )"
            }]
        }
    })



setInterval(() => {
    let Data = [];
    for ( let i = 0; i < 4; i++) {
        Data.push( Math.floor( Math.random() * 1000 ) )
    }
    ChartObj.data.datasets[0].data = Data;
    ChartObj.update()
}, 500);