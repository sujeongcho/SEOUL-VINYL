var count = 1;
var countEl = document.getElementById("count");
var total_count = document.getElementById("total_count");
var total_count_view = document.getElementById("total_count_view");

function plus(){
    count++;
    countEl.value = count;
    total_count_view.value = (total_count.value * countEl.value).toLocaleString();
}
function minus(){
    if(count > 1){
        count--;
        countEl.value = count;
        total_count_view.value = (total_count.value * countEl.value).toLocaleString();
    }
}

