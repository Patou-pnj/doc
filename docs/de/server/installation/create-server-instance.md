---
title: Devolutions Server-Instanz erstellen
order: 30
---

{% snippet icon.badgeInfo %} 
Wenn Sie kürzlich Ihre Serienlizenzschlüssel erhalten haben, lesen Sie bitte den Abschnitt [Erste Schritte](/server/getting-started/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Weitere Informationen zu den Funktionen des Bereitstellungsassistenten finden Sie unter dem entsprechenden Thema im Kapitel [Servereinstellungen](/server/management/devolutions-server-console/devolutions-server-settings/general/).
{% endsnippet %}
 
Auf einem Server können mehrere {{ de.DVLS }}-Instanzen gehostet werden. Jede Instanz befindet sich in ihrer eigenen Webanwendung innerhalb von IIS. Die folgenden Schritte werden unter Verwendung der {{ de.DVLSCONSOLE }} durchgeführt.  

## Verfahren 

1. Installieren Sie die {{ de.DVLSCONSOLE }} auf dem Webserver. Sie ist auf der [Download](https://devolutions.net/de/server/home/download/)-Seite verfügbar. 
1. Führen Sie die {{ de.DVLSCONSOLE }} mit erweiterten Rechten aus (als Administrator ausführen). Dies geschieht durch Rechtsklick auf die Anwendung, und die Auswahl ***Als Administrator ausführen***. 
{% snippet icon.shieldWarning %} 
Alle über die {{ de.DVLSCONSOLE }} ausgeführten Operationen werden mit den Anmeldeinformationen durchgeführt, die zum Starten der {{ de.DVLSCONSOLE }} verwendet werden. Wenn Sie andere Anmeldedaten verwenden müssen, müssen Sie eine neue Windows-Sitzung starten. Der Befehl ***Ausführen als*** bietet nicht die Option, einen Prozess mit erweiterten Rechten zu starten. Die Option ***Als anderer Nutzer ausführen*** kann nur funktionieren, wenn das Konto einem Mitglied der lokalen Administratorgruppe gehört.
{% endsnippet %}
 
![Als Administrator ausführen](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8175.png)  

3. Klicken Sie in der {{ de.DVLSCONSOLE }} auf ***Neu*** oder den blauen Link ***Neue Instanz installieren***, um mithilfe des Assistenten für die <a href="#Basic">***Basisinstallation***</a> eine neue Serverinstanz einzurichten. Es ist auch möglich, eine Instanz mit dem Assistenten für die <a href="#Advanced">***Erweiterte Installation***</a> zu erstellen, indem Sie diesen im Drop-Down-Menü unter ***Neu*** auswählen.
![!!Deploy a new {{ de.DVLS }}](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8048.png)  

### Basisinstallation <a name="Basic"></a>

1. Wenn auf dem Rechner, auf dem {{ de.DVLS }} gehostet wird, keine SQL Server-Instanz verfügbar ist, wird durch den Assistenten eine SQL Server-Express-Edition installiert. ![!!Basic Installation dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8176.png) 
1. Im folgenden Dialogfeld werden die Anmeldeinformationen für das SA-SQL-Konto, das Administratorkonto von {{ de.DVLS }} und das Passwort für den Verschlüsselungscode angezeigt. Klicken Sie auf ***Speichern als***, um die Informationen in einer Datei zu speichern.  ![!!Important credentials dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8177.png) 
1. Das folgende Dialogfeld zeigt die SQL Server-Informationen an, einschließlich der Zugangsdaten für das ***SA***-Konto, die von {{ de.DVLS }} zur Erstellung und Verbindung mit der SQL-Datenbank verwendet werden..
1. Sobald die Installation erfolgreich abgeschlossen ist, zeigt der Assistent eine Zusammenfassung der Installation an und öffnet automatisch den Standardbrowser, um sich mit der {{ de.DVLS }}-Webschnittstelle zu verbinden. . ![!!Installation summary report](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8181.png) 
1. Verwenden Sie zur Anmeldung bei der {{ de.DVLS }}-Webschnittstelle die oben in Schritt 2 angegebenen Anmeldeinformationen. Danach werden Sie zu einer Änderung des Passworts aufgefordert, bevor Sie mit dem Anmeldevorgang fortfahren können. ![!!Change your password prompt](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8182.png) 



### Erweiterte Installation <a name="Advanced"></a>

1. Im ersten Schritt führt der Installationsassistent eine Diagnose auf dem Server durch, um zu überprüfen, ob der IIS Server alle notwendigen Voraussetzungen für Web-Nutzergruppen installiert hat und bereit ist, {{ de.DVLS }} auszuführen. Fehlende Funktionen werden mit einem Fehlersymbol gekennzeichnet. Mit Klick auf ***Voraussetzungen installieren*** werden alle fehlenden Funktionen mithilfe eines PowerShell-Skripts installiert. Für [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) und [IIS ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer) ist eine Internetverbindung erforderlich.  
![!!IIS Features Diagnostic Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8049.png)  
1. Um fortzufahren, müssen die Lizenzvereinbarungen akzeptiert werden.  
![!!{{ de.DVLS }} License Agreement Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8050.png)  
1. Under ***Database***, enter the server and database information. The user account used to create the database must have sysadmin privileges in the SQL Server instance. Consult the [Database](/server/management/devolutions-server-console/devolutions-server-settings/database/) topic for more information. To use ***Windows Authentication*** to connect to the database, it is important to change the Application Pool Identity in the IIS Manager and set the proper permission of the service account on the SQL database. Please consult [How to Configure {{ de.DVLS }} to use integrated security](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/). The following article about [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/) describe which accounts that can be created prior to deploy {{ de.DVLS }}. 
![Database Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8054.png)  
1. Under ***General***, enter a custom ***Name*** and ***Description***. Under ***Serial***, provide a license serial that has been received by email upon buying the product. If you did not buy any {{ de.DVLS }} license yet, you may [Request a 30-days trial](https://server.devolutions.net/trial). 
![General and Registration Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8051.png)  
1. Under ***Installation Source***, select to either Download from the web (latest version) or Install from zip file available from the [Download](https://server.devolutions.net/home/download) page. 
![Source Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8053.png)  
1. Under General, select the Website, Web Application Name and [Access URI](/kb/devolutions-server/knowledge-base/access-uri/) required to reach the {{ de.DVLS }} web page. Under Installation Destination, set the Installation Folder where the instance's files will be located. The process to run Web sites has been granted the proper permissions under c:\inetpub\wwwroot. We recommend to create a new folder beneath it and create the {{ de.DVLS }} instance within this folder. Under Application Pool, set the Application Pool Name. 
{% snippet icon.badgeCaution %} 
We do not recommend to set the installation folder to C:\Program Files or C:\Program Files (x86). {{ de.DVLS }} is a web application and this could result in unwanted behavior and issues because IIS do not have enough permissions to run web applications that are located under those folders. If you want to set the web application folder in a location different than the default C:\Inetpub\wwwroot folder, the IIS_IUSRS builtin local machine group will need Read and Read & Execute permissions on the entire {{ de.DVLS }} web application folder structure. 
{% endsnippet %} 

![Destination dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8170.png)  

10. Under Administration Credentials, fill in the information to create a {{ de.DVLS }} Custom administrator account. All fields are required.  
![Create An Administrator User](https://webdevolutions.azureedge.net/docs/de/server/clip10323.png)  
1. Under Scheduler Service, when enabling the Install Scheduler service option, please set the proper Service Account. The following features depend on the Scheduler: [Backup manager](/server/web-interface/administration/backup/backup-manager/), [Domain Users and Users Groups cache](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/), [Office365 Users and User Groups cache](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/), [Email notifications](/server/web-interface/administration/security-management/notifications/), [Cleanup Logs](/server/web-interface/administration/logs/cleanup-logs/) and [Privileged Access Management](/server/privileged-access-management/). 
![Scheduler Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8055.png)  
1. Choosing to not install the Scheduler, you will get the following warning message.  
![Scheduler Warning](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8056.png)  
1. Under Recovery Kit, select the destination folder and file name of the {{ de.DVLS }} recovery kit file. Set a password to protect the Encryption Keys. If the Include sensitive data option is enabled, the SQL authentication credentials will be included in the recovery kit. 
{% snippet icon.shieldNotice %} 
We recommend to protect the Recovery Kit file in a safe to avoid data loss if {{ de.DVLS }} has to be restored. 
{% endsnippet %} 

![Backup the Encryption Keys Dialog](https://webdevolutions.azureedge.net/docs/de/server/clip10324.png)  
14. Under ***Settings***, validate the configuration and click ***Install***. 
![Settings Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8057.png)   

Once the installation is complete, a summary indicates if the {{ de.DVLS }} has been deployed correctly.  

![Progress Installation Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8059.png)  

### Test the installation 
To test the server installation, click on navigate to the instance URL (e.g.: http://<Machine_Name>/<InstanceName>) with any web browser or click on the Navigate to Website button in the {{ de.DVLSCONSOLE }}.  

![{{ de.DVLSCONSOLE }}](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8060.png)   

{% snippet icon.badgeNotice %} 
In some situations, the web page may not load properly. Ensure that the IIS IUSRS local built-in group has full read access on the encryption.config file located in the App_Data sub folder located in the {{ de.DVLS }} web application folder (i.e., **c:\inetpub\wwwroot\dvls\App_Data**). If there is still an issue, contact us at [service@devolutions.net](mailto:service@devolutions.net) 
{% endsnippet %}
 
To test the connection from a client by creating a data source in {{ en.RDM }}. Please consult the [How to Configure Client Data Source](/kb/devolutions-server/how-to-articles/configure-client-data-source/) for more information. 