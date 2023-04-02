let _day = new Date()
let temp = ''
switch(_day.getDay()){
    case 0: temp = 'یکشنبه'; break;
    case 1: temp = 'دوشنبه'; break;
    case 2: temp = 'سه شنبه'; break;
    case 3: temp = 'چهارشنبه'; break;
    case 4: temp = 'پنجشنبه'; break;
    case 5: temp = 'جمعه'; break;
    case 6: temp = 'شنبه'; break;
}
document.getElementById('_dayy').innerText= '' + temp + '،' + _day.toLocaleDateString('fa')

//////////////startMenuHam--------

let flag = 1
let m = document.getElementById('mobile')
let _h = document.getElementById('mobile').clientHeight

document.getElementById('mobile').style.height=0+'px'
function _dropMenu(self){
    _span = self.children

    if(flag % 2){
        _span[0].style.transform='rotate(36deg)'
        _span[1].style.opacity='0'
        _span[2].style.transform='rotate(-36deg)'

        document.getElementById('mobile').style.height= _h+'px'
    }else{
        _span[0].style.transform='rotate(0)'
        _span[1].style.opacity='1'
        _span[2].style.transform='rotate(0)'

        document.getElementById('mobile').style.height=0+'px'
    }
    flag++
}