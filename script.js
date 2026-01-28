const formatDoc=(cmd,value=false)=>{
    if(value){
        document.execCommand(cmd,false,value);
    }else{
        document.execCommand(cmd);
    }
};

const handleAddLink=()=>{
    const url=prompt("Enter the URL");
    formatDoc("createLink",url);
}