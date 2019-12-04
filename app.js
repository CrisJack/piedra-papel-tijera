$(document).ready(function()
{
$('#botones').on('click','button',function(){
    var idboton=$(this).attr('id');
    var valoru=$(this).attr('value2');    
    //console.log(idboton);
    $('#yo').removeClass().addClass($(this).attr('value'));
    var computer=Math.floor(Math.random() * 3);


    if(computer===0){
        $('#comp').removeClass().addClass('papel col-3');
        var valorc= 'papel';
    }else if(computer===1){
        $('#comp').removeClass().addClass('piedra col-3');
        var valorc= 'piedra';
    }else if(computer===2){
        $('#comp').removeClass().addClass('tijera col-3');
        var valorc= 'tijera';
    }

    if(idboton==0 && computer==0 || idboton==1 && computer==1 || idboton==2 && computer==2){
        document.getElementById('res').innerHTML = 'Empataste';
        document.getElementById('objetou').innerHTML = valoru;
        document.getElementById('objetoc').innerHTML = valorc ;
    }
    if(idboton==0 && computer==2 || idboton==1 && computer==0 || idboton==2 && computer==1){
        document.getElementById('res').innerHTML = 'Perdiste';
        document.getElementById('objetou').innerHTML = valoru;
        document.getElementById('objetoc').innerHTML = valorc ;
    }
    if(idboton==0 && computer==1 || idboton==1 && computer==2 || idboton==2 && computer==0){
        document.getElementById('res').innerHTML = 'Ganaste';
        document.getElementById('objetou').innerHTML = valoru;
        document.getElementById('objetoc').innerHTML = valorc ;
    }


});
});