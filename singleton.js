var singleton=function(name){
	this.name=name;
	this.instance=null;
}
singleton.prototype.getName=function(){
	alert(this.name);
}
singleton.getInstance= function(name){
 	if(!this.instance){
	this.instance= new singleton(name);
	}
	return this.instance;
}

