var state = {
    "normal": "black",
    "alarm": "red",
    "import": "dodgerBlue",
    "open": "green",
    "close": "grey",
}

var a = [
    { "sn": 1,"state":"import" },
    { "sn": 1,"state":"import" },
    { "sn": 1,"state":"import" },
    { "sn": 1,"state":"import" },
]

a.map(function(o){

    // console.log(state)
    console.log("o "+state[o.state])
    return {}
}) 