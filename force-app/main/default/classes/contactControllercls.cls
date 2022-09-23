public class contactControllercls {
    @AuraEnabled
    public static List<Contact> getContacts(String recId) {
        List<Contact> contacts =
                [SELECT Id, Name, Phone, Email FROM Contact];
        return contacts;
}
}