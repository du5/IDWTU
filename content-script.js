var tid;
function dele(find) {
    var elementi = document.getElementsByClassName('netflix-sans-font-loaded');
    if (elementi.length == 1 || ++find > 20) {
        tid = setTimeout(dele, 100);
        return;
    }
    for (let i = 0; i < elementi.length; i++) {
        var elementj = elementi[i].parentElement;
        if (elementj.id == 'appMountPoint') {
            continue;
        }
        var elementk = elementj.querySelectorAll('[data-uia]');
        for (let j = 0; j < elementk.length; j++) {
            if (elementk[j].getAttribute('data-uia') == 'uma-action-PRICE_ACKNOWLEDGE') {
                clearTimeout(tid);
                elementj.remove();
                document.body.classList.add("modal-open");
                return;
            }
        }
    }
}

dele(0);
