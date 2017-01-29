function js_check_type(a) {
    if (a !== null && a !== undefined && a.__proto__.constructor.name !== "Number" && a.__proto__.constructor.name !== "String" && a.__proto__.constructor.name !== "Function") {
        return true;
    }
    return false;
}

function js_clone_object(a) {
    if (js_check_type(a)) {
        if (a.__proto__.constructor.name == "Array") {
            var r = [];
            a.forEach(function(item) {
                if (js_check_type(item)) {
                    r.push(js_clone_object(item));
                } else {
                    r.push(item);
                }
            });
            return r;    
        } else if (a.__proto__.constructor.name == "Object") {
            var r = {};
            for (var key in a) {
                if (Object.prototype.hasOwnProperty.call(a, key)) {
                    if (js_check_type(a[key])) {
                        r[key] = js_clone_object(a[key]);
                    } else {
                        r[key] = a[key];
                    }
                }
            }
            return r;
        }
    }
    return a;
}
