[![Build Status](https://travis-ci.org/akveo/blur-admin.svg?branch=master)](https://travis-ci.org/akveo/blur-admin)

# AWS-EasyStart2

เป็น Soruce สำหรับใช้งานกับ API Gateway + Lambda เพื่อสามารถให้ Developer สามารถ Start Instance ที่ปิดใช้งานอยู่ในช่วง
นอกเวลาทำงานในกรณีที่มีความจำเป็น โดยระบบจะใช้ Concept Serverless 


## สิ่งที่ต้องใช้งานบน AWS
 * API Gateways
 * Lambda
 * S3

## วิธีการติดตั้ง
 1.pull repo
 	`git clone https://github.com/phone1246/JAP-aw-easystart2.git `
 2. ตั้งค่าInstances ที่จำนมาแสดงผล
 	- /src/app/theme/services/config.js
	```javascript
	 	function config() {
	    return {
	    "Instance":[
	      "i-002f6e0adb5f8528c",
	      "i-0ef50ff7288f8e1f5",
	      "i-06b14ee15cec6b370"
	    ]
	    };
	```    
    

 3.ตั้งค่า URL สำหรับ List Instance
 	- /src/app/theme/services/aws-service.js
```javascript
		$http({url: "URL HERE",
		                skipAuthorization: true,
		                method: 'POST',
		                headers: {'X-Api-Key': 'application/x-www-form-urlencoded'},
		                data: { "Instances": config.Instance

		                              }
		                          }).success(function(response){
		                            return response;
		                          });
```                          

*If you have problems installing and just want to download JS and css files, you can find download links here*: http://akveo.github.io/blur-admin/articles/091-downloads/

## How can I support developers?
- Star our GitHub repo
- Create pull requests, submit bugs, suggest new features or documentation updates
- Follow us on [Twitter](https://twitter.com/akveo_inc)
- Like our page on [Facebook](https://www.facebook.com/akveo/)

## Can I hire you guys?
Yes! We are available for hire. Visit [our homepage](http://akveo.com/) or simply leave us a note to contact@akveo.com. We will be happy to work with you!

## Features
* Responsive layout
* High resolution
* Bootstrap CSS Framework
* Sass
* Gulp build
* AngularJS
* Jquery
* Charts (amChart, Chartist, Chart.js, Morris)
* Maps (Google, Leaflet, amMap)
* etc

License
-------------
<a href=/LICENSE.txt target="_blank">MIT</a> license.

### From akveo

Enjoy!
We're always happy to hear your feedback.
