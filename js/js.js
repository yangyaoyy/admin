// JavaScript Document

function alertTc(tcObj){
	tcObj.show();
	var tcObjHei = tcObj.outerHeight();
	var tcObjWid = tcObj.outerWidth();
	tcObj.css("margin-left",-(tcObjWid/2));
	tcObj.css("margin-top",-(tcObjHei/2));
	$(".clo,.cancel").click(function(){
		$(this).parents(".alert").hide();
	});
}

var start = {
	dateCell: '.inpstart',
	format: 'YYYY-MM-DD',
	minDate: jeDate.now(0), //设定最小日期为当前日期
	isinitVal:true,
	festival:true,
	ishmsVal:false,
	isTime:false,
	maxDate: '2099-06-30', //最大日期
	choosefun: function(elem,datas){
		end.minDate = datas; //开始日选好后，重置结束日的最小日期
	}
};
jeDate(start);	
var end = {
	dateCell: '.inpend',
	format: 'YYYY-MM-DD',
	minDate: jeDate.now(0), //设定最小日期为当前日期
	festival:true,
	isTime:false,
	maxDate: '2099-06-16', //最大日期
	choosefun: function(elem,datas){
		start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
	}
};
jeDate(end);


jeDate({
    dateCell: '.data',
    isinitVal:true,
    skinCell:"jedateblue",
    format: 'YYYY-MM-DD'
});


