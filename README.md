#  **[SpeedTest by OpenSpeedTest™](https://openspeedtest.com?Run&ref=Github)** - Free & Open-Source HTML5 Network Performance Estimation Tool.

  

SpeedTest by OpenSpeedTest™ is a Free and Open-Source HTML5 Network Performance Estimation Tool Written in Vanilla Javascript and only uses built-in Web APIs like `XMLHttpRequest` `(XHR)`, `HTML`, `CSS`, `JS`, & `SVG`. No Third-Party frameworks or libraries are Required. All we need is a static web server like `NGINX`. I started this project in 2011 and moved to OpenSpeedTest.com dedicated Project/Domain Name in 2013.
  

[![Download OpenSpeedTest-Server V2.1](https://github.com/openspeedtest/v2-Test/raw/main/images/10G-S.gif)](https://go.openspeedtest.com/Server  "Download OpenSpeedTest-Server V2.1")
 <a target="_blank"  href="https://go.openspeedtest.com/MicrosoftStore"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/Microsoft-Store-250x100.png"  alt="Download from the Microsoft Store"  width="24%" style=""></a> <a target="_blank"  href="https://go.openspeedtest.com/MacAppStore"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/Mac-App-Store-250x100.png"  alt="Download from the Mac App Store"  width="24%"  style=""></a> <a target="_blank"  href="http://go.openspeedtest.com/iOS"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/App-Store-250x100.png"  alt="Download from the App Store"  width="24%" style=""></a> <a target="_blank"  href="https://go.openspeedtest.com/Android"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/GooglePlay-250x100.png"  alt="Download from the Google Play Store" width="24%"  style=""></a> <a target="_blank"  href="https://go.openspeedtest.com/snapcraft"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/SnapStore-250x100.png"  alt="Download from the Snap Store"  width="24%"  style=""></a> <a target="_blank"  href="http://go.openspeedtest.com/docker"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/docker-250x100.png"  alt="Download from the Docker Hub"  width="24%" style=""></a> <a target="_blank"  href="http://go.openspeedtest.com/helm"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/Helm-Charts-250x100.png"  alt="Download from the Helm Store"  width="24%" style=""></a> <a target="_blank"  href="http://go.openspeedtest.com/Source"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/GitHub-250x100.png"  alt="Download from GitHub"  width="24%" style=""></a>

**No client-side software or plugin is required. You can run a network speed test from any device with a [Web Browser that is IE10 or newer.](https://www.youtube.com/watch?v=9f-OM_WQ7Bw&list=PLt-deStxFJOMEAs2O1lJhscMNzcg9E3Po&index=1)**

 <a target="_blank"  href="https://www.youtube.com/embed/Lq9dpMCM6kQ?autoplay=1"><img src="https://open.cachefly.net/assets/images/videos/Roberto-Jorge-Tech-yt.jpg"  alt="Video Tutorial by Roberto Jorge Tech"  width="48%" style=""></a> 
 <a target="_blank"  href="https://www.youtube.com/embed/9NIHAmVkomk?autoplay=1"><img src="https://open.cachefly.net/assets/images/videos/lanpad-yt.jpg"  alt="Video Tutorial by LanPad"  width="48%" style=""></a> 

##  Why OpenSpeedTest

  

###  Secure by Design.

  

OpenSpeedTest contains Only `STATIC` Files like `HTML`,`CSS` & `JS`.

So you don't need to worry about Security Updates or Hidden Exploits that may compromise your secure environments.

  

###  Lightweight, High Performance.

  

OpenSpeedTest is written in Vanilla JavaScript. No Third-Party frameworks or libraries were used. SpeedTest script file size is under 8kB gzip. The unexpected side effect of using Vanilla JavaScript is High Performance.

  

###  Run a speed test from Any Device.

  

OpenSpeedTest will run on Any Web Browser that is IE10 or newer.

  

###  Ready for Any Display Size and Resolution.

  

OpenSpeedTest User interface is written in SVG.

  

#  Create Your Own SpeedTest Server.

###  Server Requirements :

`Nginx`, `Apache`, `IIS`, `Express`, or Any Web server that supports `HTTP/1.1` or newer.

- Accept, `GET`, `POST`, `HEAD` & `OPTIONS`, Response `200 OK`.

- Accept, `POST` to Static Files, Response `200 OK`.

- `client_max_body_size`, 35 Megabytes or more.

- Timeout greater than `60 seconds`.

- Disable `Access logs` for Increasing server performance.

- Improve `Time to First Byte` (TTFB)

- Warning! If you run it behind a **[Reverse Proxy](https://github.com/openspeedtest/Speed-Test/issues/4#issuecomment-1229157193)**, you should increase the `post-body content length` to 35 megabytes.
- Supports `HTTP2` & `HTTP3`.
- `HTTP1.1` is recommended for achieving maximum performance.
- **[You Should Follow our Nginx Config.](https://github.com/openspeedtest/Nginx-Configuration)**

  

#  Or, You can use OpenSpeedTest-Server.

OpenSpeedTest-Server is available for  Windows, Mac, Linux, Android, iOS & Docker. 
[![Download OpenSpeedTest-Server V2.1](https://open.cachefly.net/assets/images/OSTV2-SS.png)](https://go.openspeedtest.com/Server  "Download OpenSpeedTest-Server V2.1")
#### Fully Optimized and ready to use applications. 
 <a target="_blank"  href="https://go.openspeedtest.com/MicrosoftStore"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/Microsoft-Store-250x100.png"  alt="Download from the Microsoft Store"  width="24%" style=""></a> <a target="_blank"  href="https://go.openspeedtest.com/MacAppStore"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/Mac-App-Store-250x100.png"  alt="Download from the Mac App Store"  width="24%"  style=""></a> <a target="_blank"  href="http://go.openspeedtest.com/iOS"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/App-Store-250x100.png"  alt="Download from the App Store"  width="24%" style=""></a> <a target="_blank"  href="https://go.openspeedtest.com/Android"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/GooglePlay-250x100.png"  alt="Download from the Google Play Store" width="24%"  style=""></a> <a target="_blank"  href="https://go.openspeedtest.com/snapcraft"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/SnapStore-250x100.png"  alt="Download from the Snap Store"  width="24%"  style=""></a> <a target="_blank"  href="http://go.openspeedtest.com/docker"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/docker-250x100.png"  alt="Download from the Docker Hub"  width="24%" style=""></a> <a target="_blank"  href="http://go.openspeedtest.com/helm"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/Helm-Charts-250x100.png"  alt="Download from the Helm Store"  width="24%" style=""></a> <a target="_blank"  href="http://go.openspeedtest.com/Source"><img src="https://github.com/openspeedtest/v2-Test/raw/main/images/GitHub-250x100.png"  alt="Download from GitHub"  width="24%" style=""></a>
  

###  New features:

  

1. Stress Test. (Continuous Speed Test)

  

To enable the stress test. Pass `Stress` or `S` keyword as a URL parameter.

  

````

http://192.168.1.5?Stress=Low

````

After the `STRESS` or `S` keyword, you can specify the number of seconds you need to run the StressTest in seconds, or preset values such as `Low`, `Medium`, `High`, `VeryHigh`, `Extreme`, `Day`, and `Year`. Will run a speed test for `300`,`600`,`900`,`1800`,`3600`,`86400`,`31557600` seconds, respectively. Also, you can feed the first letter of each parameter and its values.
  

````

http://192.168.1.5?S=L

````

`S=L` is the same as passing `Stress=low`

Or you can specify the number of seconds eg:`5000` directly without any preset keywords.

  

````

http://192.168.1.5?Stress=5000

````

  

2. Run a speed test automatically

  

Run a speed test automatically on page load.

````

http://192.168.1.5?Run

````

Run a speed test automatically after a few seconds.

````

http://192.168.1.5?Run=10 or http://192.168.1.5?R=10

````

  

You can pass multiple keywords, and it's not `Case-Sensitive`.

  

````

http://192.168.1.5?Run&Stress=300 OR http://192.168.1.5?R&S=300

````

This will start a speed test immediately and run for `300 seconds` in each direction. That is 300 seconds for download and `300 seconds` for upload.

  

3. Save results to a Database

  

Edit `Index.html`

````

var saveData = true;

var saveDataURL = "//yourDatabase.Server.com:4500/save?data=";

````

4. Add multiple servers. The app will choose one with the least latency automatically.

  

Edit `Index.html`

````

var openSpeedTestServerList = [

{"ServerName":"Home-Earth", "Download":"/downloading", "Upload":"/upload", "ServerIcon":"DefaultIcon"},

{"ServerName":"Home-Mars", "Download":"/downloading", "Upload":"/upload", "ServerIcon":"DefaultIcon"},

{"ServerName":"Home-Moon", "Download":"/downloading", "Upload":"/upload", "ServerIcon":"DefaultIcon"}

];

````

5. Disable or change Overhead Compensation factor.

  

````

http://192.168.1.5?clean

````

Overhead Compensation factor, This is browser based test, Many Unknowns. Currently 4%. That is within the margin of error.

You can pass `Clean` or `C` as a URL Parameter and reset Overhead Compensation factor to Zero or set any value between 0 and 4. 1 = 1% to 4 = 4%.

`Clean` will not accept values above 4, so Compensation is limited to maximum 4%.

  

6. Change the default limit of 6 parallel HTTP connections to the Server.

  

````

http://192.168.1.5?XHR=3 OR http://192.168.1.5?X=3

````

Allow the user to Change the default limit of 6 parallel HTTP connections to the Server. `XHR` will Accept values above 1 and max 32

pass `XHR` or `X` as a URL Parameter.

  

7. Select a different server to run a speed test.

  

````

http://192.168.1.5?Host=http://192.168.55.1:90 OR http://192.168.1.5?h=http://192.168.55.1:90

````

Pass `Host` or `H` as a URL Parameter.

`HOST` will Accept only valid HTTP URLs like `http://192.168.1.10:3000` or `https://yourHost.com`.

  

8. Select and run one test at a time, `DOWNLOAD`, `UPLOAD`, or `PING`.

  

````

http://192.168.1.5?Test=Upload OR http://192.168.1.5?T=U

````

`TEST` Allow the user to select and run one test at a time, Download, Upload, or Ping.

Pass `Test` or `T` as a URL Parameter.

  

9. Set a PingTimeout dynamically by passing `Out` or `O` as a URL Parameter

  

````

http://192.168.1.5?Out=7000 OR http://192.168.1.5?O=7000

````

If Server not responded within 5 Seconds for any requests we send ('pingSamples' times)

We will show `Network Error`, You can change the limit here.

In milliseconds, if you need to set `6 seconds`. Change the value to `6000`.

  

10. Set the Number of ping samples by adding `Ping` or `P` as a URL Parameter

  

````

http://192.168.1.5?Ping=500 OR http://192.168.1.5?P=500

````

More samples = more accurate representation. `Ping = 500` will send `501` requests to server to find the accurate ping value.
Take a look at index.html, you can set a custom ping sample size, threads, upload data size etc.

## Self-hosted (On-Premise) / (Docker Image/Source Code)
### For Headless large-scale deployments.
You have two options here. If you need a custom deployment, use our source code along with a web server of your choice. I prefer Nginx, and you can find my [Nginx Configuration](https://github.com/openspeedtest/Nginx-Configuration) here. Or you can use our docker image. You can deploy it on your LAN/WAN with or without an active internet connection.

**This is docker implementation using nginxinc/nginx-unprivileged:stable-alpine. uses significantly fewer resources.**

- NGINX Docker image that runs NGINX as a non root, unprivileged user.
 
 ###  Docker install instructions:

 Install Docker and run the following command!

````bash

sudo docker run --restart=unless-stopped --name openspeedtest -d -p 3000:3000 -p 3001:3001 openspeedtest/latest

````
#### Or use docker-compose.yml 
````
version: '3.3'
services:
    speedtest:
        restart: unless-stopped
        container_name: openspeedtest
        ports:
            - '3000:3000'
            - '3001:3001'
        image: openspeedtest/latest
````
- Warning! If you run it behind a **[Reverse Proxy](https://github.com/openspeedtest/Speed-Test/issues/4#issuecomment-1229157193)**, you should increase the `post-body content length` to 35 megabytes.

- **[Follow our Nginx Config.](https://github.com/openspeedtest/Nginx-Configuration)**

Now open your browser and direct it to:

A: For **HTTP** use: `http://YOUR-SERVER-IP:3000`

B: For **HTTPS** use: `https://YOUR-SERVER-IP:3001`

#### Container-Port for http is 3000
If you need to run this image on a different port for `HTTP`, Eg: change to `80` = `-p 80:3000`
#### Container-Port for https is 3001
If you need to run this image on a different port for `HTTPS`, Eg: change to `443` =  `-p 443:3001`

### Setup Free LetsEncrypt SSL with Automatic Certificate Renewal
***Requirements***
- PUBLIC IPV4 and/or IPV6 address.
- A domain name that resolves to speed test server's IP address.
- Email ID

The following command will generate a Let's Encrypt certificate for your domain name and configure a cron job to automatically renew the certificate.

````
docker run -e ENABLE_LETSENCRYPT=True -e DOMAIN_NAME=speedtest.yourdomain.com -e USER_EMAIL=you@yourdomain.pro --restart=unless-stopped --name openspeedtest -d -p 80:3000 -p 443:3001 openspeedtest/latest
````
#### Or use docker-compose.yml 
````
version: '3.3'
services:
    speedtest:
        environment:
            - ENABLE_LETSENCRYPT=True
            - DOMAIN_NAME=speedtest.yourdomain.com
            - USER_EMAIL=you@yourdomain.pro
        restart: unless-stopped
        container_name: openspeedtest
        ports:
            - '80:3000'
            - '443:3001'
        image: openspeedtest/latest
````

###  How to Use Your Own Secure Sockets Layer (SSL) Certificate, Self-Signed or Paid?
***Requirements***
- Folder with your Certificate, Self-Signed or Paid.
- Rename .cet file and .key file to `nginx.crt` & `nginx.key`

  The folder needs to contain:

- `nginx.crt`

- `nginx.key`


````
sudo docker run --restart=unless-stopped --name openspeedtest -d -p 3000:3000 -p 3001:3001 openspeedtest/latest
````

To mount a folder with your own SSL certificate to this Docker container, append the following line to the above command:
  

````bash

-v /${PATH-TO-YOUR-OWN-SSL-CERTIFICATE}:/etc/ssl/

````
  
I am adding a folder with nginx.crt and nginx.key from my desktop by using the following command.

````bash

sudo docker run -v /Users/vishnu/Desktop/docker/:/etc/ssl/ --restart=unless-stopped --name openspeedtest -d -p 3000:3000 -p 3001:3001 openspeedtest/latest

````
#### Or use docker-compose.yml 
````
version: '3.3'
services:
    speedtest:
        volumes:
            - '/Users/vishnu/Desktop/docker/:/etc/ssl/'
        restart: unless-stopped
        container_name: openspeedtest
        ports:
            - '3000:3000'
            - '3001:3001'
        image: openspeedtest/latest
````
## Advanced Configuration Options 

- Container Port Configuration
  
To enable port changes, set the `CHANGE_CONTAINER_PORTS` environment variable to `"True"` and provide appropriate values for the following variables.

`CHANGE_CONTAINER_PORTS=True`

`HTTP_PORT=3000`

`HTTPS_PORT=3001`

- Set User
  
`SET_USER=101`

- Only Allow `CORS Request` from listed domains. 

`ALLOW_ONLY=domain1.com;domain2.com;domain3.com`

- `SET_SERVER_NAME` Display the server name on the UI.
  
`SET_SERVER_NAME=HOME-NAS` 


Docker images run better on Linux Platforms, including your NAS. But if you install docker on macOS or Windows, you may see poor performance. I asked this on Docker forums, and they told me macOS and Windows support is for Development purposes only. For Production, you need to use any Linux Platform.

The same Story goes for Windows NGINX. Nginx uses only one worker even if you specify n number of worker processes. They will show in Task Manager, but the system will only use one. I got this information directly from the Nginx website.

  
  
  

##  Why do you need to Create Your Own SpeedTest Server? 

You can run OpenSpeedTest Server in your Home Lab, Office Server or Cloud Server. So that you or employees who work from home can run a speed test to your office and make sure they can run everything smoothly.

  

**Choosing between ISP1 & ISP2.**

  

Sometimes your ISP2 is Faster than ISP1 when you test your speed on popular speed test sites. But when you connect to your Home/Office/Cloud, that slower connection may perform better. The only way to find out is to run a speed test against your infrastructure.

  

**Troubleshooting network issues.**

  

It is common even when your Internet connection is working fine, but some of the devices in your network may experience trouble getting decent connectivity to the internet. The issue might be the wrong VLAN ID or Faulty Switch. If you run a Local network speed test, you can find and fix these issues easily.

  

**Before you add a repeater.**

  

Most repeaters will reduce your network speed by 50%, so if you put it far away, it will perform worst, and if you put it too close, you will not get enough coverage if you run a Local Network speed test. Depending on the application requirements, you can decide exactly where you need to put your repeater.

  

**Browsing experience.**

  

Many useful browser extensions are out there that we all know and love. But some of them are really slowing you down for **few seconds per page you visit**. You may see good performance when you test your network performance via File Transfer or Command-line utilities, but you may experience poor performance when browsing the internet. This is due to a bad browser configuration that including unwanted extensions installed. From my experience, only keep the one you are going to use every single day. Extension that you may use once in a while should be removed or disabled for maximum performance. If you see poor performance, try OpenSpeedTest from Private Window or Incognito Window. **This tool can be used to check the browser performance and impact of Extensions on your browsing experience.**

  

**No client-side software or plugin is required. You can run a network speed test from any device with a [Web Browser that is IE10 or newer.](https://www.youtube.com/watch?v=9f-OM_WQ7Bw&list=PLt-deStxFJOMEAs2O1lJhscMNzcg9E3Po&index=1)**

- Like this Project? Please **Donate NOW & Keep us Alive** -> https://go.openspeedtest.com/Donate

MIT License

Copyright (c) 2013 - 2023 OpenSpeedTest™

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
