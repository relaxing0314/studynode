//判断数组中是否存在空值
export function arrIsHasNull(arr){
	let startTrue = true;
	for(let i=0;i<arr.length;i++){
		if(arr[i] == ""){
			startTrue = false;
			break;
		}else{
			startTrue = true;
		}
	}
	return startTrue;
}
export function shallowClone(obj){
    var clone = {};
    for(var p in obj){
        if(obj.hasOwnProperty(p)){
            clone[p] = obj[p];
        }
    }
    return clone;
}

export function setName(val){
  return `${val}：`;
}

//去除所有空格
export function trim(str){
	if(str && typeof(str) === 'string'){
		return str.replace(/(^\s*)|(\s*)$/g,'');
	}
}
//提示
export function Message(obj,isClose,mes,setType){
	const type = {0:'error',1:'success',2:'warning'};
	obj.$message({
		showClose: isClose,
	    message:mes,
	    type:type[setType]
  	});
}
//分割id和name
export function toSplit(data,num){
	const id_name_arr = data.split("//");
    return id_name_arr[num];
}

//计算后n分钟的时间
export function addMinutes(date,minutes){
    minutes=parseInt(minutes);
	var interTimes=minutes*60*1000;
	interTimes=parseInt(interTimes);
	return Date.parse(date)+interTimes;
}
//计算前n分钟的时间
export function desendMinutes(date,minutes){
    minutes=parseInt(minutes);
    var interTimes=minutes*60*1000;
    interTimes=parseInt(interTimes);
    return new Date(Date.parse(date)-interTimes);
}
//登录是否超时
export function loginOvertime(loginOutTime){
  	if(loginOutTime < Date.parse(new Date())){
    	return false;
  	}else{
    	return true;
  	}
}
export function isLoginOver(obj){
	if(!loginOvertime(obj.$store.state.memberInfo.loginOut)){
    	obj.$store.dispatch('clear_local');
    	obj.$router.push({ path: '/login' });
  	}else{
    	const memberInfo = {...obj.$store.state.memberInfo,...{loginOut:addMinutes(new Date(),30)}};
    	obj.$store.dispatch('update_local',{memberInfo});
  	}
}
