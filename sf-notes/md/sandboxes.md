### Sandbox (SBX) Types

<img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/declarative-change-set-development/plan-for-changes-to-your-org/images/95ac58aac5dccdc28c647a8357f43ae5_dev_lifecycle.png" alt="">

- **Developer Sandbox** (use:DEV) [refresh:1d]
intended for **development and testing in an isolated environment**. A Developer Sandbox includes a copy of your production org’s configuration  - **metadata**.

- **Developer Pro Sandbox** (use:QA, IT, UTRG) [refresh:1d]
 intended for **development and testing in an isolated environment** and can host larger data sets than a Developer sandbox. A Developer Pro sandbox includes a copy of your production org’s configuration - **metadata**. <br/> Use a Developer Pro sandbox to handle more development and quality assurance (QA) tasks and for integration testing or user training.

- **Partial Copy Sandbox** (use:UAT, IT, UTRG) [refresh:5d]
intended to be used as a testing environment. This environment includes a copy of your production org’s configuration (metadata) and a sample of your production org’s data as defined by a sandbox template.<br/> Use a Partial Copy sandbox for quality assurance tasks such as user acceptance testing (UAT), integration testing, and training.

- **Full Sandbox** (use:TESTING, LoadTesting, Staging) [refresh:29d]
intended to be used as a **testing environment**. Only Full sandboxes support performance testing, load testing, and staging. Full sandboxes are a **replica of your production org, including all data, such as object records and attachments, and metadata**. The length of the refresh interval (29d) makes it difficult to use Full sandboxes for development.  
We recommend that you apply a sandbox template so that your sandbox contains only the records that you need for testing or other tasks.

When you create a Full sandbox, you also have to decide **how much field tracking history and Chatter activity to include**.
- The default is to omit field tracking, but you can include up to 180 days of field tracking. If you track field history for many objects in your production org, specify fewer days to avoid generating an excessive amount of data.
- Chatter activity data can be extensive, which can add a significant amount of time to your Full sandbox copy.
- Limit the amount of field history that you copy, and copy your Chatter data only if you need it for your testing use cases.


### References:
- [Sandbox Types and Templates ](https://help.salesforce.com/articleView?id=create_test_instance.htm&type=5)
- [Understand Salesforce Application Lifecycle Management](https://trailhead.salesforce.com/en/content/learn/modules/application-lifecycle-and-development-models/understand-what-application-lifecycle-management-is)
-[Change Set: Plan for Changes to Your Org ](https://trailhead.salesforce.com/content/learn/modules/declarative-change-set-development/plan-for-changes-to-your-org)
