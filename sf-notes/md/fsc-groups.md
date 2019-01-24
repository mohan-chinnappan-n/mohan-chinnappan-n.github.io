### FSC groups

- A group gives insight into a customer’s financial circles, such as a Household with its family members and professional connections 
- Type of **Account record** that people and businesses can be related to through the Account Contact Relationship (ACR) object.
- FSC includes a group record-type for Households. 
- Use the Household group to relate:
    - people to a household 
    - a household members to external contacts
    - a household to external contacts 

### How to create Groups?
- You can create groups by adding a record-type to the Account object 
- Map it to the Custom Metadata Type of **Group Record Type**.

### Group Membership ( modeled using Account Contact Relationship - ACR object)
-  Relationship between a group and a person or business is called group membership
-  Defines the role of the member within the group
    -  Primary member ( person you contact first about things that affect the entire group) of the group?
    -  Each person can only have one primary group (where the roll-up happens, person’s information isn’t rolled up in any other group)
    - Roll up options:
        - Financial Accounts
        - Financial Goals
        - Events
        - Tasks
        - Assets and Liabilities
        - Referrals

- Membership Types
    - Direct (Individual Member)
        - The membership of a **person** in a group (for example, a household)
    - Indirect (Business Member)
        - The membership of a **business** in a group, when :
            - The business is related to a person in the group
            - The business’s **Add to Group** flag is set


### Group Relationships

- The relationship between a **person and a business or other account**
    - Account-Contact Relationship (ACR std)

- The relationship between **businesses, institutions, and groups**
    - Account-Account Relationship (AAR cust)

- The relationship between two people
    - Contact-Contact Relationship (CCR cust) 

- The nature of the relationship between a person and another person, business, or other
account
    - Reciprocal Role 

