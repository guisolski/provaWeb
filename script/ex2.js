$(document).ready(function(){
    function getAllValue(t){
        let r = []
        for (let index = 0; index < t.length; index++) {
           r.push($(t[index]).val());  
        }
        return r;
    }
    function valida(t){
        let r = true;
        //console.log(t);
        for (let index = 0; index < t.length; index++) {
           if(t[index] == "" || t[index] == " ") r = false;  
        }
        return r;
    }
    $("#Gravar").click(function(){
        var resultado = valida(getAllValue($('input').each(function(){ $(this)})));
        if(resultado)
            alert("Gravado com sucesso");
        else
            alert("Todos os campos devem ser preenchidos!");
    });
    $("#Limpar").click(function(){
        $('input').each(function(){ $(this).val("")}); 
    });
});