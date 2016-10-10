[![Build Status](https://travis-ci.org/akveo/blur-admin.svg?branch=master)](https://travis-ci.org/akveo/blur-admin)

# AWS-EasyStart2

เป็น Soruce สำหรับใช้งานกับ API Gateway + Lambda เพื่อสามารถให้ Developer สามารถ Start Instance ที่ปิดใช้งานอยู่ในช่วง
นอกเวลาทำงานในกรณีที่มีความจำเป็น โดยระบบจะใช้ Concept Serverless 


## สิ่งที่ต้องใช้งานบน AWS
 * API Gateways
 * Lambda
 * S3

## วิธีการติดตั้ง
 * pull repo
 	`git clone https://github.com/phone1246/JAP-aw-easystart2.git `
 * ตั้งค่าInstances ที่จำนมาแสดงผล
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
* Code Start Instances เช็ตจากสถาณะ
 - ```javascript
        var http = require('http');
        var aws = require('aws-sdk');
        var ec2 = new aws.EC2();
    
    //16 = running
    //
    exports.handler = (event, context, callback) => {
        
        var evn_data = event.Instances;
        var params={
            InstanceIds:[]
        };
        console.log(evn_data.length);
        if(evn_data.length>0){
            for(var i in evn_data){
                if(!evn_data[i])continue;
                console.log(evn_data[i].id);
              params.InstanceIds.push(evn_data[i].id);  
            }
        }
    
            ec2.describeInstances(params,function(err,data){
                if(err){ callback(500, 'Error Get Instance Detail'); return; }
                var InstanceID = data.Reservations[0].Instances[0].InstanceId;
                var statusCode = data.Reservations[0].Instances[0].State.Code;
                if (statusCode==80){ 
                  
                    ec2.startInstances({InstanceIds:[InstanceID]}, function(err, data) {
                      if (err) console.log(err, err.stack); // an error occurred
                      else       callback(null,{"Code":80,"status":"stopped","action":"Starting","raw":data}) ;          // successful response
                    });
                }else{
                      callback(null,{"Code":500,"status":"Error","message":"Instance Not In Stopped State"}); 
                }
            });
        
            //console.log(params);
            //console.log(event.sourceIP);
            // TODO implement
           // callback(null, 'Hello from Lambda');
        };
 ```
	
	

 * ตั้งค่า URL สำหรับ List Instance
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

 * ตั้งค่า URL เมื่อกำปุ่มให้เรียก API Gateways สำหรับ Start EC2
 	- /src/app/pages/aws/list/listCtrl.js
  	```javascript
	  	$scope.startEC2 = function(InstanceIDs) {
	      $http({
	      url: "URL HERE",
	      skipAuthorization: true,
	      method: 'POST',
	      headers: {'X-Api-Key': 'application/x-www-form-urlencoded'},
	      data: {
	         "Instances":[
	            {"id":InstanceIDs}
	         ]
	       }
	     }).success(function(response){
	      if (response.action ==="Starting" && response.Code === 80){

	      }
	      });


	    };                      
  	```
  * สำหรับ Developer ที่จะพัฒนาต่อ
  	-0 Run Gulp เพื่อจำลอง web server http://localhost:3000 (หากมีการแก้ไข File ใน src Gulp จะทำการ  Auto Refresh Browser ให้)
  	-	``` gulp serve ```
  * สำหรับ Production จะอยู่ใน Folder release ซึ่งจะต้อง Build ก่อนแล้วจากนั้นสามารถนำ Folder release ไปใช้งานได้เลยเพราะ Gulp  จะทำการ Build File ให้
  	-	``` gulp build ```


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
	