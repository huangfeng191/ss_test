// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


Date.isLeapYear = function (year) { 
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
};
 
Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
 
Date.prototype.isLeapYear = function () { 
    return Date.isLeapYear(this.getFullYear()); 
};
 
Date.prototype.getDaysInMonth = function () { 
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
}

Date.prototype.AddMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
}



function ConvertToDate(Value, Format)
{
    if (Format == undefined)
    {
    
        Format = "yyyy-MM-dd hh:mm:ss";
        
    }
    var Chars = new Date().Format("yyyy/MM/dd hh:mm:ss").split(/[^0-9]/g);
    Value = Value.split(/[^0-9]/g);
    Format = Format.split(/[^yMdhms0-9]/g);
    for (var i = 0, len = Chars.length; i < len; i++)
    {
        if (Format[i])
        {
            switch (Format[i])
            {
                case "yyyy":
                    {
                        Chars[0] = Value[i] || Chars[0];
                    }
                    break;
                case "MM":
                case "M":
                    {
                        Chars[1] = Value[i] || Chars[1];
                    }
                    break;
                case "dd":
                case "d":
                    {
                        Chars[2] = Value[i] || Chars[2];
                    }
                    break;
                case "hh":
                case "h":
                    {
                        Chars[3] = Value[i] || Chars[3];
                    }
                    break;
                case "mm":
                case "m":
                    {
                        Chars[4] = Value[i] || Chars[4];
                    }
                    break;
                case "ss":
                case "s":
                    {
                        Chars[5] = Value[i] || Chars[5];
                    }
                    break;
                default:
                    {
                        Chars[i] = Format[i];
                    }
                    break;
            }
        }
        else
        {
            switch (i)
            {
                case 1:
                case 2:
                    {
                        Chars[i] = "01";
                    }
                    break;
                default:
                    {
                        Chars[i] = "00";
                    }
                    break;
            }
        }
    }

    Chars.splice(5, 0, ":");
    Chars.splice(4, 0, ":");
    Chars.splice(3, 0, " ");
    Chars.splice(2, 0, "/");
    Chars.splice(1, 0, "/");

    return new Date(Chars.join(""));
}