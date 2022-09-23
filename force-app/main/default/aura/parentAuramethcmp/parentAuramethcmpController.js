({
	myAction : function(component, event, helper) {
		var childcmp = component.find("childComp");
        var retMess = childcmp.exposeMethod('Hai','Universe');
        alert('retmessage is:'+retMess);
	}
})