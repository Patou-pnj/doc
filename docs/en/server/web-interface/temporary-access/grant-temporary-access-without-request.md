---
eleventyComputed:
  title: Grant temporary access to an entry in {{ en.DVLS }}
  order: 30
  description: Approvers can grant Temporary Access without request to a user and even if the user already has access.
---

{% snippet icon.badgeNotice %} 
To learn how to approve or deny a request, visit [Approve temporary access to an entry in {{ en.DVLS }}](/server/web-interface/temporary-access/approve-temporary-access/). 
{% endsnippet %}

The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. Approvers can grant ***Temporary Access*** without request from a user and even if the user already has access.

## Grant temporary access

1. In the ***Navigation Pane*** of {{ en.DVLS }}, select the entry you want to grant access to.  
1. Click on ***More***, then select ***Grant Temporary Access***. 
![Grant Temporary Access](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6027.png)  
1. Choose ***User*** and ***Access duration*** in the ***Grant Temporary Access*** window.  
![Grant Temporary Access window](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6030.png)  

 You can view the ***Entry's dependencies*** such as linked credentials and VPNs. Note that linked entries must be in the same vault. Credentials with PAM linked to regular vaults are not included.
 
 4. Click on ***Set custom time frame*** if you need to grant access for a specific period of time and write a short ***Message*** to the user explaining why you grant access.  
 1. Click ***Grant Access*** to close the window.  



