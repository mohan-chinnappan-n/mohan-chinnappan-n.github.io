## FSC FAQs

#### FSC Integrations
 -  FSC Integratons supported: ( not a complete list)
     - eMoney
     - Guidewire 
     - Velocity 
    ...

<hr/>
#### Data Loading tips
   - Disable Rollup during the large data load
 ![FSC Disable Rollup](md/fsc-disable-rollups.png)


<hr/>
#### FSC Migration/Install methods

 - Lightning migration is required
 - Transfer from Account centric to Client centric  - involves data transformations
 - Considerations for large Data Volume

 - Evaluate Method (A or B):

    A.  Start with new FSC Org
       - Migrate from old (sales + service) org to this new FSC Org
       - Easier method

    B. Upgrade Current Org with FSC
      -  Since you have current users in the system -  can make this path harder
<hr/>
####  How to turn on/off detailed error messages in FSC
 - Custom Settings > Industries Application Config > Manage > Edit > Show Detailed Error Messages

 ![FSC error msg level](md/FSC-error-detail-setup.png)

<hr/>
#### FSC Managed vs UnManaged packages:


- FSC Managed package 
    - has most features
    - regular upgrades

- FSC UnManaged package 
     - one-time
     - Like Dashboards

<hr/> 

#### FSC trigger - customization:
 - Can't customize current FSC triggers
 - Use lightning process builder for your custom needs


