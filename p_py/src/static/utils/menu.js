export function CreateIndex(menus){
    let idx = {};

    let proc = (mns, road) => {
        mns.forEach((m) => {
            let temp = {...m, road: [...road, m.Id]};
            delete temp.Children;
            idx[m.Id] = temp;
            proc(m.Children || [], temp.road);
        });
    };

    proc(menus, []);

    return idx;
}

export function FindMenu({Id, Val}, menuDic = {}){
    if(Id){
        return menuDic[Id] || {};
    }
    let mns = Object.values(menuDic);
    for(let i = 0; i < mns.length; i++){
        let m = mns[i].Val || "";
        if(m == Val || (m != ""
            && Val.indexOf("\\") > -1
            && Val.replace(/\\/g, '/').indexOf(m) > -1)){
            return mns[i];
        }
    }
    if(Val.indexOf("?")){
        Val = Val.split("?")[0];
        for(let i = 0; i < mns.length; i++){
            let m = (mns[i].Val || "").split("?")[0];
            if(m == Val || (m != ""
                && Val.indexOf("\\") > -1
                && Val.replace(/\\/g, '/').indexOf(m) > -1)){
                return mns[i];
            }
        }
    }
    return null;
}

export function FindHistory({Id, Val}, his = []){
    if(Id){
        return his.find((h) => {
            return h.Id == Id;
        });
    }
    else{
        return his.find((h) => {
            return h.Val == Val;
        });
    }
}

export function TransMenu(menu){
    if(Array.isArray(menu)){
        menu.forEach((m) => {
            TransMenu(m);
        });
    }
    else{
        menu.Id = menu._id;
        menu.Name = menu.name || '';
        menu.Icon = menu.icon || '';
        menu.Val = menu.value || '';
        menu.Children = menu.children || [];
        menu.extend = menu.ext || '';
        if(menu.Children.length > 0){
            menu.Children.forEach((m) => {
                TransMenu(m);
            });
        }
    }
}
