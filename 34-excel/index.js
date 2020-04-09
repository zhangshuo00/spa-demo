var chart = document.getElementById('chart');
var chartTo = echarts.init(document.getElementById('chartTo'));
var option = {
    title:{
        text:'JavaScript语言排名变化'
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
            type:'cross',
            label:{
                backgroundColor:'#6a7985'
            }
        }
    },
    xAxis:{
        data:['2000','2005','2010','2015','2020']
    },
    yAxis:{},
    series:[{
        name:'排名',
        type:'line',
        lineStyle:{
            type:'solid',
            width:2
        },
        data:[6,9,8,8,7]
    }]
}
chartTo.setOption(option)
var hot = new Handsontable(chart,{
    data:[
        ['Java','1','降','-0.01%'],
        ['C','2','升','+2.44%'],
        ['Python','3','升','+1.41%'],
        ['C++','4','降','-2.58%'],
        ['C#','5','升','+2.07%'],
        ['Visual Basic .NET','6','降','-1.17%'],
        ['JavaScript','7','降','-0.85%']
    ],
    contextMenu:true,
    manualRowResize:false,
    manualColumnResize:false,
    rowHeaders:false,
    autoColumnSize:true,
    colHeaders:["语言名称","排名","升或降","变化幅度"],
    colWidths:[200,200,200,200],
    
})

