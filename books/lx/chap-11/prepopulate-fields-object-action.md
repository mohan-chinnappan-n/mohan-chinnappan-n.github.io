## Goal: Pre-populate fields with values when you create a record  :

### Use case:

- Your inside sales teams’ typical quarterly quota is one fourth of their customers’ revenues from last year, upped by 10%.
- But that simple formula doesn’t always hold true, so you want to prefill the opportunity amount with that value, but let the user modify it.
- The benefit of the action is that users can do this efficiently without having to navigate to the full opportunity record page.


### Steps:

1. In the object management settings for activities, go to **Task Buttons, Links, and Actions**.
2. Create **New Action** with:
  - Action Type: **Create a Record**
  - Target Object: **Opportunity**
  - Record Type: **master**
  - Label: **New Oppty**
  - Success Message: Task is closed!
3. Edit the **Action Layout**:
  - Check the required fields

4. Provide predefined values for the **Amount** field.
```JavaScript
Account.Last_Year_Revenue__c  * 1.10  / 4


```

5. Add this in the **Task Page Layout**:
  - Add this action **New Oppty** from **Mobile & Lightning Actions** section into **Salesforce Mobile and Lightning Experience Actions**

6. Test:
  - Desktop
  - Mobile


  #### Notes:
  - Adding too many fields to an action layout can impact user efficiency. Recommended maximum is  8 fields.
  - To reduce the number of fields, you can set predefined values for fields that need a value, but won't often be edited.
  - You can safely remove those fields from the layout. Set predefined values from the action detail page.
