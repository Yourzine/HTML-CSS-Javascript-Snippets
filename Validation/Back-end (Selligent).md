Back-end (Selligent) Validation
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

**Postal code**  
Validation: has to match the ABCD12 pattern  
SIM-constraint: CHKREGEX('^[1-9][0-9]{3}\s?[a-zA-Z]{2}$',@POSTCODE)  

**IBAN**  
Validation: has to match the IBAN pattern  
SIM-constraint: CHKREGEX('^[A-Z]{2}[0-9]{2}[A-Z]{4}[0-9]{10}$',@IBAN)  

**Birthday**  
Validation: correct date according to dd-mm-yyyy  
SIM-constraint: ISDATE(@BIRTHYEAR&@BIRTHMONTH&@BIRTHDAY)=1  

**Birthday 2**  
Validation: correct date according to dd-mm-yyyy  
SIM-constraint: ISDATE(@BIRTHDATE)  

**Phone number**  
Validation: matches the 0612345678 pattern  
SIM-constraint: LEFT(@PHONE,1)=0 AND MID(@PHONE,2,1)=6 AND LEN(@PHONE)=10  
