({
  helperCalculate: function(component, event, helper) {
    var s1 = component.get("v.variable1");
    var s2 = component.get("v.variable2");
    var s3 = component.get("v.variable3");



   var res;
    switch (s3) 
    {
      case "+":
            res = s1 + s2;
        component.set("v.result", res);
        break;
      case "-":
        res = s1 - s2;
        component.set("v.result", res);
        break;
      case "*":
        res = s1 * s2;
        component.set("v.result", res);
        break;
      case "/":
        res = s1 / s2;
        component.set("v.result", res);
        break;
      default:
        alert("Please try again");
    }
        
        
       //fire event with  values
        //
        var event = $A.get("e.c:mathEvent");
        event.setParams({
            "eventVar1":s1,
            "eventVar2":s2
        });
        event.fire();
    }
     
    })