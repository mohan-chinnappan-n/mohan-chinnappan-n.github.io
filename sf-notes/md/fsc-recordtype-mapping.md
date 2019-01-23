
## FSC record type mapping

### Configure Custom Record Types for Groups

#### Group:

A group gives insight into a customer’s financial circles, such as a household with its family members and professional connections. 
A group provides an overall view of its members by rolling up their information. You can extend a group with custom fields and more.

#### Steps:

First create custom record types on <b>Account</b>, based on the <b>household</b> record type. 
Configure the record type mapping for the custom group record types, then assign the record types to the user profiles that will use them.


1. From Setup > Object Manager > locate Account.
2. Record Types > click **New**.
3. Under Existing Record Type select: **Household**, give your new record type a label, add a description and set it as active.
4. Save your changes.


5. From Setup > enter metadata in Quick Find, > select Custom Metadata Types.
6. Click **Group Record Type Mapper**, and then **Manage Group Record Type Mappers**.
7. Click **New**.

8. Complete the following information for the record type mapper.
    Enter the label of the record type created in step 3.
    Don’t change the automatically set label.
    Enter Account Type as Account record type name.
    Enter the record type’s namespace.


9. Save your changes.

Follow the instructions in Assign Record Types and Page Layouts in the Enhanced Profile User Interface to assign the new record types to the Personal Banker and Advisor profiles.
When advisors and personal bankers create a group, this custom record type is available to use.

<img width="800" src='md/rt-cmt-1.png'/>
<hr/>
<img width="800" src='md/rt-cmt-2.png'/>
#
### Reference

<a target='_new' href="https://developer.salesforce.com/docs/atlas.en-us.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_config_group_custom_record.htm">
 Configure Custom Record Types for Groups
</a>

<img alt="RT Mapper Group" src="md/rtMapper-Group.gif" width="1200"/>


### Configure Custom Record Types for Individuals

First create custom record types on <b>account and contact</b> based on the <b>individual</b> record types. 
Configure the record type mapping for the custom **individual** record type, then assign the record types to the user profiles that will use them.

1. From Setup > Object Manager > locate **Account**.
2. Record Types > click **New**.
3. Under Existing Record Type select: **Individual**, give your new record type a label, add a description and set it as active.
4. Save your changes.

5. From Setup > Object Manager > locate **Contact**.
6. Record Types > click **New**.
7. Under Existing Record Type select: **Individual**, give your new record type a label, add a description and set it as active.
8. Save your changes.



9. From Setup > enter metadata in Quick Find, > select Custom Metadata Types.
10. Click **Group Record Type Mapper**, and then **Manage Individual Record Type Mappers**
11. Click **New**.

8. Complete the following information for the record type mapper.
    - Enter a label.
    - Don’t change the automatically set name.
    - Enter the name of the Account Record Type you added in step 3.
    - Enter the account record type’s namespace.
    - Enter the name of the Contact Record Type you added in step 7.
    - Enter the contact record type’s namespace.
9 Save your changes.



Follow the instructions in Assign Record Types and Page Layouts in the Enhanced Profile User Interface to assign the new record types to the Personal Banker and Advisor profiles.
When advisors and personal bankers create a account or contact, this custom record type is available to use.

### Reference
<a  target="_new" href="https://developer.salesforce.com/docs/atlas.en-us.financial_services_cloud_admin_guide.meta/financial_services_cloud_admin_guide/fsc_admin_config_indiv_custom_record.htm">Configure Custom Record Types for Individuals</a>


