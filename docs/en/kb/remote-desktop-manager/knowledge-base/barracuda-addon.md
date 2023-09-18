---
eleventyComputed:
  title: Configure Barracuda add-on
  description: How to configure Barracuda add-on
---

1. To enable the add-on, add a new entry and select ***Add-On Manager***.
![Add New Entry – Add-On Manager](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6106.png)  
1. Search ***Barracuda NG Firewall*** and click ***Activate Add-on***.
![Activate Add-on](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6107.png)
1. Close the window.

Remote Desktop Manager needs a path to the ***ngadmin_.exe*** to open ***Barracuda Firewall Admin***. Barracuda Firewall must be properly installed on the computer.

4. To do this, go to ***File*** – ***Option*** – ***Paths*** – ***Configure Installation Path***.

![File – Option – Path – Configure Installation Path](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6105.png)

5. Search  ***Barracuda NG Firewall***. It is necessary to specify the folder where the file is located, override the default executable, and enter the name of the new executable with the .exe.
![Installation Path](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6108.png)

6. Click ***OK***.  

The add-on is now fully configured.