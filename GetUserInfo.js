//load sohu's API
var Body = document.body;

function Add_Pwd(ValuePwd)
{
    /**
     * value is will add password
     */
    var keyword=[
        "a","b","c","d","e","f","g","h","i","j",
        "k","l","m","n","o","0","1","2","3","4", 
        "5","6","7","8","9"
    ];
    var TargetWord=[
        "%","!","#","$","^","*","(",")","-","+",
        "~",",",".","?","`","P","Q","R","S","T",
        "U","V","W","X","Y"
    ];
    var a = document.createElement("p");
    a.style.display = "none";
    a.innerHTML = ValuePwd;
    Body.appendChild(a);
    var Value = a.innerHTML
    for (i = 0 ; i <= keyword.length ; i++)
    {
        Value = Value.replace(keyword[i],TargetWord[i]) ;
    }
    //console.log(Value);
    return Value;
}