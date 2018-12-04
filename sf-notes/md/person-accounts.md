# Notes

## Person Accounts
Person accounts store information about individual people by combining certain  **Account and Contact fields** into a single record.

Person accounts are accounts that can also be used as contacts in many situations. However, there are key areas in which person accounts differ from business accounts and contacts, or have unique considerations.


NOTE:
IMPORTANT: **After Person Accounts is enabled, it can’t be disabled**. We recommend that you create a sandbox to preview how Person Accounts affect your Salesforce org.

## Enable Person Accounts

- Make sure you meet the following prerequisites.
    - The account object has at least one record type.
    - User profiles that have read permission on accounts have read permission on contacts.
    - The organization-wide default sharing is set so that either Contact is Controlled by Parent or both Account and Contact are Private.
- From Setup, enter **Account Settings** in the Quick Find box, and then select **Allow Customer Support to enable Person Accounts**.
    - We’ll verify your org meets the prerequisites, then send you an email with additional information. If you don’t see a message verifying you meet the prerequisites, go back to step 1.
- Contact Salesforce Customer Support by **logging a case to enable Person Accounts**.
- Refer to the email we sent about what to include in the case.
- After Person Accounts is enabled, a person account record type is created. You can create additional record types for person account if needed.
- Assign the person account record type to user profiles.


### Prepare Business Accounts to be Converted to Person Accounts
Each account and contact that you plan to convert to must meet these conditions.
1. Each account must have one contact. It can’t have more than one.
2. The account and contact must have the same record owner.
3. The account and contact must have the same currency values.
4. The Parent Account field on the Account must be blank.
5. The Reports To field on the Contact must be blank.
6. The Account is not set as a Parent Account for any other accounts.
7. The Contact is not set as a Reports To for any other contacts


### References
- [Enable Person Accounts](https://help.salesforce.com/articleView?id=account_person_enable.htm&type=5)
- [Considerations for Using Person Accounts](https://help.salesforce.com/articleView?id=account_person_behavior.htm&type=5) 

<object   data="https://resources.docs.salesforce.com/216/latest/en-us/sfdc/pdf/salesforce_B2C_implementation_guide.pdf" type="application/pdf" style="width: 100%; height: 800px;">

            <p>It appears you don't have a PDF plugin for this browser</p>
</object>
 
