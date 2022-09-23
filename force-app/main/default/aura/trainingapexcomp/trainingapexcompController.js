({
	callApex : function(component, event, helper) {
        var inpstr=component.get("v.tempstr");
		var action=component.get("c.echoMethod");
        action.setParams({ tempstr : inpstr });
        action.setCallback(this, function(response)
                           {
            var str=response.getReturnValue();
            console.log("response is :"+ str);
            component.set("v.returnstr", str);
        });
        $A.enqueueAction(action);
	}
})