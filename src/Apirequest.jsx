const ApiRequest = async(url='',optionopj=null,errmsg=null)=>{
try{
    const response = await fetch(url,optionopj)
    if(!response.ok) throw Error('Please reload the app')
}
catch(err){
    errmsg=err.Message
}
finally{
    return errmsg
}
}

export default ApiRequest