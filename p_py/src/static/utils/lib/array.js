Array.prototype.SortNumberFind = function (Target, Compare, Range) {
    if (this.length == 0) {
        return null;
    }
    else {
        if (jQuery.isFunction(Compare) == false) {
            Compare = function (t, v) {
                if (t == v) {
                    return "=";
                }
                else if (t > v) {
                    return ">";
                }
                else if (t < v) {
                    return "<";
                }
            };
        }
        var Idx = { min: 0, max: this.length - 1 };
        var idx = null, val;
        var sort = Compare(this[Idx.min], this[Idx.max]) === "<"; //是否正序
        if (Compare(Target, this[Idx.min]) === "=") {
            idx = Idx.min;
        }
        else if (Compare(Target, this[Idx.max]) === "=") {
            idx = Idx.max;
        }
        else if (sort && Compare(Target, this[Idx.min]) === ">" && Compare(Target, this[Idx.max]) === "<"
            || Compare(Target, this[Idx.min]) === "<" && Compare(Target, this[Idx.max]) == ">") {
            while (Compare(Target, val) !== "=") {
                idx = Math.floor((Idx.min + Idx.max) / 2);
                val = this[idx];
                if (Compare(val, Target) === "<") {
                    Idx[sort ? "min" : "max"] = idx;
                }
                else if (Compare(val, Target) === ">") {
                    Idx[sort ? "max" : "min"] = idx;
                }
            }
        }
        return idx;
    }
};

//Binary Search
Array.prototype.searchIndex = function (find, comparator) {

    var low = 0, high = this.length - 1,
        i, comparison;

    if (comparator == null) {
        comparator = function (x, y) {
            return x - y
        }
    }

    while (low <= high) {
        i = Math.floor((low + high) / 2);
        comparison = comparator(this[i], find);
        if (comparison < 0) { low = i + 1; continue; };
        if (comparison > 0) { high = i - 1; continue; };
        return i;
    }

    return -1;
};

Array.prototype.stringIndex = function (find) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === find) {
            return i
        }
    }
    return -1
};