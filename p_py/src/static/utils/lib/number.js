/*
* 除以指定数值后的商
* Arg：除数
* Type：缺省表示不处理结果，U表示向上取整，L表示向下取整
*/
Number.prototype.Divide = function (Arg, Type) {
    try {
        var Rtn = this / Arg;
        switch (Type) {
            case "U":
                {
                    Rtn = Math.ceil(Rtn);
                    //                    if (Rtn.indexOf(".") > 0)
                    //                    {
                    //                        Rtn = Number(Rtn.replace(/.[0-9]+/g, "")) + 1;
                    //                    }
                }
                break;
            case "L":
                {
                    //Rtn = Rtn.replace(/.[0-9]+/g, "");
                    Rtn = Math.floor(Rtn);
                }
                break;
            default:
                {
                }
                break;
        }
        return Rtn;
    }
    catch (ex) {
        return ex;
    }
}
//数值格式化
Number.prototype.FormatString = function (Format) {
    var Fmt = Format.split(".");
    var Dcs = Format.match(/0+/g);
    var Dcl = 0;
    if (Dcs.length == 2) {
        Dcl = Dcs[1].length;
    }
    var Rst = this.toFixed(Dcl);
    var Vs = Rst.split(".");
    var Bp = Fmt[0].split("").reverse();
    jQuery.extend(true, Bp, Vs[0].split("").reverse());
    if (Vs.length == 2) {
        var Ap = Fmt[1].split("");
        jQuery.extend(true, Ap, Vs[1].split(""));
        Rst = Bp.reverse().join("") + "." + Ap.join("");
    }
    else {
        Rst = Bp.reverse().join("")
    }
    return Rst
};

//获取数值的小数位数,DOA为近似度，大于0的整数，数值越大越准确
Number.prototype.GetDecimalPlace = function (DOA) {
    if (jQuery.isNumeric(DOA) && DOA > 0) {
        DOA = Math.ceil(DOA);
        var Regx = new RegExp("\.[0-9]*[1-9]0{" + DOA + "}");
        var S = this.toString().match(Regx);
        if (S && S.length > 0) {
            return S[0].length - DOA - 1;
        }
        else {
            return this.GetDecimalPlace();
        }
    }
    else {
        var Str = "" + this;
        if (Str.indexOf(".") > 0) {
            return Str.length - Str.indexOf(".") - 1;
        }
        else {
            return 0;
        }
    }
};