## Ownership Data Skew

Even with all of the work that Salesforce does to maintain correct access for security groups, most customers will never encounter performance issues unless they are performing updates that affect many users or large amounts of data. However, there are certain common configurations that greatly increase the probability of **performance** problems. When **a single user owns** more than **10,000 records of an object**, we call that condition **ownership data skew**. One of the common patterns involves customers concentrating ownership of data so that a single user or queue, or all the members of a single role or public group, owns most or all of the records for a particular object.

### Example
For example, a customer can assign all of his or her unassigned leads to a dummy user. This practice might seem like a convenient way to park unused data, but it can cause performance issues if those users are moved around the hierarchy, or if they are moved into or out of a role or group that is the source group for a sharing rule. In both cases, Salesforce must adjust a very large number of entries in the sharing tables, which can lead to a long-running recalculation of access rights.

### Solution
Distributing ownership of records across a greater number of users will decrease the chance of **long-running updates** occurring..

### Tip
You can take the same approach when dealing with a large amount of data that is owned by or visible to the users under a single portal account—changing the owner of that account or moving those users in the hierarchy requires the **system to recalculate all the sharing and inheritance** for all the data under the account.

### When you hava a  Compelling reason against Distributing Ownership
If you do have a compelling reason for assigning ownership to a small number of users, you can **minimize possible performance impacts** by **not assigning the user(s) to a role**.

- If the user(s) must have a role to share data, we recommend that you:
- Place them in a separate role at the top of the hierarchy
- Not move them out of that top-level role
- Keep them out of public groups that could be used as the source for sharing rules

### References
<a href="https://developer.salesforce.com/docs/atlas.en-us.draes.meta/draes/draes_group_membership_data_skew.htm" target='_new'>Ownership Skew</a>
