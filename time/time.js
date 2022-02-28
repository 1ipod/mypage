
function getime(){
    const date = new Date()
    function maketime(hr, min){
        if (hr < 12 ) {
            var listtime = [hr,":",min," am"]
            return listtime.join().replaceAll(',','')
        } else if(hr > 12 && hr < 24){
            var adjusthr = hr - 12 
            var listtime = [adjusthr,":",min," pm"]
            return listtime.join().replaceAll(',','')
        }else if(hr = 24){
            var listtime = [12,":",min," am"]
            return listtime.join().replaceAll(',','')
        }
    }
    var hr = date.getHours()
    var min = date.getMinutes()
    return maketime(hr,min)
}
