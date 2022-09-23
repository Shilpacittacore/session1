({
	helperAddition : function(component,event,helper) {
		var s1=component.get("v.num1");
        var s2=component.get("v.num2");
        console.log("### num1 is"+s1);
        var res=s1+s2;
        component.set("v.num3",res);
	},
    helpersubtraction: function(component,event,helper){
        var s1=component.get("v.num1");
        var s2=component.get("v.num2");
        var res=s1-s2;
        component.set("v.num3",res);
    },
    helpermultiplication: function(component,event,helper){
        var s1=component.get("v.num1");
        var s2=component.get("v.num2");
        var res=s1*s2;
        component.set("v.num3",res);
    },
    
})