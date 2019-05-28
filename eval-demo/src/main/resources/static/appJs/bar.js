
var $evalNameUrl = '/dropDown/getEvalNameDropdown';
var initControllers = (function () {
    return {
        init: function () {
            // 柱状图
            initBar();
            // 柱状图
            // initSimpleBar();
            // 初始化折线
            // initBrokenLine();
            // initEvents();
        }
    }
})();


/**
 * 初始化按钮事件
 */
function initEvents() {
    $("#btn_export").click(function () {
        html2canvas($('#mainContext')[0], {
            onrendered: function (canvas) {
                context = canvas.getContext("2d");
                context.fillStyle = "#fff";
                //返回图片URL，参数：图片格式和清晰度(0-1)
                var pageData = canvas.toDataURL('image/jpeg', 1.0);
                //方向默认竖直，尺寸ponits，格式a4【595.28,841.89]
                var pdf = new jsPDF('', 'pt', 'a4');
                //需要dataUrl格式
                pdf.addImage(pageData, 'JPEG', 0, 0, 595.28, 592.28 / canvas.width * canvas.height);
                pdf.save("echarts图表.pdf");
            },
            background: '#fff'
        })
    })
}



function initBar() {
    var configure = {
        id: 'bar-simple',
        titleText: '',
        url: '/report/echarts/barSimple',
        xAxisName: '', // x轴的名称
        yAxisName: '点击量', // y轴的名称
        yaxisLabel: {},
        seriesName: '某站点用户访问来源', // series的名称
        barWidth: '30',
    }
    var queryParams = function (params) {
        return BsTool.getFormData("searchFormCondition");
    }
    EchartsTool.initBarSimple(configure, queryParams);
}
