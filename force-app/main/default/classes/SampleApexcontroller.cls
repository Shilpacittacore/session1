public class SampleApexcontroller {
    
    @AuraEnabled
    public static String echoMethod(String tempstr)
    {
        String temp= 'Hello'+tempstr+ 'this is from Apex';
        return temp;
    }
}