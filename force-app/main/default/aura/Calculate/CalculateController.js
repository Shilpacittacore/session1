({
	Addition : function(component, event, helper) {
        helper.helperAddition(component, event, helper);
		
	},
    subtraction : function(component, event, helper){
        helper.helpersubtraction(component, event, helper);
    
},
    Multiplication : function(component, event, helper){
        helper.helpermultiplication(component, event, helper);
    
    },
    division : function(component, event, helper){
    var s1=component.get("v.num1");
        var s2=component.get("v.num2");
    var res=s1/s2;
        component.set("v.num3",res);
    
    },
    modulus : function(component, event, helper){
    var s1=component.get("v.num1");
        var s2=component.get("v.num2");
    var res=s1%s2;
        component.set("v.num3",res);
    
    },
})