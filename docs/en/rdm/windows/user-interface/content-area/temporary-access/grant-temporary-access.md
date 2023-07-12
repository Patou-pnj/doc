---
eleventyComputed:
  title: Grant temporary access to an entry in {{ en.RDM }}
  description: The Temporary Access feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request. 
---
{% youtube 'En3pmonz1f8' %}  

{% snippet icon.badgeInfo %} 
If a temporary access request was made in {{ en.RDM }} from a {{ en.HUB }} database, the authorization process must be performed in {{ en.HUB }}. See [Grant temporary access to an entry in {{ en.HUBB }}](/hub/web-interface/hub-overview/temporary-access/grant-temporary-access/). 
{% endsnippet %}
 
The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request. 

{% snippet icon.badgeInfo %} 
When using {{ en.DVLS }} , Microsoft SQL Server or Microsoft Azure SQL data sources, you must first [Enable temporary access](/kb/remote-desktop-manager/how-to-articles/enable-temporary-access/) in {{ en.RDM }}. 
{% endsnippet %}
 
To learn how to view your past and current requests, go to [View temporary access requests](#view-temporary-access-requests).   

To learn how to respond to a request, go to [Approve/Deny temporary access requests](#approvedeny-temporary-access-requests).  

## View temporary access requests 

To view all your past and current requests, you must use the following ***Pending Access Requests*** box to open the ***Temporary Access Requests*** window.  
![Dashboard – Pending Access Requests](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2072.png) 

In the ***Temporary Access Requests*** window, you can see all your temporary access requests and sort them by ***Status***, ***Username***, ***Data source user***, ***Entry***, ***Action***, ***Date***, ***Request duration***, ***Authorized duration***, ***Authorizer username***, or ***Authorizer data source user***.  
![Show temporary access requests](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2074.png) 

It is also possible to display only certain requests with the ***Status*** drop-down menu or with the filter bar at the top.  

Using ***View messages***, you can view the ***Request message*** and the ***Authorization message*** of a specific request.  
![Request messages](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2076.png) 

Finally, clicking on ***Approve*** or ***Deny*** opens the ***Temporary Access Response*** window, which is described in the [next section](#approvedeny-temporary-access-requests). 

## Approve/Deny temporary access requests 

To respond to a request, you need to open the ***Temporary Access Response*** window. There are two ways to access it.  

The first option is to use the ***Pending Access Requests*** box (see image below) in the ***Overview*** tab of your ***Dashboard***. Clicking on either the green check mark (approve the request) or the red "X" (deny the request) next to a request will open the ***Temporary Access Response*** window.  
![Pending Access Requests](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2077.png) 

The second option requires you to go through the other ***Pending Access Requests*** box described in the [previous section](#view-temporary-access-requests). Whatever way you choose to access the response window, the result will be the same.  
![Temporary Access Response](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2080.png) 

This view is divided into two sections: 

* The ***Request Info*** section contains information about the user's request. Because this was done on the user's side, fields in this section cannot be edited. 
* The ***Response Parameters*** section allows you to change the temporary access duration specified by the user. It is also possible to write a message to the user explaining your decision, but it remains optional. 

Clicking on ***Send response*** will approve or deny the request, depending on what you selected earlier. A confirmation window will pop up which you can make disappear by clicking on ***OK***. 

{% snippet icon.badgeInfo %} 
To learn more about the end user experience in {{ en.RDM }}, visit [Request temporary access to an entry in {{ en.RDM }}](/rdm/windows/user-interface/content-area/temporary-access/request-temporary-access/). 
{% endsnippet %}