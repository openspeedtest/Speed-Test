# **[OpenSpeedTest™️](https://openspeedtest.com)** -  Pure HTML5 Network Performance Estimation Tool.

Hi! I'm [Vishnu](https://vishnu.pro) the one who developed **[OpenSpeedTest™️](https://openspeedtest.com)**. OpenSpeedTest use XMLHttpRequest (XHR), HTML, CSS, JS, & SVG For this network performance estimation tool. I started this project in 2011 and moved to OpenSpeedTest.com dedicated Project/Domain Name in 2013.

Tested up to 10Gbps on real NIC and up to 30Gbps on Virtual NIC. You can run a speed test from any device with a Web Browser that is IE10 or new. That means you can test your network speed from your Smart TV, Console, etc. No additional plugins or software required.

## TLDR: If you need to test 10Gbps or more. You may need to use the latest hardware. Use Safari or Chrome in Private Window or Incognito Window.


For testing 10GbE or more, you will need to use the latest hardware. I used M1 MacMini with Built-in 10GbE and a Linux Machine with AMD Ryzen™ 9 3900XT. Safari was the fastest browser when I tested it. Chrome and Chromium Edge can handle 10Gbps or more on macOS and Linux. You can test more than 10Gbps with Chrome or Safari on M1 MacMini or newer hardware. Or on a Linux Machine with Chrome or Chromium browser using a 3900XT or newer Processor. Up to 2.5 to 3.6 Gbps can be tested on almost all popular browsers and devices. Windows max limit was around 8.5 Gbps for download and 9.4Gbps for upload. Tested on Edge and Chrome. Use Private Window or Incognito Window if you found unusual test results. Probably some Extensions are slowing the speed test process. This tool can be used to check the browser performance and impact of Extensions on your browsing experience.

  
[![10Gbps Network Speed Test!](https://openspeedtest.com/images/Docker_youtube_icon.jpg)](https://www.youtube.com/embed/wpXMxh3FfXE "10Gbps Network Speed Test!") 

## Self-hosted (On-Premise) / (Docker Image/Source Code)

You have two options here. If you need a custom deployment, use our source code along with a web server of your choice. I prefer Nginx, and you can find my [Nginx Configuration](https://github.com/openspeedtest/Nginx-Configuration) here. Or you can use our docker image. You can deploy it on your LAN/WAN without an active internet connection.

**This is docker implementation using  nginxinc/nginx-unprivileged:stable-alpine. Around 10 Mb in size, uses significantly fewer resources.**

**Docker install instructions:**

Install Docker and run the following command!

1.  **docker run --restart=unless-stopped --name openspeedtest -d -p 3000:3000 -p 3001:3001 openspeedtest/latest**
    
2.  Now open your browser and direct it to:
    

A: For **HTTP** use:  [http://YOUR-SERVER-IP:3000](http://your-nas-ip:3000/)

B: For **HTTPS** use:  [https://YOUR-SERVER-IP:3001](https://your-nas-ip:3001/)

**How to use your own SSL Certificate?** 
 
You can mount a folder with your own SSL certificate to this docker container by adding the following line to the above command. 

**-v** */PATH-TO-YOUR-OWN-SSL-CERTIFICATE***:/etc/ssl/**

I am adding a folder with **nginx.crt** and **nginx.key** from my desktop by using the following command. 

**docker run -v /Users/vishnu/Desktop/docker/:/etc/ssl/ --restart=unless-stopped --name openspeedtest -d -p 3000:3000 -p 3001:3001 openspeedtest/latest**

Docker images run better on Linux Platforms, including your NAS. But if you install docker on macOS or Windows, you may see poor performance. I asked this on Docker forums, and they told me macOS and Windows support is for Development purposes only. For Production, you need to use any Linux Platform.

The same Story goes for Windows NGINX. Nginx uses only one worker even if you specify n number of worker processes. They will show in Task Manager, but the system will only use one. I  got this information directly from the Nginx website.



## Speedtest for Home/Office LAN! [Easy to use Standalone Application for Desktop]

**An application for launching a quick speed test server. Without using any commands!** 
First, test your local network speed before pointing fingers towards your ISP for a **slow and sluggish internet experience**. Introducing **Network Speed Test Server for Windows, Mac & Linux!**. For professionals, docker image and source code are available. This application is good enough for testing speeds up to 15Gbps.  [Download Now!](https://go.openspeedtest.com/Server). 

**How is this useful for me?**  

You can run OpenSpeedTest Server in your Home/Office/Cloud. So that you or employees who work from home can run a speed test to your office and make sure they can run everything smoothly.

  
**Choosing between ISP1 & ISP2.**  

Sometimes your ISP2 is Faster than ISP1 when you test your speed on popular speed test sites. But when you connect to your Home/Office/Cloud, that slower connection may perform better. The only way to find out is to run a speed test against your infrastructure.

  
**Troubleshooting network issues.**  

It is common even when your Internet connection is working fine, but some of the devices in your network may experience trouble getting decent connectivity to the internet. The issue might be the wrong VLAN ID or Faulty Switch. If you run a Local network speed test, you can find and fix these issues easily.

  
**Before you add a repeater.**  

Most repeaters will reduce your network speed by 50%, so if you put it far away, it will perform worst, and if you put it too close, you will not get enough coverage if you run a Local Network speed test. Depending on the application requirements, you can decide exactly where you need to put your repeater.

**Browsing experience.**

Many useful browser extensions are out there that we all know and love. But some of them are really slowing you down for **few seconds per page you visit**. You may see good performance when you test your network performance via File Transfer or Command-line utilities, but you may experience poor performance when browsing the internet. This is due to a bad browser configuration that including unwanted extensions installed. From my experience, only keep the one you are going to use every single day. Extension that you may use once in a while should be removed or disabled for maximum performance. If you see poor performance, try OpenSpeedTest from Private Window or Incognito Window. **This tool can be used to check the browser performance and impact of Extensions on your browsing experience.**

  
**No client-side software or plugin is required. You can run a network speed test from any device with a web browser that is IE10 or new.**
## [Download -> OpenSpeedTest-Server Version 2.1 for Free!](https://go.openspeedtest.com/Server)
<a target="_blank" href="https://go.openspeedtest.com/snapcraft"><img alt="Get it from the Snap Store" width="200" height="60" src="https://snapcraft.io/static/images/badges/en/snap-store-black.svg"/></a>  <a target="_blank" href='https://go.openspeedtest.com/MicrosoftStore'><img src='https://developer.microsoft.com/store/badges/images/English_get-it-from-MS.png' alt='English badge'  width="200" height="60" style=''/></a>  <a target="_blank" href="https://go.openspeedtest.com/MacAppStore"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-mac-app-store/black/en-us?size=200x63&amp;releaseDate=1628035200&h=0de6aaedcd22ceddb13b33111eefa079" alt="Download on the Mac App Store" width="200" height="60" style=""></a> 

[![Download OpenSpeedTest-Server V2.1](https://openspeedtest.com/images/OSTV2-SS.png)](https://go.openspeedtest.com/Server "Download OpenSpeedTest-Server V2.1")



## 1Gbps Network Speed Test using OpenSpeedTest | Brave VS Chrome VS Firefox VS Internet Explorer VS Opera VS Chrome Dev VS Microsoft Edge VS Canary
[![Brave VS Chrome VS Firefox VS Internet Explorer VS Opera VS Chrome Dev VS Microsoft Edge VS Canary for 1Gbps Network Speed.
!](https://openspeedtest.com/images/Browser-tested.jpg)](https://www.youtube.com/embed/K8KteNNe_p4 "Brave VS Chrome VS Firefox VS Internet Explorer VS Opera VS Chrome Dev VS Microsoft Edge VS Canary for 1Gbps Network Speed.")

©Copyright 2013-2022 by OpenSpeedTest.com. All Rights Reserved.

**Share — copy and redistribute the material in any medium or format for any purpose, even commercially.**

Read full license terms @ http://go.openspeedtest.com/License

Like this Project? Please **Donate NOW & Keep us Alive** -> https://go.openspeedtest.com/Donate

**Official Website :** https://OpenSpeedTest.COM | **Email**: support@openspeedtest.com

**Developed by : Vishnu** | https://Vishnu.Pro | **Email** : me@vishnu.pro

If you have any Questions, ideas or Comments Please Send it via -> https://go.openspeedtest.com/SendMessage
