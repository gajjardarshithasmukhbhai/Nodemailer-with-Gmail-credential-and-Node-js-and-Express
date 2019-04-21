//client-:346380356857-qvdqul9bikn8fung0ia4tvqnsc70fdip.apps.googleusercontent.com
//clientsecret:-3FtlfrqEvLPqG0ghNCVWOSQ



const path=require('path');
let inner_data=[];
const fs=require('fs');
let Cart=require("../modal/cart.js");
// let Data_conn=require("../modal/update_cart.js");
var sequelize=require('../util/database.js');
var Database=require('../modal/all_file_data.js');
var texsting=require('../index.js');
var User=require('../modal/user.js');
var Signup=require('../modal/signup.js');
let getdb=require('../util/database.js');
let mongodb=require('mongodb');
let bcrypt=require('bcryptjs');
let nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
host: 'smtp.gmail.com',
direct:false ,
port: 465,
secure: true,
auth:{
		user:'darshit.gajjar1998@gmail.com',
		type: 'OAuth2',
		clientId: '346380356857-40ufl3fshsquem48698ld626biv2rbna.apps.googleusercontent.com',
	    clientSecret: "4xfRKPYfjX5QJrAedHdd6oEr",
	    refreshToken:'1/1xL5LgpZg2RoYMBk6h6GLWEHNBy3YixMX7XUyNLJw2o',
	}
});
exports.signup_enter_controller=(req,res,next)=>{
	let email=req.body.email1;
	let password=req.body.password1;
	let retype=req.body.password2;
	//signup se
	if(email!=null && password.length>5 && password==retype)
	{
		console.log("hasmukh Gajjar");
		return bcrypt.hash(password,12)
			.then(hashPassword=>{
			let signup=new Signup(email,hashPassword,hashPassword);
			setTimeout(()=>{
				signup.save()
				.then(resolve=>{
					req.session.loggedIn=true;
					res.redirect('shop');
					let mailOptions={
							from:'darshit.gajjar1998@gmail.com',
							to:email,
							subject: `Hello user you signup`,
							html:`<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
    /* -------------------------------------
        INLINED WITH htmlemail.io/inline
    ------------------------------------- */
    /* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- */
    @media only screen and (max-width: 620px) {
      table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
      table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
        font-size: 16px !important;
      }
      table[class=body] .wrapper,
            table[class=body] .article {
        padding: 10px !important;
      }
      table[class=body] .content {
        padding: 0 !important;
      }
      table[class=body] .container {
        padding: 0 !important;
        width: 100% !important;
      }
      table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
      table[class=body] .btn table {
        width: 100% !important;
      }
      table[class=body] .btn a {
        width: 100% !important;
      }
      table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }
    /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
    @media all {
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
        line-height: 100%;
      }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
      .btn-primary table td:hover {
        background-color: #34495e !important;
      }
      .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
      }
    }
    </style>
  </head>
  <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
            <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hi there,</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">I ma Gajjar Darshit HasmukhBhai(CEO of cismox)<b>you signup in my web-app</b></p>
                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                          <tbody>
                            <tr>
                              <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="https://darshitgajjars.herokuapp.com" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Company website</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"><b>E-mail::-</b>${email}<br><b>password::-</b>${password}<br></p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Good luck! Hope it works.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                <tr>
                  <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                    <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">cismox Company Inc, E-204 vinod Tower shrinath recedency karanagr Road,kadi</span>
                    <br> phone number 7984552350 
                  </td>
                </tr>
                <tr>
                  <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                    Powered by <a href="http://htmlemail.io" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">Gajjar Group</a>.
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>`, 
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
		
				})
				.catch(err=>{
					console.log(err);
				});
			},60);
			});
			
	}
	else{
		console.log("gajjar darshit hasmukhbhai");
		res.render("signup",{show:"your password is minimu 5 character"});
	}
	
}
exports.add_product_data_controller=(req,res,next)=>{
		let UserId=User.UserId();
		let obj=new Database(req.body.Title,req.body.Image,req.body.price,req.body.description,UserId);
		obj.save()
		.then(resolve=>{
			if(resolve)
			{
				res.redirect("/shop");
			}
			else{
				res.render("index");
			}
		}).catch(err=>{
			console.log(err);
			res.end();
		});
}
exports.order_controller=(req,res,next)=>{
	res.render("order");
}
exports.admin_delete_product_controller=(req,res,next)=>{
	let delete_cart_id=req.params.iid;
	Database.productDelete(delete_cart_id)
	.then(e=>{
		res.redirect('/Admin_Product');
	})
	.catch(err=>{
		console.log('not solved');
			res.end();
	
	});
}
exports.add_products_controller=(req,res,next)=>{
	let email=req.body.email;
	let password=req.body.password;
		// User.saveUser(email,password)
		let sx=new User(email,password);
		sx.save()
		.then(resolve=>{
			if(resolve){
				console.log("gajju rock");
				req.session.loggedIn=true;
				res.redirect("/Add_product");//change res.redirect('Add_product');
				let mailOptions={
							from:'testing.gajjar1998@gmail.com',
							to:email,
							subject: `Hello user you sucessfully SignIn`,
														html:`<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
    /* -------------------------------------
        INLINED WITH htmlemail.io/inline
    ------------------------------------- */
    /* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- */
    @media only screen and (max-width: 620px) {
      table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
      table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
        font-size: 16px !important;
      }
      table[class=body] .wrapper,
            table[class=body] .article {
        padding: 10px !important;
      }
      table[class=body] .content {
        padding: 0 !important;
      }
      table[class=body] .container {
        padding: 0 !important;
        width: 100% !important;
      }
      table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
      table[class=body] .btn table {
        width: 100% !important;
      }
      table[class=body] .btn a {
        width: 100% !important;
      }
      table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }
    /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
    @media all {
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
        line-height: 100%;
      }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
      .btn-primary table td:hover {
        background-color: #34495e !important;
      }
      .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
      }
    }
    </style>
  </head>
  <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
            <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hi there,</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">I ma Gajjar Darshit HasmukhBhai(CEO of cismox)<b>you signIn in my web-app</b></p>
                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                          <tbody>
                            <tr>
                              <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="https://darshitgajjars.herokuapp.com" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Company website</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"><b>E-mail::-</b>${email}<br><b>password::-</b>${password}<br></p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Good luck! Hope it works.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                <tr>
                  <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                    <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">cismox Company Inc, E-204 vinod Tower shrinath recedency karanagr Road,kadi</span>
                    <br> phone number 7984552350 
                  </td>
                </tr>
                <tr>
                  <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                    Powered by <a href="http://htmlemail.io" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">Gajjar Group</a>.
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>`, 

							// text:'khatri chutyo'
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
			
			}
			else{
				res.render("index",{valid:false});
			}
		})
		.catch(err=>{
			console.log(err);
				res.end();		
		});
	
}
exports.Logout_controller=(req,res,next)=>{
	req.session.destroy(err=>{
		res.redirect('/');
	});
}
exports.admin_product_controller=(req,res,next)=>{
	// res.clearCookie('loggedIn');
	let xy=req.session.loggedIn;
	if(xy)
	{
		Database.fetchall().then((ata)=>{
			res.render("Admin_product",{data:ata});
		});
	}
	else{
		res.render("index",{wer:"your account is not verified"});
	}
}
exports.admin_edit_product_controller=(req,res,next)=>{
	let confirmId;
	let user_data=req.params.id;
	let delete_cart_id=req.params.iid;
	Database.findProduct(user_data).then((ata)=>{
		res.render("Admin_edit_product",{verifies_data:ata,csrf:req.csrfToken()});
	}).catch(err=>{
			res.end();

	});	
}
exports.admin_update_product_controller=(req,res,next)=>{
	let Id=req.params.Id;
	let title=req.body.update_title;
	let price=req.body.update_price;
	let description=req.body.update_description;
	let image=req.body.update_image;
	let UserId=User.UserId();
	// let cookie=req.session.loggedIn;
	Database.upda(Id,title,price,description,image,UserId).then(er=>{
		res.redirect('/Admin_Product');
	})
	.catch(err=>{
		console.log(err)
			res.end();

	});	
}
exports.cart_controller=(req,res,next)=>{
	res.redirect("/Carts");
}
exports.carts_controller=(req,res,next)=>{
	let KmId=req.body.ProductId;
	let KmPrice=req.body.price;
	let KmTitle=req.body.Title;

	Cart.cart(KmId,KmPrice,KmTitle)
	.then(resolve=>{
		setTimeout(()=>{
			res.redirect("/Carts");				
		},50)
	}).catch(err=>{
		console.log(err);
			res.end();

	});
}
exports.SignUp_controller=(req,res,next)=>{
	res.render("signup");
}
exports.cart_show_controller=(req,res,next)=>{
	let obej;	
	let db=getdb.getDb();
		Cart.information()
		.then(products=>{
				let totalPrICE;
				let checking=true;
				let sd=Object.values(products[0]);//imporatant method
				let NaNobject=sd[4];//imporatant method
				let Id=sd[0];//imporatant method
				console.log(NaNobject,"<-");
				if(isNaN(NaNobject))
                    {
                    	checking=false;
                    	console.log('gajjau rock');
                        db.collection('user').updateOne({_id:new mongodb.ObjectId(Id)},{$set:{totalPrice:0}})
                        .then(wer=>{
							res.render("cart",{cart_data:obej,totalPrice:totalPrICE});

                        })
                        .catch(err=>{console.log('err',err)});
                    }
				products.map(wer=>{

					totalPrICE=wer.totalPrice;
				});
				//[{data}]->data leva Object.values(products[0].items);
				obej=Object.values(products[0].items);
				if(checking)
				{
					res.render("cart",{cart_data:obej,totalPrice:totalPrICE});
				}
			}).catch(err=>{
				res.end();
				console.log(err);
			});	
}
exports.products_controller=(req,res,next)=>{
	res.redirect("/Shop");
}
exports.carts_redirect_controller=(req,res,next)=>{
	res.render("cart");
}
exports.carts_delete_controller=(req,res,next)=>{
	let deleteId=req.params.deleteId;
	Cart.delete(deleteId).then(resolve=>{
		setTimeout(()=>{
			res.redirect("/Carts");//change1
		},50);
	})
	.catch(err=>{
		console.log(err);
			res.end();

	});
	// res.render("cart");
}
exports.product_controller=(req,res,next)=>{
	const uid=req.params.productId;
	Database.findId(uid).then((ata)=>{
			console.log(ata,"ata");
			res.render("product",{id_data:ata,csrf:req.csrfToken()});
	}).catch(err=>{
			res.end();

	});
}
exports.delete=(req,res,next)=>{
	res.end();
}
exports.shop_controller=(req,res,next)=>{
	let xy=req.session.loggedIn;
	console.log("darshu----------------------->>",req.session.gajjarDarshit);
	 // console.log("---->",req.session.loggedIn);
	if(xy){
				// res.redirect("/shop");
				// res.render("Add_product");
				Database.fetchall().then(products => {
	            res.render("shop", {
	                data: products,
	            	});
	        	})
		        .catch(err => {
		            console.log(err);
					res.end();
		        
		        });
		}
	else{
				res.render("index",{wer:"your account is not verified"});
			}
}
exports.home_controller=(req,res,next)=>{
	let session=req.session.loggedIn;
	if(session)
	{
		res.redirect("/shop");
	}	
	else
	{
		res.render("index",{wer:"your account is not verified"});
	}
}
exports.add_product_controller=(req,res,next)=>{
	let xy=req.session.loggedIn;
	console.log("darshu----------------------->>",req.session.gajjarDarshit);
	 // console.log("---->",req.session.loggedIn);
	if(xy){
		res.render("Add_product",{csrf:req.csrfToken()});
	}

	else{
		res.render("index",{wer:"your account is not verified please authicate"});
	}	
	
}