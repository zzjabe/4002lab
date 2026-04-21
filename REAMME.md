1. What change you want(ed) to make in your application?  
   I enabled the Organizations feature in Clerk and updated the application to support multi-organization access control, including setting an active organization and using organization-based roles for authorization.

2. What tool or tools you've made use of to make this change?  
   I used Clerk’s authentication and organization tools, specifically useOrganization, useOrganizationList, setActive, and getAuth from @clerk/react and @clerk/express, along with Express middleware for role-based access control.

3. How this change affects the user experience?  
   This change improves user experience by allowing all authenticated users to create roles within their organization, while ensuring that only users with the admin role in that organization can delete roles. This creates a clearer and safer permission structure inside the app.

4. How this change affects your understanding, or conceptualization, of the app?  
   This change helped me better understand the separation between authentication and authorization. I learned how Clerk provides organization context through the session token, and how backend middleware must explicitly enforce rules such as “any member can create, but only organization admins can delete” to properly secure application behavior.
