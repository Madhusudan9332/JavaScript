let h = 5;
for(var i=h; i>0; i--){
    count = 1;
    for(var j=1; j<2*h; j++){        
        if(j>=i){
            print(count++);
        }else{
            print(" ");
        }
    }
}