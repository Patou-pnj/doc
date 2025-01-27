---
eleventyComputed:
  title: Create a {{ en.DVLS }} instance
  order: 30
  status: Topic available in German language
  description: Multiple {{ en.DVLS }} instances can be hosted on the same server. Each instance resides in its own web application within IIS.
---
{% snippet, "badgeInfo" %}
If you have recently received your serial license keys, please refer to [Getting started](/server/getting-started/).

For more information about any of the features in the deploy wizard, please consult their respective topic under [Server Settings](/server/management/devolutions-server-console/devolutions-server-settings/general/).

{% endsnippet %}

Multiple {{ en.DVLS }} instances can be hosted on the same server. Each instance resides in its own web application within IIS. The following steps are carried out using the {{ en.DVLSCONSOLE }} and are also valid for the ***free edition*** of {{ en.DVLS }}.

## IIS web server installation
1. Install {{ en.DVLSCONSOLE }} on the web server. It is available from the [Download](https://server.devolutions.net/home/download) page.
1. Execute {{ en.DVLSCONSOLE }} with elevated privileges (run as administrator). This is performed by right-clicking on the application and selecting ***Run as administrator***.
   {% snippet, "shieldWarning" %}
   All operations performed through the {{ en.DVLSCONSOLE }} are done with the credentials used to launch {{ en.DVLSCONSOLE }}. If you must use other credentials, you will need to launch another Windows session. The ***RunAs*** command does not offer the option of starting a process with elevated privileges. The Run as different user option can work only if the account is a member of the server's local administrator group.
   {% endsnippet %}

   ![Run as administrator](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8175.png)
3. In the {{ en.DVLSCONSOLE }}, click on the ***New*** button or the ***Install New Instance*** button to deploy a new server instance using the [basic installation](#basic-installation) or the [advanced installation](#advanced-installation) wizard. It is also possible to [***Migrate SQL Data Source***](/server/kb/how-to-articles/migrate-sql/).
![Deploy a new {{ en.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0049.png)

### Basic installation
1. If a SQL Server instance is not available on the machine where {{ en.DVLS }} is hosted, a SQL Server Express edition instance will be installed by the wizard. An internet connection is required to download the SQL Server Express edition and the following prerequisites: [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), and [ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer). 
![Basic installation dialog](https://cdnweb.devolutions.net/docs/DVLS6011_2024_1.png)
1. The following dialog provides the credentials created for the sa SQL account, the {{ en.DVLS }} administrator account and the Encryption Key password. Click on the ***Save As*** button to save the information in a file.
![Important credentials dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8177.png)
1. The following dialog displays the SQL Server information, including the ***sa*** account credentials, that will be used by {{ en.DVLS }} to create and connect to the SQL database.
1. Once the installation is successfully completed, the wizard will display the installation summary and will automatically open the default browser to connect on the {{ en.DVLS }} web interface.
![Installation summary report](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8181.png)
1. On the {{ en.DVLS }} web interface, use the credentials provided in step 2 to log in. Afterward, a prompt will request a password change before continuing with the login process.  
![Change your password prompt](https://cdnweb.devolutions.net/docs/DVLS6013_2024_1.png)  
1. Enter your license. To activate the free edition, click the ***Activate the Free Version*** button to immediately access Devolutions Server with a free license.

### Advanced installation
1. For the first step, the installation wizard will run diagnostics on the server to verify if the IIS Server has all the necessary web server prerequisites installed and is ready to run {{ en.DVLS }}. Missing features are marked with an error icon. The Install Prerequisites button will install all missing features using a PowerShell script.Click on Close to continue. An internet connection is required for [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) and [ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer).
![IIS Features Diagnostic](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8049.png)
1. The License Agreement needs to be accepted to proceed.
![{{ en.DVLS }} End User License Agreement](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8050.png)
1. Under ***Database***, enter the server and database information. The user account used to create the database must have sysadmin privileges in the SQL Server instance. Consult [Database](/server/management/devolutions-server-console/devolutions-server-settings/database/) for more information. To use ***Windows Authentication*** to connect to the database, it is important to change the Application Pool Identity in the IIS Manager and set the proper permission of the service account on the SQL database. Please consult [Configure {{ en.DVLS }} to use domain single sign-on (SSO)](/server/kb/how-to-articles/configure-windows-authentication/). The following article about [Pre-Deployment Account Survey](/server/kb/knowledge-base/pre-deployment-account-survey/) describes which accounts that can be created prior to deploy {{ en.DVLS }}.
![Database dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8054.png)
1. Under ***General***, enter a custom ***Name*** and ***Description***. Under ***Serial***, provide a license serial that has been received by email upon buying the product. If you did not buy any {{ en.DVLS }} license yet, you may [Request a 30-days trial](https://server.devolutions.net/trial) or continue without a license to use {{ en.DVLS }} Free for up to 10 users. You will be prompted on {{ en.DVLS }} first launch to ***Activate the Free Version***.
![General and registration dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8051.png)
1. Under ***Installation Source***, select to either Download from the web (latest version) or Install from zip file available from the [Download](https://server.devolutions.net/home/download) page.
![Source dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8053.png)
1. Under General, select the Website, Web Application Name and [Access URI](/server/kb/knowledge-base/access-uri/) required to reach the {{ en.DVLS }} web page. Under Installation Destination, set the Installation Folder where the instance's files will be located. The process to run Websites has been granted the proper permissions under **C:\inetpub\wwwroot**. We recommend to create a new folder beneath it and create the {{ en.DVLS }} instance within this folder. Under Application Pool, set the Application Pool Name.
   {% snippet, "badgeCaution" %}
   We do not recommend to set the installation folder to **C:\Program Files**, **C:\Program Files (x86)**, or **C:\inetpub**. {{ en.DVLS }} is a web application and this could result in unwanted behavior and issues because IIS do not have enough permissions to run web applications that are located under those folders. If you want to set the web application folder in a location different than the default **C:\Inetpub\wwwroot** folder, the IIS_IUSRS built in local machine group will need Read and Read & Execute permissions on the entire {{ en.DVLS }} web application folder structure.
   {% endsnippet %}

   ![Destination dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8170.png)

7. Under ***Administration Credentials***, fill in the information to create a {{ en.DVLS }} Custom administrator account. All fields are required.
![Create An Administrator User](https://cdnweb.devolutions.net/docs/docs_en_server_clip10323.png)
1. Under Scheduler Service, when enabling the Install Scheduler service option, please set the proper Service Account. The following features depend on the Scheduler: [Backup manager](/server/web-interface/administration/backup/backup-manager/), [Domain Users and Users Groups cache](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/), [Office365 Users and User Groups cache](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/), [Email notifications](/server/web-interface/administration/security-management/notifications/), [Cleanup Logs](/server/web-interface/administration/logs/cleanup-logs/) and [Privileged Access Management](/pam/server/).
![Scheduler dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8055.png)
1. Choosing to not install the Scheduler, you will get the following warning message.
![Scheduler warning](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8056.png)
1. Under [Recovery Kit](/server/management/recovery-kit/), select the destination folder and file name of the {{ en.DVLS }} recovery kit file. Set a password to protect the Encryption Keys. If the Include sensitive data option is enabled, the SQL authentication credentials will be included in the recovery kit.
   {% snippet, "shieldNotice" %}
   We recommend to protect the Recovery Kit file in a safe place to avoid data loss if {{ en.DVLS }} has to be restored.
   {% endsnippet %}

   ![Backup the encryption keys](https://cdnweb.devolutions.net/docs/docs_en_server_clip10324.png)
11. Under ***Summary***, validate the configuration and click ***Install***.
![Summary dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8057.png)
12. Once the installation is complete, a summary indicates if the {{ en.DVLS }} has been deployed correctly, click ***OK*** to close this window.
![Installation progress](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8059.png)

### Test the installation
To test the server installation, navigate to it (e.g.: http://<Machine_Name>/<InstanceName>) with any web browser or click on the ***Navigate to Website*** button in the {{ en.DVLSCONSOLE }}.
![{{ en.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0043.png)

{% snippet, "badgeNotice" %}
In some situations, the web page may not load properly. Ensure that the IIS IUSRS local built-in group has full read access on the **encryption.config** file located in the App_Data sub folder located in the {{ en.DVLS }} web application folder (i.e., **C:\inetpub\wwwroot\dvls\App_Data**). If there is still an issue, contact us at [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}

To test the connection from a client by creating a data source in {{ en.RDM }}. Please consult [Configure a client data source](/server/kb/how-to-articles/configure-client-data-source/) for more information.

## Kestrel web server installation
Installing {{ en.DVLS }} with Kestrel requires fewer dependencies; in particular, IIS does not need to be installed on the machine.

The installation process is very similar to the [IIS web server advanced installation](/server/getting-started/installation/create-server-instance/#advanced-installation). Instead of specifying a website and an application under IIS, enter URL to which the application listens (for example, **https://localhost:5000**). The access URI represents the URI used to access our application
served on the given HTTP listener.

Known limitations:
* The application must be served on / ("http://localhost:5000/").
* Windows authentication is not currently supported under Kestrel.