Selligent Validation
--------------

In the Data Component in the flow define what condition will be validated before the data operation is executed.

**First name**  
Validation: length of at least 2 characters  
SIM-constraint: LEN(@FIRSTNAME)>1  

**Password**  
Validation: length of at least 6 characters  
SIM-constraint: LEN(@PASSWORD)>5  

**Confirm Password**  
Validation: inputs have to match
SIM-constraint: @CONFIRM_PASSWORD=@PASSWORD  

**Mail**  
Validation: email syntax check  
SIM-constraint: CHKMAIL(@MAIL)  

**Mail 2**  
Validation: email syntax check + ping  
SIM-constraint: CHKMAIL(@MAIL,3000)  

POSTCODE
Validation: moet volgens patroon ABCD12 zijn.
SIM-constraint: CHKREGEX('^[1-9][0-9]{3}\s?[a-zA-Z]{2}$',@POSTCODE)

IBAN
Validation: moet volgens het IBAN patroon zijn.
SIM-constraint: CHKREGEX('^[A-Z]{2}[0-9]{2}[A-Z]{4}[0-9]{10}$',@IBAN)

BIRTHDAY
Validation: geldige datum volgens dd-mm-jjjj
SIM-constraint: ISDATE(@GEBOORTEJAAR&@GEBOORTEMAAND&@GEBOORTEDAG)=1 

PHONE
Validation: volgens 06-12345678
SIM-constraint: LEFT(@PHONE,1)=’0’ AND MID(@PHONE,2,1)=6 AND LEN(@PHONE)=10 
