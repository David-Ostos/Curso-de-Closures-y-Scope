const myGlobal = 0;

function myFunction(){
    const myNumbre = 1;
    console.log(myGlobal);

    function parent(){
        const inner = 2;
        console.log(myNumbre,myGlobal);

        function chlid(){
            console.log(inner,myNumbre,myGlobal);
        }
        return chlid();
    }
    return parent();
}

myFunction();


