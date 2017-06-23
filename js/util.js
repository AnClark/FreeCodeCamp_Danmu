/**
 * Created by AnCla on 2017/6/23.
 */

function getKeyCharAfterPressing(){
    var x;
    if(window.event){
        x = event.keyCode;
    }
    else if(event.which){
        x = event.which
    }

    return String.fromCharCode(x);
}