function CRUDSetting(text) {
    this.text = text;
    this.parseText = () => {
            var defaults = {
                "sn": "",
                "nm": "",
                "showType": "text",
                "dataType": "String",
                "colSpan": 1,
                "width": 100,
                "fmt": "",
                "hidden": false
            }
            var types = {
                "c": {
                    "showType": "combo",
                    "fmt": "",
                    "dataType": "String",
                },
                "d": {
                    "showType": "datetime",
                    "fmt": "yyyyMMdd",
                    "dataType": "String"
                },
                "a": {
                    "showType": "textarea",
                    "colSpan": 3,
                    "dataType": "String"
                },
                "t": {
                    "showType": "text",
                    "dataType": "String"

                }
            }
            var rows = []
            text.split("\n").forEach(function(r) {
                var row = Object.assign({}, defaults)
                var [sn, nm, dataType, showType, ...optional] = r.split(" ");
                row.sn = sn;
                row.nm = nm;
                if (!nm) {
                    row.nm = row.sn
                }
                row.dataType = dataType || "String";
                row.showType = showType || "t";
                if (["str", "String", "string"].includes(dataType)) {
                    row.dataType = "String";
                }

                Object.keys(types).forEach(function(k) {
                    if (k == row.showType) {
                        Object.assign(row, types[k])
                    }
                })
                // 最后一个字段复制
                if (optional && optional.length > 0) {
                    lastOptional = {};
                    lastA = optional.pop().split(",")
                    lastA.forEach(function(s) {
                        if (s) {
                            var [k, v] = s.split(":")
                            if (k && v) {
                                lastOptional[k] = v
                            }
                        }
                    })
                    Object.assign(row, lastOptional)

                }
                rows.push(row)


            })
            return rows;
        },
        this.transformColumns = () => {
            var cols = []
            this.rows.forEach(function(row) {

                column = `{ "field": "${row.sn}","title": "${row.nm}", "width": ${row.width} }`;
                column = JSON.parse(column);
                if (row.dataType == "combo") {
                    column["binding"] = row.fmt
                } else if (row.dataType == "datetime") {
                    if (row.fmt == "yyyyMMdd" || row.fmt == "yyyy-MM-dd") {
                        column["formatter"] = "DateFormatter"
                    } else if (row.fmt == "yyyyMM" || row.fmt == "yyyy-MM") {
                        column["formatter"] = "MonthFormatter"
                    }

                }
                cols.push(column);
            })
        },
        this.transformInputs = () => {
            var cols = []
            this.rows.forEach(function(row) {

                var input =
                    `{ "Field": "${row.sn}", "Name": "${row.nm}", ShowType: "${row.ShowType}",DataType: "${row.showType}", ColSpan: "${row.colSpan}" }`;
                input = JSON.parse(input);
                if (row.dataType == "combo" || row.dataType == "datetime") {
                    input["Ext"] = row.fmt
                }
                cols.push(input);
            })
        },
        this.transformProperties = () => {
            var cols = []
            this.rows.forEach(function(row) {

                var property = `{ "Field": "${row.sn}", "Name": "${row.nm}", ShowType: "${row.showType}",DataType: "${row.dataType}" },`;
                property = JSON.parse(property);
                if (row.dataType == "combo" || row.dataType == "datetime") {
                    property["Ext"] = row.fmt
                }
                cols.push(property);
            })
        },
        this.transformQuery = () => {
            var cols = []
            this.rows.forEach(function(row) {
                if (row.q) {

                    var query = `{ "Field": "${row.sn}", "Label": "${row.nm}", "Type":  "QText"},`
                    query = JSON.parse(query);
                    if (row.dataType == "combo") {
                        row["Type"] = "QCombox";
                        query["Ext"] = row.fmt
                        query["Source"] = row.fmt
                    } else if (row.dataType == "datetime") {
                        row["Type"] = "QDatetime"
                        row["Ext"] = { "Format": row.fmt };
                    }
                    cols.push(query);

                }
            })
        },

        this.rows = this.parseText()

    this.get = () => {
        o = {}
        o.columns = this.transformColumns()
        o.inputs = this.transformInputs();
        o.properties = this.transformProperties()
        o.query = this.transformQuery();
        return o;


    }
};


var a = "sf s sd \n sf s d f width:200\n ad";

var C = new CRUDSetting(a);




getConfig, 把之前的配置拿过来,

生成的时候只取前面的三个字段, 以后有时间再修改stock里面的

何时生成呢？
计划生成的时候,
循环 cell, 可以理解同一cell 编码 结果一样
生成的时候 可以参照源

生成一份配置, 保存一份配置, 记录一下日志