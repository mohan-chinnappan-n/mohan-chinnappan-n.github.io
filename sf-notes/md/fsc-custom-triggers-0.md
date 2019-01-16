### Financial Services Cloud Custom Triggers


- FinServ__AccountAccountRelationTrigger.trigger on	AccountAccountRelation
- FinServ__AccountContactRelationTrigger.trigger on	AccountContactRelation
- FinServ__AccountTrigger.trigger on	Account
- FinServ__AlertTrigger.trigger on	Alert
- FinServ__AssetsAndLiabilitiesTrigger.trigger on	AssetsAndLiabilities
- FinServ__ContactContactRelationTrigger.trigger on	ContactContactRelation
<hr/>
- FinServ__ContactTrigger.trigger on	Contact
    **Before insert**: Creates an individual (Account - Representing Party) when the individual contact is promoted as an individual as follows.
        - For each account that is passed, creates a contact.
        - For each contact, adds AccountId.
        - For each account, in a future method, adds ContactId.
        - Sets IndividualId__c to AccountId concatenated with the current datetime.

    **After insert**: Validates that the referenced individual account does not have a contact associated with it. This check is bypassed during a lead conversion.
    **Before update**: Validates that the update on the account record:
        - Hasn’t changed the record type of the account from individual to another record type.
        - Hasn’t changed the record type of the account from any other record type to an individual.
        - Validates that the referenced individual account does not have a contact associated with it.
    **After update**: Syncs the account associated with the updated contact to reflect the updated fields. The following fields are synced:
        - AccountName
        - OwnerId
        - IndividualType__c
        - RecordTypeId

- FinServ__EventTrigger.trigger on	Event
- FinServ__FinancialAccountRoleTrigger.trigger on	FinancialAccountRole
- FinServ__FinancialAccountTrigger.trigger on	FinancialAccount
- FinServ__FinancialGoalTrigger.trigger on	FinancialGoal
- FinServ__FinancialHoldingTrigger.trigger on	FinancialHolding
- FinServ__LeadTrigger.trigger on	Lead
- FinServ__OpportunityTrigger.trigger on	Opportunity
- FinServ__RBLFilterCriteriaTrigger.trigger on	RBLFilterCriteria
- FinServ__ReciprocalRoleTrigger.trigger on	ReciprocalRole
- FinServ__RevenueTrigger.trigger on	Revenue
- FinServ__RollupByLookupConfigTrigger.trigger on	RollupByLookupConfig
- FinServ__SecuritiesTrigger.trigger on	Securities
- FinServ__TaskTrigger.trigger on	Task

### References
<a href='https://developer.salesforce.com/docs/atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/fsc_api_custom_trigger_usage.htm' target='_new'>Financial Services Cloud Custom Triggers</a>

