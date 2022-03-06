let x= 1
function a(){

    b()
    x = 2
}


function b(){
    
    setTimeout(() => {
        x=3
        c()
    }, 3000);
    
}

function c(){
    console.log(x)
}

a();

