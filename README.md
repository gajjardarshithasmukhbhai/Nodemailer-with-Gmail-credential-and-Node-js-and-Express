## Nodemailer with Gmail credential all steps to learn make without spam folder
### steps you follow make gmail credential
**step:1** <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;open google developer console 
          [google developer console](https://console.developers.google.com/)
           
**step:2** <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;the after click **create** button and hit the enter and open **API Library**<br>
          &nbsp;&nbsp;&nbsp;&nbsp;click which should you required ex.Gmaail<br/>
        
**step:3** <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;click **Enable** button and  click **create credentials**<br>
          &nbsp;&nbsp;&nbsp;&nbsp;then after click Gmail ApI,Web server Node Js and UserData accessing and click **what credential I need?           ** <br/>
          
**step:4** <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;goto **credentials** and hit enter and go to **Oauth clientId** adn hit enter<br>
          &nbsp;&nbsp;&nbsp;&nbsp;then after click give basic answer like which platform ans.webapplication and hit enter your web-app credebtial ready <br/>
          
**step:5(Important part)** <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;you see client Id and checkbox right corner the pen symbol set hit the click<br>
          &nbsp;&nbsp;&nbsp;&nbsp;then after **Authorised redirect URIs** you set Just Like this **https://developers.google.com/oauthplayground** and copy this link and paste and hit **save**<br/>

**step:6**<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;more details any problem occur go to youtube this video [youtube video](https://youtu.be/JJ44WA_eV8E)<br/>&nbsp;&nbsp;&nbsp;&nbsp; jyare https://developers.google.com/oauthplayground/ ma clientId and client secret nakho tyare pop up avase this app isn't verified ema **Advanced** ma jai **goto gajjar darshit** par click kari ne permisson Alllow karvi ;-)
         
```javascript
let nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
host: 'smtp.gmail.com',
direct:false ,
port: 465,
secure: true,
auth:{
		user:'darshit.gajjar1998@gmail.com',
		type: 'OAuth2',
		clientId: 'usercontent.com',
	    clientSecret: "4xfdHdd6oEr",
	    refreshToken:'1/kkm,mm',
	}
});
let mailOptions={
                    from:'darshit.gajjar1998@gmail.com',
                    to:email,
                    subject: `Hello user you signup`,
                    html:`<html></html>
}
transporter.sendMail(mailOptions,(err,data)=>{
                              if(err)
                              {
                                        console.log("darshit error avi",err);
                              }
                              else{
                                        console.log('email sent');
                              }
});	
```
* **step 7:** Privacy policy 
&nbsp https://www.freeprivacypolicy.com/privacy/view/7278006192895fff41b101739d14a46c
