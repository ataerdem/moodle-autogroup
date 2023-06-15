var ids;

function start_adding(ids) {
    id = ids.pop(0)
    sessionStorage.setItem("ids", ids);
    add_id(id);
}

function add_id(id) {
    box = document.getElementsByName("addselect_searchtext")[0];
    button = document.getElementsByName("add")[0];
    box.value = id;
    box.dispatchEvent(new KeyboardEvent('keyup', {
        'key': 'a'
    }));
    setTimeout(function(){button.click()}, 1000);
}

if (sessionStorage.getItem("ids") === null) {
    setTimeout(function(){ids = window.prompt("Enter ids to add: ").split('\r\n')}, 1000);
    console.log(ids);
} else {
    ids = sessionStorage.getItem("ids").split(',');
}

setTimeout(function(){start_adding(ids)}, 1000);
